import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, 'caregiverlog.html');
const outputPdfPath = path.join(__dirname, 'caregiverlog-optimized.pdf');
const verificationDir = path.join(__dirname, 'verification');

const EXPECTED_MONTH_DAY_COUNTS = [31, 30, 29, 31, 30, 29];
const EXPECTED_TOTAL_DAYS = EXPECTED_MONTH_DAY_COUNTS.reduce((sum, days) => sum + days, 0);

if (!fs.existsSync(verificationDir)) {
  fs.mkdirSync(verificationDir, { recursive: true });
}

const pageUrl = `file://${htmlPath}`;

const browser = await chromium.launch();
const page = await browser.newPage();

await page.emulateMedia({ media: 'print' });
await page.goto(pageUrl, { waitUntil: 'load' });
await page.waitForSelector('.page');
await page.waitForTimeout(250);

const qc = await page.evaluate((expectedDayCounts) => {
  const pages = [...document.querySelectorAll('.page')];
  const issues = [];

  const pageNumbers = [];
  pages.forEach((pageEl) => {
    if (pageEl.classList.contains('cover-page')) {
      return;
    }
    const numberNode = pageEl.querySelector('.page-number');
    if (!numberNode) {
      return;
    }
    const value = Number(numberNode.textContent);
    if (!Number.isFinite(value)) {
      issues.push('Found a page with a missing or invalid page number.');
      return;
    }
    pageNumbers.push(value);
  });

  const sortedNumbers = [...pageNumbers].sort((a, b) => a - b);
  const duplicateNumbers = [...new Set(sortedNumbers.filter((n, i) => sortedNumbers.indexOf(n) !== i))];
  if (duplicateNumbers.length) {
    issues.push(`Duplicate page numbers detected: ${duplicateNumbers.join(', ')}`);
  }

  const expectedLastNumber = pageNumbers.length;
  if (sortedNumbers.length && sortedNumbers[sortedNumbers.length - 1] !== expectedLastNumber) {
    issues.push(`Page numbering does not end at ${expectedLastNumber}.`);
  }

  for (let i = 0; i < sortedNumbers.length; i += 1) {
    if (sortedNumbers[i] !== i + 1) {
      issues.push(`Page numbering gap detected before page ${sortedNumbers[i]}.`);
      break;
    }
  }

  const dividers = pages
    .map((pageEl, index) => ({ pageEl, index }))
    .filter(({ pageEl }) => pageEl.classList.contains('divider-page'));

  if (dividers.length !== expectedDayCounts.length) {
    issues.push(`Expected ${expectedDayCounts.length} month divider pages, found ${dividers.length}.`);
  }

  const monthSummaries = dividers.map(({ pageEl, index }, monthIndex) => {
    const heading = pageEl.querySelector('.divider-card h1')?.textContent?.trim() || '';
    const dayRange = pageEl.querySelector('.divider-card h2')?.textContent?.trim() || '';
    const nextDividerIndex = dividers[monthIndex + 1]?.index ?? pages.length;
    const monthPages = pages.slice(index + 1, nextDividerIndex);

    const goalsPages = monthPages.filter((monthPage) => monthPage.querySelector('.monthly-goals-page')).length;
    const dailyLogPages = monthPages.filter((monthPage) => monthPage.classList.contains('daily-log-page')).length;
    const outcomesPages = monthPages.filter((monthPage) => {
      const label = monthPage.getAttribute('aria-label') || '';
      return label.includes('Monthly Outcomes Dashboard') && !label.startsWith('Sample');
    }).length;
    const healthPages = monthPages.filter((monthPage) => {
      const label = monthPage.getAttribute('aria-label') || '';
      return label.includes('Health, Behavior') && !label.startsWith('Sample');
    }).length;
    const combinedPages = monthPages.filter((monthPage) => monthPage.querySelector('.combined-dashboards-page')).length;
    const expectedDailyPages = expectedDayCounts[monthIndex] * 2;

    if (goalsPages !== 2) {
      issues.push(`Month ${monthIndex + 1}: expected 2 Goals & Focus pages, found ${goalsPages}.`);
    }
    if (dailyLogPages !== expectedDailyPages) {
      issues.push(`Month ${monthIndex + 1}: expected ${expectedDailyPages} daily log pages, found ${dailyLogPages}.`);
    }
    if (outcomesPages !== 1) {
      issues.push(`Month ${monthIndex + 1}: expected 1 Monthly Outcomes Dashboard page, found ${outcomesPages}.`);
    }
    if (healthPages !== 1) {
      issues.push(`Month ${monthIndex + 1}: expected 1 Health, Behavior & ADL Dashboard page, found ${healthPages}.`);
    }
    if (combinedPages !== 0) {
      issues.push(`Month ${monthIndex + 1}: found ${combinedPages} combined dashboard page(s); expected separate pages.`);
    }

    return {
      monthNumber: monthIndex + 1,
      heading,
      dayRange,
      goalsPages,
      dailyLogPages,
      outcomesPages,
      healthPages
    };
  });

  const lastDivider = dividers[dividers.length - 1]?.pageEl;
  const lastDayRange = lastDivider?.querySelector('.divider-card h2')?.textContent || '';
  const lastEndDayMatch = lastDayRange.match(/(\d+)\s*$/);
  const lastEndDay = lastEndDayMatch ? Number(lastEndDayMatch[1]) : null;
  const expectedLastDay = expectedDayCounts.reduce((sum, days) => sum + days, 0);

  if (lastEndDay !== expectedLastDay) {
    issues.push(`Expected final day marker ${expectedLastDay}, found ${lastEndDay ?? 'none'}.`);
  }

  const sampleOutcomes = pages.find((pageEl) => pageEl.getAttribute('aria-label') === 'Sample Monthly Outcomes Dashboard');
  const sampleHealth = pages.find((pageEl) => pageEl.getAttribute('aria-label') === 'Sample Health Dashboard');
  const sampleOutcomesCount = pages.filter((pageEl) => pageEl.getAttribute('aria-label') === 'Sample Monthly Outcomes Dashboard').length;

  if (sampleOutcomesCount !== 1) {
    issues.push(`Expected exactly 1 sample Monthly Outcomes Dashboard, found ${sampleOutcomesCount}.`);
  }
  if (!sampleOutcomes?.querySelector('.monthly-insights-page .insights-grid')) {
    issues.push('Sample Monthly Outcomes Dashboard is missing the blank-matching chart grid.');
  }
  if (!sampleHealth?.querySelector('.monthly-patterns-page .adl-visual-panel')) {
    issues.push('Sample Health Dashboard is missing the ADL progress panel.');
  }

  const blankOutcomesPages = pages.filter((pageEl) => {
    const label = pageEl.getAttribute('aria-label') || '';
    return label.includes('Monthly Outcomes Dashboard') && !label.startsWith('Sample');
  });

  blankOutcomesPages.forEach((dashboardPage) => {
    if (dashboardPage.querySelector('.combined-dashboards-page')) {
      issues.push(`${dashboardPage.getAttribute('aria-label')} uses combined layout instead of sample layout.`);
    }
    if (!dashboardPage.querySelector('.monthly-insights-page.blank-template .insights-grid')) {
      issues.push(`${dashboardPage.getAttribute('aria-label')} is missing the sample-matching insights grid.`);
    }
  });

  const tocPage = pages.find((pageEl) => pageEl.getAttribute('aria-label') === 'Table of Contents');
  if (!tocPage) {
    issues.push('Table of Contents page is missing.');
  } else {
    const tocEntries = [...tocPage.querySelectorAll('.toc-entry[data-page-label]')];
    const emptyEntries = tocEntries.filter((entry) => !entry.querySelector('.toc-page-num')?.textContent?.trim());
    if (emptyEntries.length) {
      issues.push(`Table of Contents has ${emptyEntries.length} entries without page numbers.`);
    }
  }

  pages.forEach((pageEl, index) => {
    const label = pageEl.getAttribute('aria-label') || `Page ${index + 1}`;
    const content = pageEl.querySelector('.page-content');
    if (!content) {
      return;
    }

    const isValidationTarget = (
      pageEl.querySelector('.monthly-goals-page')
      || pageEl.getAttribute('aria-label') === 'Daily Caregiver Log right page'
      || pageEl.querySelector('.monthly-insights-page.blank-template')
      || pageEl.querySelector('.monthly-patterns-page.blank-template')
      || pageEl.querySelector('.toc-page')
    );

    if (!isValidationTarget) {
      return;
    }

    if (content.scrollHeight > content.clientHeight + 2) {
      issues.push(`${label} overflows printable area (${content.scrollHeight}px > ${content.clientHeight}px).`);
    }
  });

  const goalsPages = pages.filter((pageEl) => pageEl.querySelector('.monthly-goals-page'));
  goalsPages.forEach((goalsPage, index) => {
    const border = window.getComputedStyle(goalsPage.querySelector('.page-content'));
    const borderWidth = Number.parseFloat(border.borderTopWidth || '0');
    if (!borderWidth) {
      issues.push(`Goals & Focus page ${index + 1} is missing the gold page border.`);
    }
  });

  return {
    totalPages: pages.length,
    numberedPages: pageNumbers.length,
    lastPageNumber: sortedNumbers[sortedNumbers.length - 1] || 0,
    monthSummaries,
    issues
  };
}, EXPECTED_MONTH_DAY_COUNTS);

console.log('Quality-control summary');
console.log(`Total interior pages: ${qc.totalPages}`);
console.log(`Numbered pages (excluding cover): ${qc.numberedPages}`);
console.log(`Final page number: ${qc.lastPageNumber}`);
console.log(`Configured day span: ${EXPECTED_TOTAL_DAYS} days across ${EXPECTED_MONTH_DAY_COUNTS.length} months`);
qc.monthSummaries.forEach((month) => {
  console.log(
    `Month ${month.monthNumber}: ${month.dayRange} | goals ${month.goalsPages} | daily logs ${month.dailyLogPages} | outcomes ${month.outcomesPages} | health ${month.healthPages}`
  );
});

if (qc.issues.length) {
  console.error('QC issues found:');
  qc.issues.forEach((issue) => console.error(`- ${issue}`));
  await browser.close();
  process.exit(1);
}

console.log('QC passed. Generating PDF...');

await page.pdf({
  path: outputPdfPath,
  width: '8.5in',
  height: '11in',
  printBackground: true,
  margin: { top: '0in', right: '0in', bottom: '0in', left: '0in' },
  preferCSSPageSize: true
});

fs.copyFileSync(outputPdfPath, path.join(__dirname, 'caregiverlog.pdf'));

const pages = await page.$$('.page');
for (let i = 0; i < pages.length; i += 1) {
  const handle = pages[i];
  const hasGoals = await handle.$('.monthly-goals-page');
  const hasOutcomesDashboard = await handle.$('.monthly-insights-page.blank-template');
  const hasHealthDashboard = await handle.$('.monthly-patterns-page.blank-template');
  const hasToc = await handle.$('.toc-page');
  const isDivider = await handle.$('.divider-page');
  const hasDailyLog = await handle.$('.daily-log-page');

  if (typeof dailyLogCaptured === 'undefined') {
    var dailyLogCaptured = { total: 0 };
  }

  const isMonthSixDivider = isDivider && (await handle.evaluate((el) => el.querySelector('.divider-card h1')?.textContent?.includes('MONTH 6')));
  const hasAuthorNote = await handle.$('.author-note-page');
  const isLastPage = i === pages.length - 1 || i === pages.length - 2;
  const shouldCapture = i < 8 || hasGoals || hasOutcomesDashboard || hasHealthDashboard || hasToc || isDivider || isMonthSixDivider || hasAuthorNote || isLastPage;
  const shouldCaptureDaily = hasDailyLog && i >= 7 && dailyLogCaptured.total < 4;

  if (!shouldCapture && !shouldCaptureDaily) continue;

  if (shouldCaptureDaily) {
    dailyLogCaptured.total += 1;
  }

  await handle.screenshot({
    path: path.join(verificationDir, `page-dom-${i + 1}.png`),
    animations: 'disabled'
  });
}

await browser.close();
console.log(`Wrote PDF: ${outputPdfPath}`);
console.log(`Wrote PDF: ${path.join(__dirname, 'caregiverlog.pdf')}`);
console.log(`Final page count: ${qc.totalPages}`);
