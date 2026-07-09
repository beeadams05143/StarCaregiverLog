const workbook = document.getElementById('workbook');

function pageMarkup(label, classNames, innerHTML, showNumber = true) {
  const classes = ['page', ...(classNames || [])].join(' ');
  const numberMarkup = showNumber ? '<div class="page-number"></div>' : '';
  return `<section class="${classes}" aria-label="${label}">${innerHTML}${numberMarkup}</section>`;
}

function articleMarkup(classNames, innerHTML) {
  const classes = ['page-content', ...(classNames || [])].join(' ');
  return `<article class="${classes}">${innerHTML}</article>`;
}

const aboutPage = articleMarkup(
  ['about-page'],
  `
    <header class="brand-header">
      <h1>About This Workbook</h1>
      <div class="title-rule"><span></span><b>☆</b><span></span></div>
    </header>

    <section class="info-block icon-copyright">
      <div class="icon-badge" aria-hidden="true"></div>
      <div>
        <h2>Copyright</h2>
        <p>© 2026 North Star Solutions Tech. All Rights Reserved.</p>
        <p>This workbook is protected by copyright. No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form or by any means, including photocopying, scanning, recording, or electronic reproduction, without prior written permission from the publisher, except for brief quotations in reviews or as otherwise permitted by copyright law.</p>
      </div>
    </section>

    <section class="info-block icon-license">
      <div class="icon-badge" aria-hidden="true"></div>
      <div>
        <h2>License</h2>
        <p>The purchaser may print unlimited copies of this workbook for use within their own household, organization, classroom, or agency.</p>
        <p>This workbook may not be:</p>
        <ul class="two-col-list">
          <li>Resold</li>
          <li>Redistributed</li>
          <li>Shared digitally</li>
          <li>Modified for resale</li>
          <li>Uploaded online</li>
        </ul>
      </div>
    </section>

    <section class="info-block icon-person">
      <div class="icon-badge" aria-hidden="true"></div>
      <div>
        <h2>Intended Use</h2>
        <p>The STAR Daily Caregiver Log is designed to help caregivers consistently document:</p>
        <ul class="two-col-list">
          <li>Physical health observations</li>
          <li>Activities of Daily Living (ADLs)</li>
          <li>Behavior and emotional regulation</li>
          <li>Prompt levels and independence</li>
          <li>Participation in Employment / Vocational, Community at Large, Home / Family Community, Leisure / Recreation, and Activities of Daily Living (ADLs)</li>
          <li>Significant events and caregiver observations</li>
        </ul>
        <p>The information collected may be used to improve communication between caregivers, identify patterns over time, support person-centered planning, and provide meaningful documentation for supervisors, guardians, care teams, and healthcare providers.</p>
      </div>
    </section>

    <section class="info-block icon-star">
      <div class="icon-badge" aria-hidden="true"></div>
      <div>
        <h2>About STAR</h2>
        <p>STAR stands for <strong>Support Tool for Autonomy and Reflection.</strong></p>
        <p>STAR was created to make documentation simpler, more meaningful, and more useful, helping caregivers spend less time on paperwork and more time supporting the people they serve.</p>
      </div>
    </section>

    <footer class="page-footer">
      <div class="footer-stars"><span></span><b>☆ ☆ ☆</b><span></span></div>
      <strong>North Star Solutions Tech</strong>
      <span>Support Tool for Autonomy and Reflection</span>
      <small>© 2026 North Star Solutions Tech. All rights reserved.<br>This workbook is protected by copyright. No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form or by any means without prior written permission from the publisher, except for brief quotations in reviews or as otherwise permitted by copyright law.</small>
    </footer>
  `
);

const quickReferencePage = articleMarkup(
  ['reference-page'],
  `
    <header class="star-title">
      <div class="star-mark">☆</div>
      <p>STAR</p>
      <span>Support Tool for Autonomy and Reflection</span>
      <h1>Quick Reference Guide</h1>
      <h2>Everything you need to complete the Daily Caregiver Log.</h2>
    </header>

    <div class="reference-grid">
      <section class="panel panel-health">
        <h3><span class="topic-icon" data-icon="🩺" aria-hidden="true"></span> Physical Health</h3>
        <div class="guide-row"><b>Appears Healthy</b><p>No new health concerns observed during the shift.</p></div>
        <div class="guide-row"><b>Illness / Discomfort</b><p>Document any signs of illness, pain, injury, fever, or physical complaints.</p></div>
        <div class="guide-row"><b>Sleep</b><p>Record hours slept, approximate bedtime, and whether night waking occurred.</p></div>
        <div class="guide-row"><b>Appetite</b><p>Normal, increased, or decreased.</p></div>
        <div class="guide-row"><b>Bowel Movement</b><p>Document whether a bowel movement occurred during your shift, if applicable.</p></div>
        <div class="guide-row"><b>PRN Medication</b><p>Record medication given, reason, and approximate time administered.</p></div>
      </section>

      <section class="panel panel-behavior">
        <h3><span class="topic-icon" data-icon="🙂" aria-hidden="true"></span> Behavior &amp; Mental Health</h3>
        <div class="guide-row"><b>Mood</b><p>Choose the word that best describes the individual's overall mood during the shift.</p></div>
        <div class="guide-row"><b>Aggression</b><p>If aggression occurred, select all types observed and rate the highest level of severity.</p></div>
        <div class="guide-row"><b>Attention</b><p>Choose the description that best reflects overall attention and engagement.</p></div>
        <div class="guide-row"><b>Anomaly</b><p>Document unusual behaviors, changes from baseline, or anything requiring follow-up.</p></div>
        <h3><span class="topic-icon" data-icon="🤝" aria-hidden="true"></span> Participation</h3>
        <div class="split-note">
          <p>Document participation in: Employment / Vocational, Community at Large, Home / Family Community, Leisure / Recreation, and Activities of Daily Living (ADLs).</p>
          <p>For each activity, record: Participated, hours, prompt level used, and notes or description of activity.</p>
        </div>
      </section>

      <section class="panel wide-panel panel-adl">
        <h3><span class="topic-icon" data-icon="🏠" aria-hidden="true"></span> Activities of Daily Living (ADLs)</h3>
        <div class="adls-grid">
          <div>
            <p><strong>Examples include:</strong></p>
            <ul>
              <li>Hygiene</li>
              <li>Dressing</li>
              <li>Cooking / Food Preparation</li>
              <li>Cleaning / Household</li>
              <li>Community Errands / Shopping</li>
              <li>Other Independent Living Skill</li>
            </ul>
          </div>
          <div>
            <p>Record the highest prompt level needed for each activity completed.</p>
            <table>
              <tr><th>Prompt Level</th><th>Description</th></tr>
              <tr><td>0 Independent</td><td>Completed without prompts or assistance.</td></tr>
              <tr><td>1 1-2 Prompts</td><td>Needed one or two verbal reminders.</td></tr>
              <tr><td>2 Periodic Prompts</td><td>Needed occasional reminders throughout the activity.</td></tr>
              <tr><td>3 Frequent Prompts</td><td>Needed repeated prompting to stay engaged or complete the task.</td></tr>
              <tr><td>4 Dependent</td><td>Required continuous prompting, hand-over-hand assistance, or caregiver-led completion.</td></tr>
            </table>
          </div>
        </div>
      </section>

      <section class="panel panel-alert">
        <h3><span class="topic-icon" data-icon="⚠️" aria-hidden="true"></span> Supervisor Notification</h3>
        <p>Check this box if follow-up is recommended because of:</p>
        <ul class="check-list">
          <li>Medication issue</li>
          <li>Illness or injury</li>
          <li>Behavioral incident</li>
          <li>Unusual behavior</li>
          <li>Other concern</li>
        </ul>
        <div class="notes-box">Notes</div>
      </section>
    </div>

    <footer class="tip-box"><strong>Tip:</strong> Document observations objectively. Describe what was seen or heard rather than making assumptions about intent.</footer>
  `
);

const sampleLogLeft = articleMarkup(
  ['log-page'],
  `
    <header class="log-header">
      <div class="star-mark">☆</div>
      <div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
      </div>
      <h1>Daily Caregiver Log</h1>
      <h2>Health &amp; Behavior Snapshot</h2>
    </header>

    <div class="field-line"><b>Date</b><span>5/14/2026</span><b>Caregiver</b><span>Jordan M.</span></div>
    <div class="field-line"><b>Individual</b><span>Alex R.</span></div>

    <section class="form-section health-section">
      <h3>Physical Health</h3>
      <div class="form-grid two">
        <div class="check-group">
          <label><span class="circle"></span> Appears healthy</label>
          <label><span class="circle"></span> Illness / discomfort <em>Yes</em> <em class="circled">No</em></label>
          <p>If yes, describe:</p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <p>Hours of sleep <span class="handwrite">7.5 hours</span></p>
          <p>Fell asleep at <span class="handwrite">9:30 PM</span></p>
          <p>Night waking <em>Yes</em> <em class="circled">No</em></p>
        </div>
        <div class="mini-card">
          <b>Appetite</b>
          <label><span class="circle checked"></span> Normal</label>
          <label><span class="circle"></span> Increased</label>
          <label><span class="circle"></span> Decreased</label>
        </div>
        <div class="mini-card">
          <p>Bowel Movement <em>Yes</em> <em class="circled">No</em></p>
          <p>Medication changes <em>Yes</em> <em class="circled">No</em></p>
          <p>PRN given today <em>Yes</em> <em class="circled">No</em></p>
          <p>Medication / Reason / Time</p>
          <span class="handwrite">N/A</span>
        </div>
      </div>
    </section>

    <section class="form-section behavior-section">
      <h3>Behavior / Mental Health</h3>
      <div class="form-grid three">
        <div class="check-group">
          <p><b>Mood</b> (circle one)</p>
          <label><span class="circle checked"></span> Stable</label>
          <label><span class="circle"></span> Anxious</label>
          <label><span class="circle"></span> Elevated</label>
          <label><span class="circle"></span> Dysregulated</label>
          <label><span class="circle"></span> Irritable</label>
        </div>
        <div>
          <p><b>Mood Notes</b></p>
          <p class="handwrite">Initially anxious before leaving for community outing. Accepted reassurance and transitioned successfully.</p>
        </div>
        <div>
          <p><b>Aggression</b> <em>Yes</em> <em class="circled">No</em></p>
          <p>Type (check all that apply)</p>
          <label><span class="box"></span> Verbal</label>
          <label><span class="box"></span> Physical</label>
          <label><span class="box"></span> Self Harm</label>
          <p>Severity <span class="scale">1 2 3 4</span></p>
        </div>
      </div>
      <div class="form-grid three">
        <div class="check-group">
          <p><b>Attention</b> (circle one)</p>
          <label><span class="circle checked"></span> Appropriate</label>
          <label><span class="circle"></span> Distracted</label>
          <label><span class="circle"></span> Fixated</label>
          <label><span class="circle"></span> Low engagement</label>
        </div>
        <div>
          <p><b>Anomaly / Unusual Behavior</b> <em>Yes</em> <em class="circled">No</em></p>
          <p>Notes:</p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
        </div>
        <div class="mini-card">
          <b>Notify Supervisor</b>
          <label><span class="box"></span> Medication</label>
          <label><span class="box"></span> Illness</label>
          <label><span class="box"></span> Injury</label>
          <label><span class="box"></span> Behavioral incident</label>
          <label><span class="box"></span> Unusual Behavior</label>
          <label><span class="box"></span> Other</label>
        </div>
      </div>
    </section>

    <section class="notes-section">
      <h3>General Notes</h3>
      <p class="handwrite">Completed all planned activities. Participated appropriately with peers. Enjoyed music during downtime. Needed one reminder to stay with the group while shopping.</p>
    </section>
    <footer class="log-footer">☆ Support Tool for Autonomy and Reflection</footer>
  `
);

const sampleLogRight = articleMarkup(
  ['log-page', 'right-log'],
  `
    <section class="form-section participation-section">
      <h3>Participation &amp; Independence</h3>
      <p class="subhead">Activities, Community &amp; Daily Living</p>
      <div class="today-focus">
        <b>Today's focus goal(s)</b>
        <label><span class="box"></span> Employment / Vocational</label>
        <label><span class="box checked-box"></span> Community at Large</label>
        <label><span class="box checked-box"></span> Home / Family Community</label>
        <label><span class="box"></span> Leisure / Recreation</label>
        <label><span class="box checked-box"></span> Activities of Daily Living (ADLs)</label>
      </div>
    </section>

    <section class="form-section participation-section">
      <h3>Participation Hours &amp; Prompt Levels</h3>
      <table class="log-table participation-table">
        <tr><th>Area</th><th>Participated?</th><th>Hours</th><th>Prompt Level (0-4)</th><th>Notes</th></tr>
        <tr><td>Employment / Vocational</td><td><span class="circled">Yes</span> No</td><td class="handwrite">1</td><td>0 <span class="circled">1</span> 2 3 4</td><td class="handwrite">Worked on packing orders. Stayed on task with minimal reminders.</td></tr>
        <tr><td>Community at Large</td><td><span class="circled">Yes</span> No</td><td class="handwrite">2</td><td>0 1 <span class="circled">2</span> 3 4</td><td class="handwrite">Grocery shopping and pharmacy. Needed occasional prompts.</td></tr>
        <tr><td>Home / Family Community</td><td><span class="circled">Yes</span> No</td><td class="handwrite">0.75</td><td><span class="circled">0</span> 1 2 3 4</td><td class="handwrite">Helped set the table for dinner.</td></tr>
        <tr><td>Leisure / Recreation</td><td><span class="circled">Yes</span> No</td><td class="handwrite">0.5</td><td>0 <span class="circled">1</span> 2 3 4</td><td class="handwrite">Listened to music during downtime.</td></tr>
      </table>
      <p class="prompt-key">Prompt Level Key: 0 - Independent · 1 - 1-2 prompts · 2 - Periodic prompts · 3 - Frequent prompts · 4 - Dependent</p>
      <div class="daily-summary participation-summary">
        <h4>Today's Participation Summary</h4>
        <p><b>Prompt Level Key</b> 0 = Independent · 1 = 1-2 prompts · 2 = Periodic prompts · 3 = Frequent prompts · 4 = Fully Dependent</p>
        <div class="summary-lines">
          <label>Today's Average Participation Prompt Level <span class="handwrite">1</span></label>
          <label>Employment / Vocational <span class="handwrite">1</span></label>
          <label>Community at Large <span class="handwrite">2</span></label>
          <label>Home / Family Community <span class="handwrite">0</span></label>
          <label>Leisure / Recreation <span class="handwrite">1</span></label>
        </div>
        <p>Add today's prompt levels. Divide by 4. Today's Average Prompt Level = <span class="summary-blank handwrite">1</span></p>
        <p>Use this value to plot the Average Participation Prompt Level line graph.</p>
      </div>
    </section>

    <section class="form-section adl-section">
      <h3>Activities of Daily Living (ADLs)</h3>
      <table class="log-table adl-table">
        <tr><th>ADL Completed</th><th>Prompt Level (0-4)</th><th>Notes</th></tr>
        <tr><td>Hygiene<span class="adl-examples">Showering, brushing teeth, washing hands, combing hair, clipping nails, shaving, applying deodorant</span></td><td><span class="circled">0</span> 1 2 3 4</td><td class="handwrite">Needed reminder to brush teeth.</td></tr>
        <tr><td>Dressing<span class="adl-examples">Choosing seasonally appropriate clothing, matching clothing, putting on shoes, dressing independently</span></td><td><span class="circled">0</span> 1 2 3 4</td><td class="handwrite">Chose appropriate clothing independently.</td></tr>
        <tr><td>Cooking / Food Preparation<span class="adl-examples">Preparing a favorite snack, making a sandwich, microwave use, pouring drinks, setting the table, cleaning up afterward</span></td><td>0 1 <span class="circled">2</span> 3 4</td><td class="handwrite">Assisted with meal prep. Needed help with stove.</td></tr>
        <tr><td>Cleaning / Household<span class="adl-examples">Making bed, laundry, vacuuming, wiping counters, dishes, taking out trash, organizing bedroom</span></td><td>0 1 <span class="circled">2</span> 3 4</td><td class="handwrite">Helped wipe counters and put dishes away.</td></tr>
        <tr><td>Community Errands / Shopping<span class="adl-examples">Using a shopping list, finding items, waiting in line, making purchases, carrying groceries, asking for assistance</span></td><td>0 1 <span class="circled">2</span> 3 4</td><td class="handwrite">Helped choose items. Needed occasional direction.</td></tr>
        <tr><td>Other Independent Living Skill<span class="adl-examples">Money skills, phone use, time management, personal organization, following visual schedules, technology use, self-advocacy</span></td><td>0 <span class="circled">1</span> 2 3 4</td><td class="handwrite">Used phone reminder for schedule.</td></tr>
      </table>
      <div class="daily-summary adl-summary">
        <h4>Today's ADL Summary</h4>
        <p><b>Highest Prompt Level</b></p>
        <div class="summary-lines">
          <label>Hygiene <span class="handwrite">0</span></label>
          <label>Dressing <span class="handwrite">0</span></label>
          <label>Cooking / Food Preparation <span class="handwrite">2</span></label>
          <label>Cleaning / Household <span class="handwrite">2</span></label>
          <label>Community Errands / Shopping <span class="handwrite">2</span></label>
          <label>Other Independent Living Skill <span class="handwrite">1</span></label>
        </div>
        <p>Use these values for the Activities of Daily Living (ADLs) mini line graphs.</p>
      </div>
    </section>

    <footer class="signature-line"><span>Caregiver Signature <b class="handwrite">Jordan M.</b></span><span>Date <b class="handwrite">5/14/2026</b></span></footer>
  `
);

const blankLogLeft = articleMarkup(
  ['log-page', 'blank-log'],
  `
    <header class="log-header">
      <div class="star-mark">☆</div>
      <div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
      </div>
      <h1>Daily Caregiver Log</h1>
      <h2>Health &amp; Behavior Snapshot</h2>
    </header>

    <div class="field-line"><b>Date</b><span></span><b>Caregiver</b><span></span></div>
    <div class="field-line"><b>Individual</b><span></span></div>

    <section class="form-section health-section">
      <h3>Physical Health</h3>
      <div class="form-grid two">
        <div class="check-group">
          <label><span class="circle"></span> Appears healthy</label>
          <label><span class="circle"></span> Illness / discomfort <em>Yes</em> <em>No</em></label>
          <p>If yes, describe:</p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <p>Hours of sleep <span class="short-line"></span></p>
          <p>Fell asleep at <span class="short-line"></span></p>
          <p>Night waking <em>Yes</em> <em>No</em></p>
        </div>
        <div class="mini-card">
          <b>Appetite</b>
          <label><span class="circle"></span> Normal</label>
          <label><span class="circle"></span> Increased</label>
          <label><span class="circle"></span> Decreased</label>
        </div>
        <div class="mini-card">
          <p>Bowel Movement <em>Yes</em> <em>No</em></p>
          <p>Medication changes <em>Yes</em> <em>No</em></p>
          <p>PRN given today <em>Yes</em> <em>No</em></p>
          <p>Medication / Reason / Time</p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
        </div>
      </div>
    </section>

    <section class="form-section behavior-section">
      <h3>Behavior / Mental Health</h3>
      <div class="form-grid three">
        <div class="check-group">
          <p><b>Mood</b> (circle one)</p>
          <label><span class="circle"></span> Stable</label>
          <label><span class="circle"></span> Anxious</label>
          <label><span class="circle"></span> Elevated</label>
          <label><span class="circle"></span> Dysregulated</label>
          <label><span class="circle"></span> Irritable</label>
        </div>
        <div>
          <p><b>Mood Notes</b></p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
        </div>
        <div>
          <p><b>Aggression</b> <em>Yes</em> <em>No</em></p>
          <p>Type (check all that apply)</p>
          <label><span class="box"></span> Verbal</label>
          <label><span class="box"></span> Physical</label>
          <label><span class="box"></span> Self Harm</label>
          <p>Severity <span class="scale">1 2 3 4</span></p>
        </div>
      </div>
      <div class="form-grid three">
        <div class="check-group">
          <p><b>Attention</b> (circle one)</p>
          <label><span class="circle"></span> Appropriate</label>
          <label><span class="circle"></span> Distracted</label>
          <label><span class="circle"></span> Fixated</label>
          <label><span class="circle"></span> Low engagement</label>
        </div>
        <div>
          <p><b>Anomaly / Unusual Behavior</b> <em>Yes</em> <em>No</em></p>
          <p>Notes:</p>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
          <div class="writing-line"></div>
        </div>
        <div class="mini-card">
          <b>Notify Supervisor</b>
          <label><span class="box"></span> Medication</label>
          <label><span class="box"></span> Illness</label>
          <label><span class="box"></span> Injury</label>
          <label><span class="box"></span> Behavioral Incident</label>
          <label><span class="box"></span> Unusual Behavior</label>
          <label><span class="box"></span> Other <span class="short-line"></span></label>
        </div>
      </div>
    </section>

    <section class="notes-section">
      <h3>General Notes</h3>
      <div class="writing-line"></div>
      <div class="writing-line"></div>
      <div class="writing-line"></div>
      <div class="writing-line"></div>
    </section>
    <footer class="log-footer">☆ Support Tool for Autonomy and Reflection</footer>
  `
);

const blankLogRight = articleMarkup(
  ['log-page', 'right-log'],
  `
    <section class="form-section participation-section">
      <h3>Participation &amp; Independence</h3>
      <p class="subhead">Activities, Community &amp; Daily Living</p>
      <div class="today-focus">
        <b>Today's focus goal(s)</b>
        <label><span class="box"></span> Employment / Vocational</label>
        <label><span class="box"></span> Community at Large</label>
        <label><span class="box"></span> Home / Family Community</label>
        <label><span class="box"></span> Leisure / Recreation</label>
        <label><span class="box"></span> Activities of Daily Living (ADLs)</label>
      </div>
    </section>

    <section class="form-section participation-section">
      <h3>Participation Hours &amp; Prompt Levels</h3>
      <table class="log-table participation-table">
        <tr><th>Area</th><th>Participated?</th><th>Hours</th><th>Prompt Level (0-4)</th><th>Notes</th></tr>
        <tr><td>Employment / Vocational</td><td>Yes No</td><td></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Community at Large</td><td>Yes No</td><td></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Home / Family Community</td><td>Yes No</td><td></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Leisure / Recreation</td><td>Yes No</td><td></td><td>0 1 2 3 4</td><td></td></tr>
      </table>
      <p class="prompt-key">Prompt Level Key: 0 - Independent · 1 - 1-2 prompts · 2 - Periodic prompts · 3 - Frequent prompts · 4 - Dependent</p>
      <div class="daily-summary participation-summary">
        <h4>Today's Participation Summary</h4>
        <p><b>Prompt Level Key</b> 0 = Independent · 1 = 1-2 prompts · 2 = Periodic prompts · 3 = Frequent prompts · 4 = Fully Dependent</p>
        <div class="summary-lines">
          <label>Today's Average Participation Prompt Level <span></span></label>
          <label>Employment / Vocational <span></span></label>
          <label>Community at Large <span></span></label>
          <label>Home / Family Community <span></span></label>
          <label>Leisure / Recreation <span></span></label>
        </div>
        <p>Add today's prompt levels. Divide by 4. Today's Average Prompt Level = <span class="summary-blank"></span></p>
        <p>Use this value to plot the Average Participation Prompt Level line graph.</p>
      </div>
    </section>

    <section class="form-section adl-section">
      <h3>Activities of Daily Living (ADLs)</h3>
      <table class="log-table adl-table">
        <tr><th>ADL Completed</th><th>Prompt Level (0-4)</th><th>Notes</th></tr>
        <tr><td>Hygiene<span class="adl-examples">Showering, brushing teeth, washing hands, combing hair, clipping nails, shaving, applying deodorant</span></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Dressing<span class="adl-examples">Choosing seasonally appropriate clothing, matching clothing, putting on shoes, dressing independently</span></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Cooking / Food Preparation<span class="adl-examples">Preparing a favorite snack, making a sandwich, microwave use, pouring drinks, setting the table, cleaning up afterward</span></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Cleaning / Household<span class="adl-examples">Making bed, laundry, vacuuming, wiping counters, dishes, taking out trash, organizing bedroom</span></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Community Errands / Shopping<span class="adl-examples">Using a shopping list, finding items, waiting in line, making purchases, carrying groceries, asking for assistance</span></td><td>0 1 2 3 4</td><td></td></tr>
        <tr><td>Other Independent Living Skill<span class="adl-examples">Money skills, phone use, time management, personal organization, following visual schedules, technology use, self-advocacy</span></td><td>0 1 2 3 4</td><td></td></tr>
      </table>
      <div class="daily-summary adl-summary">
        <h4>Today's ADL Summary</h4>
        <p><b>Highest Prompt Level</b></p>
        <div class="summary-lines">
          <label>Hygiene <span></span></label>
          <label>Dressing <span></span></label>
          <label>Cooking / Food Preparation <span></span></label>
          <label>Cleaning / Household <span></span></label>
          <label>Community Errands / Shopping <span></span></label>
          <label>Other Independent Living Skill <span></span></label>
        </div>
        <p>Use these values for the Activities of Daily Living (ADLs) mini line graphs.</p>
      </div>
    </section>

    <footer class="signature-line"><span>Caregiver Signature <span class="signature-fill"></span></span><span>Date <span class="date-fill"></span></span></footer>
  `
);

const monthlyOutcomesBlank = articleMarkup(
  ['analytics-page', 'monthly-insights-page', 'blank-template'],
  `
    <header class="analytics-header">
      <div><p>STAR Insights and Trends</p><h1>Monthly Outcomes Dashboard</h1></div>
      <span>Blank Printable</span>
    </header>
    <section class="use-box compact-use"><h2>How to Use This Dashboard</h2><p>Use the Daily Caregiver Log to complete the blank charts by hand. Color one mood slice each day, fill monthly bars upward, and plot prompt-level dots daily.</p></section>
    <div class="analytics-fields three compact-fields"><label>Month <span></span></label><label>Individual <span></span></label><label>Caregiver <span></span></label></div>
    <section class="insight-metrics">
      <div class="metric-card"><b>Average Hours of Sleep</b><span></span><small>Source: Physical Health.</small></div>
      <div class="metric-card"><b>Average Participation Prompt Level</b><span></span><small>Source: Participation Summary.</small></div>
      <div class="metric-card"><b>Participation Days</b><span>/31</span><small>Days with any participation.</small></div>
      <div class="metric-card"><b>ADL Independence</b><span>%</span><small>Source: ADL Summary.</small></div>
      <div class="metric-card"><b>Aggression Days</b><span></span><small>Days aggression occurred.</small></div>
    </section><section class="analytics-panel executive-summary-panel">
      <h2>Monthly Outcome Summary</h2>
      <div class="executive-summary-grid">
        <label>Largest Participation Area <span></span></label>
        <label>Most Independent ADL <span></span></label>
        <label>Area Needing Most Support <span></span></label>
        <label>Total PRNs <span></span></label>
        <label>Total Illness Days <span></span></label>
        <label>Aggression Days <span></span></label>
        <label>Medication Changes <span></span></label>
        <label>General Observations <span></span></label>
      </div>
    </section>
    <div class="insights-grid refined-grid">
      <section class="analytics-panel mood-wheel-panel"><h2>31-Day Mood Wheel</h2><div class="wheel-layout"><svg class="chart-svg mood-wheel" viewBox="0 0 200 200" role="img" aria-label="31 slice blank mood wheel"><circle cx="100" cy="100" r="78"></circle><line x1="100" y1="100" x2="100.00" y2="22.00"></line><line x1="100" y1="100" x2="115.70" y2="23.60"></line><line x1="100" y1="100" x2="130.76" y2="28.32"></line><line x1="100" y1="100" x2="144.56" y2="35.98"></line><line x1="100" y1="100" x2="156.53" y2="46.26"></line><line x1="100" y1="100" x2="166.19" y2="58.74"></line><line x1="100" y1="100" x2="173.14" y2="72.91"></line><line x1="100" y1="100" x2="177.10" y2="88.19"></line><line x1="100" y1="100" x2="177.90" y2="103.95"></line><line x1="100" y1="100" x2="175.51" y2="119.55"></line><line x1="100" y1="100" x2="170.03" y2="134.35"></line><line x1="100" y1="100" x2="161.68" y2="147.74"></line><line x1="100" y1="100" x2="150.81" y2="159.18"></line><line x1="100" y1="100" x2="137.85" y2="168.20"></line><line x1="100" y1="100" x2="123.35" y2="174.42"></line><line x1="100" y1="100" x2="107.89" y2="177.60"></line><line x1="100" y1="100" x2="92.11" y2="177.60"></line><line x1="100" y1="100" x2="76.65" y2="174.42"></line><line x1="100" y1="100" x2="62.15" y2="168.20"></line><line x1="100" y1="100" x2="49.19" y2="159.18"></line><line x1="100" y1="100" x2="38.32" y2="147.74"></line><line x1="100" y1="100" x2="29.97" y2="134.35"></line><line x1="100" y1="100" x2="24.49" y2="119.55"></line><line x1="100" y1="100" x2="22.10" y2="103.95"></line><line x1="100" y1="100" x2="22.90" y2="88.19"></line><line x1="100" y1="100" x2="26.86" y2="72.91"></line><line x1="100" y1="100" x2="33.81" y2="58.74"></line><line x1="100" y1="100" x2="43.47" y2="46.26"></line><line x1="100" y1="100" x2="55.44" y2="35.98"></line><line x1="100" y1="100" x2="69.24" y2="28.32"></line><line x1="100" y1="100" x2="84.30" y2="23.60"></line></svg><div class="legend-lines mood-legend report-lines">
        <label><i class="mood-stable"></i>Stable <span></span></label>
        <label><i class="mood-anxious"></i>Anxious <span></span></label>
        <label><i class="mood-elevated"></i>Elevated <span></span></label>
        <label><i class="mood-irritable"></i>Irritable <span></span></label>
        <label><i class="mood-dysregulated"></i>Dysregulated <span></span></label>
      </div></div><div class="event-key mood-key"><span class="mood-stable"></span> Stable <span class="mood-anxious"></span> Anxious <span class="mood-elevated"></span> Elevated <span class="mood-irritable"></span> Irritable <span class="mood-dysregulated"></span> Dysregulated</div><p class="chart-note">Color one slice each day using the primary mood from the Daily Caregiver Log.</p></section>
      <section class="analytics-panel participation-bars-panel"><h2>Participation Hours by Life Area</h2><div class="professional-bar-chart blank-chart" role="img" aria-label="Monthly participation hours bar chart"><div class="bar-scale"><span>40</span><span>35</span><span>30</span><span>25</span><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span></div><div class="bar-plot"><div class="bar-column"><div class="bar-shell"></div><b><span>Employment /</span><span>Vocational</span></b></div><div class="bar-column"><div class="bar-shell"></div><b><span>Community</span><span>at Large</span></b></div><div class="bar-column"><div class="bar-shell"></div><b><span>Home / Family</span><span>Community</span></b></div><div class="bar-column"><div class="bar-shell"></div><b><span>Leisure /</span><span>Recreation</span></b></div><div class="bar-column"><div class="bar-shell"></div><b><span>Activities of Daily</span><span>Living (ADLs)</span></b></div></div></div><p class="chart-note">Total or average monthly hours for each area. Color each blank bar upward to the number of hours.</p></section>
      <section class="analytics-panel wide prompt-line-panel"><h2>Average Participation Prompt Level Over Time</h2><svg class="chart-svg full-line-chart blank-chart" viewBox="0 0 620 150" role="img" aria-label="Average participation prompt level line graph"><g class="grid-lines"><path d="M45 20 H590 M45 45 H590 M45 70 H590 M45 95 H590 M45 120 H590 M55 20 V120 M123 20 V120 M208 20 V120 M293 20 V120 M378 20 V120 M463 20 V120 M548 20 V120 M565 20 V120"></path></g><path class="axis" d="M45 18 V122 H592"></path><g class="day-ticks"><path d="M55 120 V126 M72 120 V126 M89 120 V126 M106 120 V126 M123 120 V126 M140 120 V126 M157 120 V126 M174 120 V126 M191 120 V126 M208 120 V126 M225 120 V126 M242 120 V126 M259 120 V126 M276 120 V126 M293 120 V126 M310 120 V126 M327 120 V126 M344 120 V126 M361 120 V126 M378 120 V126 M395 120 V126 M412 120 V126 M429 120 V126 M446 120 V126 M463 120 V126 M480 120 V126 M497 120 V126 M514 120 V126 M531 120 V126 M548 120 V126 M565 120 V126"></path></g><g class="major-day-ticks"><path d="M55 118 V128 M123 118 V128 M208 118 V128 M293 118 V128 M378 118 V128 M463 118 V128 M548 118 V128 M565 118 V128"></path></g><text x="24" y="123">0</text><text x="24" y="98">1</text><text x="24" y="73">2</text><text x="24" y="48">3</text><text x="24" y="23">4</text><text x="52" y="140">1</text><text x="118" y="140">5</text><text x="202" y="140">10</text><text x="287" y="140">15</text><text x="372" y="140">20</text><text x="458" y="140">25</text><text x="542" y="140">30</text><text x="560" y="140">31</text></svg><p class="chart-note">Plot one dot each day using the average participation prompt level from the Daily Caregiver Log. Connect dots at the end of the month.</p></section>
    </div>
  `
);

const healthDashboardBlank = articleMarkup(
  ['analytics-page', 'monthly-patterns-page', 'blank-template'],
  `
    <header class="analytics-header"><div><p>STAR Insights and Trends</p><h1>Health, Behavior &amp; ADL Dashboard</h1></div><span>Blank Printable</span></header>
    <div class="patterns-grid refined-patterns">
      <section class="analytics-panel sleep-panel wide"><h2>Hours of Sleep Over Time</h2><svg class="chart-svg full-line-chart blank-chart" viewBox="0 0 620 150" role="img" aria-label="Hours of sleep line graph"><g class="grid-lines"><path d="M45 20 H590 M45 45 H590 M45 70 H590 M45 95 H590 M45 120 H590 M55 20 V120 M123 20 V120 M208 20 V120 M293 20 V120 M378 20 V120 M463 20 V120 M548 20 V120 M565 20 V120"></path></g><path class="axis" d="M45 18 V122 H592"></path><g class="day-ticks"><path d="M55 120 V126 M72 120 V126 M89 120 V126 M106 120 V126 M123 120 V126 M140 120 V126 M157 120 V126 M174 120 V126 M191 120 V126 M208 120 V126 M225 120 V126 M242 120 V126 M259 120 V126 M276 120 V126 M293 120 V126 M310 120 V126 M327 120 V126 M344 120 V126 M361 120 V126 M378 120 V126 M395 120 V126 M412 120 V126 M429 120 V126 M446 120 V126 M463 120 V126 M480 120 V126 M497 120 V126 M514 120 V126 M531 120 V126 M548 120 V126 M565 120 V126"></path></g><g class="major-day-ticks"><path d="M55 118 V128 M123 118 V128 M208 118 V128 M293 118 V128 M378 118 V128 M463 118 V128 M548 118 V128 M565 118 V128"></path></g><text x="24" y="123">4</text><text x="24" y="98">6</text><text x="24" y="73">8</text><text x="20" y="48">10</text><text x="20" y="23">12</text><text x="52" y="140">1</text><text x="118" y="140">5</text><text x="202" y="140">10</text><text x="287" y="140">15</text><text x="372" y="140">20</text><text x="458" y="140">25</text><text x="542" y="140">30</text><text x="560" y="140">31</text></svg><p class="chart-note">Plot one dot each day using Hours of Sleep from the Physical Health section. Connect dots at the end of the month.</p></section>
      <section class="analytics-panel health-calendar-panel wide"><h2>Health Event Calendar</h2><div class="event-calendar blank-health-calendar"><b>Sun</b><b>Mon</b><b>Tue</b><b>Wed</b><b>Thu</b><b>Fri</b><b>Sat</b><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="event-key"><span class="key-blue"></span> Illness <span class="key-purple"></span> PRN Given <span class="key-star">★</span> Medication Change <span class="key-yellow"></span> Change in Appetite <span class="key-green"></span> Night Waking / Difficulty Falling Asleep</div><p class="chart-note">Write the dates into the blank calendar for the month. Mark health events on the correct date using the key.</p></section>
      <section class="analytics-panel wide adl-visual-panel"><h2>ADL Prompt Level Progress Over Time</h2><div class="adl-mini-grid"><svg class="mini-line blank-chart" viewBox="0 0 200 82" role="img" aria-label="Hygiene prompt level mini line graph"><text class="mini-title" x="22" y="12">Hygiene</text><g class="grid-lines"><path d="M22 22 H184 M22 32 H184 M22 42 H184 M22 52 H184 M22 62 H184"></path></g><g class="mini-day-ticks"><path d="M24.0 62 V67 M29.2 62 V67 M34.4 62 V67 M39.6 62 V67 M44.8 62 V67 M50.0 62 V67 M55.2 62 V67 M60.4 62 V67 M65.6 62 V67 M70.8 62 V67 M76.0 62 V67 M81.2 62 V67 M86.4 62 V67 M91.6 62 V67 M96.8 62 V67 M102.0 62 V67 M107.2 62 V67 M112.4 62 V67 M117.6 62 V67 M122.8 62 V67 M128.0 62 V67 M133.2 62 V67 M138.4 62 V67 M143.6 62 V67 M148.8 62 V67 M154.0 62 V67 M159.2 62 V67 M164.4 62 V67 M169.6 62 V67 M174.8 62 V67 M180.0 62 V67"></path></g><g class="mini-major-ticks"><path d="M24.0 59 V69 M44.8 59 V69 M96.8 59 V69 M148.8 59 V69 M180.0 59 V69"></path></g><g class="mini-y-ticks"><path d="M18 22 H24 M18 32 H24 M18 42 H24 M18 52 H24 M18 62 H24"></path></g><path class="axis" d="M22 20 V62 H186"></path><text x="10" y="64">0</text><text x="10" y="54">1</text><text x="10" y="44">2</text><text x="10" y="34">3</text><text x="10" y="24">4</text><text x="21" y="76">1</text><text x="42" y="76">5</text><text x="67" y="76">10</text><text x="93" y="76">15</text><text x="119" y="76">20</text><text x="145" y="76">25</text><text x="171" y="76">30</text><text x="180" y="76">31</text></svg><svg class="mini-line blank-chart" viewBox="0 0 200 82" role="img" aria-label="Dressing prompt level mini line graph"><text class="mini-title" x="22" y="12">Dressing</text><g class="grid-lines"><path d="M22 22 H184 M22 32 H184 M22 42 H184 M22 52 H184 M22 62 H184"></path></g><g class="mini-day-ticks"><path d="M24.0 62 V67 M29.2 62 V67 M34.4 62 V67 M39.6 62 V67 M44.8 62 V67 M50.0 62 V67 M55.2 62 V67 M60.4 62 V67 M65.6 62 V67 M70.8 62 V67 M76.0 62 V67 M81.2 62 V67 M86.4 62 V67 M91.6 62 V67 M96.8 62 V67 M102.0 62 V67 M107.2 62 V67 M112.4 62 V67 M117.6 62 V67 M122.8 62 V67 M128.0 62 V67 M133.2 62 V67 M138.4 62 V67 M143.6 62 V67 M148.8 62 V67 M154.0 62 V67 M159.2 62 V67 M164.4 62 V67 M169.6 62 V67 M174.8 62 V67 M180.0 62 V67"></path></g><g class="mini-major-ticks"><path d="M24.0 59 V69 M44.8 59 V69 M96.8 59 V69 M148.8 59 V69 M180.0 59 V69"></path></g><g class="mini-y-ticks"><path d="M18 22 H24 M18 32 H24 M18 42 H24 M18 52 H24 M18 62 H24"></path></g><path class="axis" d="M22 20 V62 H186"></path><text x="10" y="64">0</text><text x="10" y="54">1</text><text x="10" y="44">2</text><text x="10" y="34">3</text><text x="10" y="24">4</text><text x="21" y="76">1</text><text x="42" y="76">5</text><text x="67" y="76">10</text><text x="93" y="76">15</text><text x="119" y="76">20</text><text x="145" y="76">25</text><text x="171" y="76">30</text><text x="180" y="76">31</text></svg></div></section>
    </div>
  `
);


function monthlyGoalsPage1Markup() {
  return articleMarkup(
    ['monthly-goals-page'],
    `
      <header class="star-title">
        <div class="star-mark">☆</div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
        <h1>Monthly Goals & Focus</h1>
      </header>

      <section class="goals-section">
        <h3>Month Overview</h3>
        <div class="goal-item">
          <strong>Month:</strong>
          <div class="goal-line"></div>
        </div>
        <div class="goal-item">
          <strong>Individual:</strong>
          <div class="goal-line"></div>
        </div>
        <div class="goal-item">
          <strong>Primary Caregiver:</strong>
          <div class="goal-line"></div>
        </div>
        <div class="goal-item">
          <strong>Date Started:</strong>
          <div class="goal-line"></div>
        </div>
      </section>

      <section class="goals-section">
        <h3>Top 3 Goals for This Month</h3>
        <div class="goal-item">
          <strong>Goal 1</strong>
          <div class="text-lines">
            <div class="text-line"></div>
          </div>
        </div>
        <div class="goal-item">
          <strong>Goal 2</strong>
          <div class="text-lines">
            <div class="text-line"></div>
          </div>
        </div>
        <div class="goal-item">
          <strong>Goal 3</strong>
          <div class="text-lines">
            <div class="text-line"></div>
          </div>
        </div>
      </section>

      <section class="goals-section">
        <h3>Primary Areas of Focus</h3>
        <div class="focus-grid">
          <div class="focus-item">
            <input type="checkbox">
            <label>Physical Health</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Emotional Regulation</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Community Participation</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Employment / Vocational</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Home & Family Participation</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Activities of Daily Living (ADLs)</label>
          </div>
        </div>
      </section>
    `
  );
}

function monthlyGoalsPage2Markup() {
  return articleMarkup(
    ['monthly-goals-page', 'monthly-goals-page-2'],
    `
      <header class="star-title">
        <div class="star-mark">☆</div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
        <h1>Monthly Goals & Focus</h1>
      </header>

      <section class="goals-section">
        <h3>Primary Areas of Focus (Continued)</h3>
        <div class="focus-grid">
          <div class="focus-item">
            <input type="checkbox">
            <label>Exercise / Wellness</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Communication</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Behavior Support</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Safety</label>
          </div>
          <div class="focus-item">
            <input type="checkbox">
            <label>Medication Monitoring</label>
          </div>
          <div class="focus-other">
            <div class="focus-item">
              <input type="checkbox">
              <label>Other:</label>
            </div>
            <div class="goal-line"></div>
          </div>
        </div>
      </section>

      <section class="goals-section">
        <h3>Current Strengths</h3>
        <div class="text-area"></div>
      </section>

      <section class="goals-section">
        <h3>Areas Needing Extra Support</h3>
        <div class="text-area"></div>
      </section>

      <section class="goals-section">
        <h3>Special Reminders for Caregivers</h3>
        <div class="reflection-lines">
          <div class="reflection-line"></div>
          <div class="reflection-line"></div>
          <div class="reflection-line"></div>
        </div>
      </section>

      <section class="reflection-section">
        <h3>Month-End Reflection</h3>
        <p style="font-size: 9px; margin: 0 0 0.08in; color: #5e5134;">(Complete after finishing this month's logs.)</p>
        <div class="reflection-item">
          <strong>Greatest Success This Month</strong>
          <div class="reflection-lines">
            <div class="reflection-line"></div>
          </div>
        </div>
        <div class="reflection-item">
          <strong>Biggest Challenge</strong>
          <div class="reflection-lines">
            <div class="reflection-line"></div>
          </div>
        </div>
        <div class="reflection-item">
          <strong>Recommendations for Next Month</strong>
          <div class="reflection-lines">
            <div class="reflection-line"></div>
            <div class="reflection-line"></div>
          </div>
        </div>
      </section>
    `
  );
}

function authorNotePageMarkup() {
  return articleMarkup(
    ['author-note-page'],
    `
      <header class="author-note-header star-title">
        <div class="star-mark">☆</div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
        <h1>Your Journey Continues</h1>
        <div class="title-rule"><span></span><b>☆</b><span></span></div>
      </header>

      <div class="author-note-body">
        <p>If you’ve reached this page, I want to say something that I know you don’t hear often enough…</p>

        <p class="author-note-highlight"><strong>I’m proud of you.</strong> And You are doing a GREAT job!</p>

        <p>I didn’t create this workbook because I’m an expert looking in from the outside. I created it because I live this life every day as a parent, guardian, and caregiver to my adult son, Benny, who has autism and complex mental health needs.</p>

        <p>I know what it’s like to juggle appointments, medications, behavior changes, celebrations, setbacks, paperwork, and everything else that comes with supporting someone you love. I also know the challenge of finding, training, and keeping great caregivers, and how important it is for everyone to have the same information.</p>

        <p>Over the years, I found myself thinking, <em>I wish there was an easier way.</em> Not just to keep track of everything and communicate it to the team, but to help me capture, see, and understand the little things that are so easy to miss. Because I’ve learned that it’s often those small, subtle changes—noticed over days, weeks, or months—that tell a story we couldn’t see before.</p>

        <p>When we begin recording those seemingly small details over time, patterns begin to emerge. Those patterns can help explain behavior changes, identify triggers, recognize progress, and guide better decisions. They can lead to meaningful conversations with providers, support teams, caregivers, and family members. They can influence goals, outcomes, programming, community activities, leisure opportunities, and the supports a person receives. Sometimes they simply remind us that a difficult season is temporary. Other times, they help us recognize just how far we have come.</p>

        <p>Life is rarely a straight path. Sometimes we move confidently toward our goals. Other times, unexpected challenges (or “zigger zaggers,” as Benny calls them) mean we need to pause, pivot, change direction, or begin again. That’s not failure. It’s simply part of the journey.</p>

        <p>My hope is that STAR becomes more than a workbook. I hope it becomes a trusted guide that helps you notice even the little things that speak subtly and use them to reflect with greater understanding and move forward with confidence. Because when we can clearly see where we’ve been, we’re better equipped to decide where to go next.</p>

        <p>Just as people have looked to the North Star to help them find their way, my hope is that the tools I create help you navigate your own journey with clarity, confidence, and hope.</p>

        <p>Thank you for trusting me to be a small part of your journey. No matter where life leads, I hope you always have a North Star to help you find your way. No matter where your journey leads, may you always have your North Star to help you find your way.</p>

        <p class="author-note-signoff">With gratitude,</p>

        <div class="author-identity">
          <strong>Beth Adams</strong>
          <span>Parent • Guardian • Caregiver</span>
          <span>Creator of North Star Solutions Tech and the STAR Workbook</span>
        </div>
      </div>

      <footer class="author-note-footer">
        <div class="author-photo-frame" aria-label="Photo placeholder for Beth Adams and Benny">
          <span class="author-photo-fallback">Beth &amp;<br>Benny</span>
          <img src="images/beth-benny.jpg" alt="Beth Adams and her son Benny" onerror="this.style.display='none'">
        </div>

        <div class="author-qr-frame" aria-label="QR code placeholder for STAR resources">
          <span>STAR<br>Resources<br>Coming Soon</span>
        </div>
      </footer>
    `
  );
}

function dividerPage(monthNumber, startDay, endDay) {
  return pageMarkup(
    `Month ${monthNumber} divider`,
    ['divider-page'],
    articleMarkup(
      ['divider-card'],
      `
        <div class="divider-mark">☆</div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
        <h1>MONTH ${monthNumber}</h1>
        <h2>Days ${startDay}–${endDay}</h2>
        <div class="divider-rule"><span></span><b>☆</b><span></span></div>
        <ul class="divider-list">
          <li>Daily Caregiver Logs</li>
          <li>Monthly Outcomes Dashboard</li>
          <li>Health, Behavior &amp; ADL Dashboard</li>
        </ul>
      `
    )
  );
}

function buildDailyLogPagePair() {
  return [
    pageMarkup('Daily Caregiver Log left page', ['daily-log-page'], blankLogLeft),
    pageMarkup('Daily Caregiver Log right page', ['daily-log-page'], blankLogRight)
  ].join('');
}

function buildMonthPages(monthNumber, count) {
  const pages = [];
  for (let i = 0; i < count; i += 1) {
    pages.push(buildDailyLogPagePair());
  }
  return pages.join('');
}

function sampleMonthlyOutcomesPage() {
  return articleMarkup(
    ['analytics-page', 'monthly-insights-page', 'sample-completed'],
    `
      <header class="analytics-header">
        <div><p>STAR Insights and Trends</p><h1>Monthly Outcomes Dashboard</h1></div>
        <span>Sample Completed</span>
      </header>
      <section class="use-box compact-use"><h2>How to Use This Dashboard</h2><p>Use the Daily Caregiver Log to complete the blank charts by hand. Color one mood slice each day, fill monthly bars upward, and plot prompt-level dots daily.</p></section>
      <div class="analytics-fields three compact-fields"><label>Month <span>May 2026</span></label><label>Individual <span>Alex R.</span></label><label>Caregiver <span>Jordan M.</span></label></div>
      <section class="insight-metrics">
        <div class="metric-card"><b>Average Hours of Sleep</b><span>7.1</span><small>Source: Physical Health.</small></div>
        <div class="metric-card"><b>Average Participation Prompt Level</b><span>1.6</span><small>Source: Participation Summary.</small></div>
        <div class="metric-card"><b>Participation Days</b><span>26/31</span><small>Days with any participation.</small></div>
        <div class="metric-card"><b>ADL Independence</b><span>72%</span><small>Source: ADL Summary.</small></div>
        <div class="metric-card"><b>Aggression Days</b><span>2</span><small>Days aggression occurred.</small></div>
      </section>
      <section class="analytics-panel executive-summary-panel">
        <h2>Monthly Outcome Summary</h2>
        <div class="executive-summary-grid">
          <label>Largest Participation Area <span>Community at Large</span></label>
          <label>Most Independent ADL <span>Dressing</span></label>
          <label>Area Needing Most Support <span>Cooking / Food Prep</span></label>
          <label>Total PRNs <span>2</span></label>
          <label>Total Illness Days <span>3</span></label>
          <label>Aggression Days <span>2</span></label>
          <label>Medication Changes <span>1</span></label>
          <label>General Observations <span>Prompt levels declined as sleep stabilized.</span></label>
        </div>
      </section>

      <div class="insights-grid refined-grid">
        <section class="analytics-panel mood-wheel-panel">
          <h2>31-Day Mood Wheel</h2>
          <div class="wheel-layout">
            <svg class="chart-svg mood-wheel" viewBox="0 0 200 200" role="img" aria-label="31 slice blank mood wheel">
              <circle cx="100" cy="100" r="78"></circle>
              <line x1="100" y1="100" x2="100.00" y2="22.00"></line>
              <line x1="100" y1="100" x2="115.70" y2="23.60"></line>
              <line x1="100" y1="100" x2="130.76" y2="28.32"></line>
              <line x1="100" y1="100" x2="144.56" y2="35.98"></line>
              <line x1="100" y1="100" x2="156.53" y2="46.26"></line>
              <line x1="100" y1="100" x2="166.19" y2="58.74"></line>
              <line x1="100" y1="100" x2="173.14" y2="72.91"></line>
              <line x1="100" y1="100" x2="177.10" y2="88.19"></line>
              <line x1="100" y1="100" x2="177.90" y2="103.95"></line>
              <line x1="100" y1="100" x2="175.51" y2="119.55"></line>
              <line x1="100" y1="100" x2="170.03" y2="134.35"></line>
              <line x1="100" y1="100" x2="161.68" y2="147.74"></line>
              <line x1="100" y1="100" x2="150.81" y2="159.18"></line>
              <line x1="100" y1="100" x2="137.85" y2="168.20"></line>
              <line x1="100" y1="100" x2="123.35" y2="174.42"></line>
              <line x1="100" y1="100" x2="107.89" y2="177.60"></line>
              <line x1="100" y1="100" x2="92.11" y2="177.60"></line>
              <line x1="100" y1="100" x2="76.65" y2="174.42"></line>
              <line x1="100" y1="100" x2="62.15" y2="168.20"></line>
              <line x1="100" y1="100" x2="49.19" y2="159.18"></line>
              <line x1="100" y1="100" x2="38.32" y2="147.74"></line>
              <line x1="100" y1="100" x2="29.97" y2="134.35"></line>
              <line x1="100" y1="100" x2="24.49" y2="119.55"></line>
              <line x1="100" y1="100" x2="22.10" y2="103.95"></line>
              <line x1="100" y1="100" x2="22.90" y2="88.19"></line>
              <line x1="100" y1="100" x2="26.86" y2="72.91"></line>
              <line x1="100" y1="100" x2="33.81" y2="58.74"></line>
              <line x1="100" y1="100" x2="43.47" y2="46.26"></line>
              <line x1="100" y1="100" x2="55.44" y2="35.98"></line>
              <line x1="100" y1="100" x2="69.24" y2="28.32"></line>
              <line x1="100" y1="100" x2="84.30" y2="23.60"></line>
            </svg>
            <div class="legend-lines mood-legend report-lines">
              <label><i class="mood-stable"></i>Stable <span>20 days</span></label>
              <label><i class="mood-anxious"></i>Anxious <span>5 days</span></label>
              <label><i class="mood-elevated"></i>Elevated <span>3 days</span></label>
              <label><i class="mood-irritable"></i>Irritable <span>2 days</span></label>
              <label><i class="mood-dysregulated"></i>Dysregulated <span>1 day</span></label>
            </div>
          </div>
          <div class="event-key mood-key">
            <span class="mood-stable"></span> Stable <span class="mood-anxious"></span> Anxious <span class="mood-elevated"></span> Elevated <span class="mood-irritable"></span> Irritable <span class="mood-dysregulated"></span> Dysregulated
          </div>
          <p class="chart-note">Color one slice each day using the primary mood from the Daily Caregiver Log.</p>
        </section>

        <section class="analytics-panel participation-bars-panel">
          <h2>Participation Hours by Life Area</h2>
          <div class="professional-bar-chart blank-chart" role="img" aria-label="Monthly participation hours bar chart">
            <div class="bar-scale">
              <span>40</span><span>35</span><span>30</span><span>25</span><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span>
            </div>
            <div class="bar-plot">
              <div class="bar-column"><div class="bar-shell"></div><b><span>Employment /</span><span>Vocational</span></b></div>
              <div class="bar-column"><div class="bar-shell"></div><b><span>Community</span><span>at Large</span></b></div>
              <div class="bar-column"><div class="bar-shell"></div><b><span>Home / Family</span><span>Community</span></b></div>
              <div class="bar-column"><div class="bar-shell"></div><b><span>Leisure /</span><span>Recreation</span></b></div>
              <div class="bar-column"><div class="bar-shell"></div><b><span>Activities of Daily</span><span>Living (ADLs)</span></b></div>
            </div>
          </div>
          <p class="chart-note">Total or average monthly hours for each area. Color each blank bar upward to the number of hours.</p>
        </section>

        <section class="analytics-panel wide prompt-line-panel">
          <h2>Average Participation Prompt Level Over Time</h2>
          <svg class="chart-svg full-line-chart blank-chart" viewBox="0 0 620 150" role="img" aria-label="Average participation prompt level line graph">
            <g class="grid-lines">
              <path d="M45 20 H590 M45 45 H590 M45 70 H590 M45 95 H590 M45 120 H590 M55 20 V120 M123 20 V120 M208 20 V120 M293 20 V120 M378 20 V120 M463 20 V120 M548 20 V120 M565 20 V120"></path>
            </g>
            <path class="axis" d="M45 18 V122 H592"></path>
            <g class="day-ticks">
              <path d="M55 120 V126 M72 120 V126 M89 120 V126 M106 120 V126 M123 120 V126 M140 120 V126 M157 120 V126 M174 120 V126 M191 120 V126 M208 120 V126 M225 120 V126 M242 120 V126 M259 120 V126 M276 120 V126 M293 120 V126 M310 120 V126 M327 120 V126 M344 120 V126 M361 120 V126 M378 120 V126 M395 120 V126 M412 120 V126 M429 120 V126 M446 120 V126 M463 120 V126 M480 120 V126 M497 120 V126 M514 120 V126 M531 120 V126 M548 120 V126 M565 120 V126"></path>
            </g>
            <g class="major-day-ticks">
              <path d="M55 118 V128 M123 118 V128 M208 118 V128 M293 118 V128 M378 118 V128 M463 118 V128 M548 118 V128 M565 118 V128"></path>
            </g>
            <text x="24" y="123">0</text><text x="24" y="98">1</text><text x="24" y="73">2</text><text x="24" y="48">3</text><text x="24" y="23">4</text>
            <text x="52" y="140">1</text><text x="118" y="140">5</text><text x="202" y="140">10</text><text x="287" y="140">15</text><text x="372" y="140">20</text><text x="458" y="140">25</text><text x="542" y="140">30</text><text x="560" y="140">31</text>
          </svg>
          <p class="chart-note">Plot one dot each day using the average participation prompt level from the Daily Caregiver Log. Connect dots at the end of the month.</p>
        </section>
      </div>
    `
  );
}

function sampleHealthDashboardPage() {
  return articleMarkup(
    ['analytics-page', 'monthly-patterns-page', 'sample-completed'],
    `
      <header class="analytics-header">
        <div><p>STAR Insights and Trends</p><h1>Health, Behavior &amp; ADL Dashboard</h1></div>
        <span>Sample Completed</span>
      </header>
      <div class="patterns-grid refined-patterns">
        <section class="analytics-panel sleep-panel wide">
          <h2>Hours of Sleep Over Time</h2>
          <svg class="chart-svg full-line-chart sample-chart" viewBox="0 0 620 150" role="img" aria-label="Sample hours of sleep line graph">
            <g class="grid-lines"><path d="M45 20 H590 M45 45 H590 M45 70 H590 M45 95 H590 M45 120 H590 M55 20 V120 M123 20 V120 M208 20 V120 M293 20 V120 M378 20 V120 M463 20 V120 M548 20 V120 M565 20 V120"></path></g>
            <path class="axis" d="M45 18 V122 H592"></path>
            <polyline class="sample-line sleep-line" points="55,80 72,80 89,58 106,70 123,92 140,80 157,70 174,86 191,58 208,74 225,58 242,82 259,48 276,74 293,58 310,52 327,64 344,46 361,68 378,54 395,62 412,48 429,58 446,54 463,44 480,58 497,52 514,50 531,48 548,46 565,44"></polyline>
          </svg>
          <p class="chart-note">Plot one dot each day using Hours of Sleep from the Physical Health section. Connect dots at the end of the month.</p>
        </section>
        <section class="analytics-panel health-calendar-panel wide">
          <h2>Health Event Calendar</h2>
          <div class="event-calendar blank-health-calendar"><b>Sun</b><b>Mon</b><b>Tue</b><b>Wed</b><b>Thu</b><b>Fri</b><b>Sat</b><span></span><span></span><span></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8 ●</span><span>9</span><span>10</span><span>11</span><span>12 ▲</span><span>13</span><span>14 ★</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21 ◆</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30 ■</span><span>31</span><span></span></div>
          <div class="event-key"><span class="key-blue"></span> Illness <span class="key-purple"></span> PRN Given <span class="key-star">★</span> Medication Change <span class="key-yellow"></span> Change in Appetite <span class="key-green"></span> Night Waking / Difficulty Falling Asleep</div>
          <p class="chart-note">Write the dates into the blank calendar for the month. Mark health events on the correct date using the key.</p>
        </section>

        <section class="analytics-panel wide adl-visual-panel">
          <h2>ADL Prompt Level Progress Over Time</h2>
          <div class="adl-mini-grid">
            <svg class="mini-line blank-chart" viewBox="0 0 200 82" role="img" aria-label="Hygiene prompt level mini line graph">
              <text class="mini-title" x="22" y="12">Hygiene</text>
              <g class="grid-lines"><path d="M22 22 H184 M22 32 H184 M22 42 H184 M22 52 H184 M22 62 H184"></path></g>
              <g class="mini-day-ticks"><path d="M24.0 62 V67 M29.2 62 V67 M34.4 62 V67 M39.6 62 V67 M44.8 62 V67 M50.0 62 V67 M55.2 62 V67 M60.4 62 V67 M65.6 62 V67 M70.8 62 V67 M76.0 62 V67 M81.2 62 V67 M86.4 62 V67 M91.6 62 V67 M96.8 62 V67 M102.0 62 V67 M107.2 62 V67 M112.4 62 V67 M117.6 62 V67 M122.8 62 V67 M128.0 62 V67 M133.2 62 V67 M138.4 62 V67 M143.6 62 V67 M148.8 62 V67 M154.0 62 V67 M159.2 62 V67 M164.4 62 V67 M169.6 62 V67 M174.8 62 V67 M180.0 62 V67"></path></g>
              <g class="mini-major-ticks"><path d="M24.0 59 V69 M44.8 59 V69 M96.8 59 V69 M148.8 59 V69 M180.0 59 V69"></path></g>
              <g class="mini-y-ticks"><path d="M18 22 H24 M18 32 H24 M18 42 H24 M18 52 H24 M18 62 H24"></path></g>
              <path class="axis" d="M22 20 V62 H186"></path>
              <text x="10" y="64">0</text><text x="10" y="54">1</text><text x="10" y="44">2</text><text x="10" y="34">3</text><text x="10" y="24">4</text>
              <text x="21" y="76">1</text><text x="42" y="76">5</text><text x="67" y="76">10</text><text x="93" y="76">15</text><text x="119" y="76">20</text><text x="145" y="76">25</text><text x="171" y="76">30</text><text x="180" y="76">31</text>
            </svg>

            <svg class="mini-line blank-chart" viewBox="0 0 200 82" role="img" aria-label="Dressing prompt level mini line graph">
              <text class="mini-title" x="22" y="12">Dressing</text>
              <g class="grid-lines"><path d="M22 22 H184 M22 32 H184 M22 42 H184 M22 52 H184 M22 62 H184"></path></g>
              <g class="mini-day-ticks"><path d="M24.0 62 V67 M29.2 62 V67 M34.4 62 V67 M39.6 62 V67 M44.8 62 V67 M50.0 62 V67 M55.2 62 V67 M60.4 62 V67 M65.6 62 V67 M70.8 62 V67 M76.0 62 V67 M81.2 62 V67 M86.4 62 V67 M91.6 62 V67 M96.8 62 V67 M102.0 62 V67 M107.2 62 V67 M112.4 62 V67 M117.6 62 V67 M122.8 62 V67 M128.0 62 V67 M133.2 62 V67 M138.4 62 V67 M143.6 62 V67 M148.8 62 V67 M154.0 62 V67 M159.2 62 V67 M164.4 62 V67 M169.6 62 V67 M174.8 62 V67 M180.0 62 V67"></path></g>
              <g class="mini-major-ticks"><path d="M24.0 59 V69 M44.8 59 V69 M96.8 59 V69 M148.8 59 V69 M180.0 59 V69"></path></g>
              <g class="mini-y-ticks"><path d="M18 22 H24 M18 32 H24 M18 42 H24 M18 52 H24 M18 62 H24"></path></g>
              <path class="axis" d="M22 20 V62 H186"></path>
              <text x="10" y="64">0</text><text x="10" y="54">1</text><text x="10" y="44">2</text><text x="10" y="34">3</text><text x="10" y="24">4</text>
              <text x="21" y="76">1</text><text x="42" y="76">5</text><text x="67" y="76">10</text><text x="93" y="76">15</text><text x="119" y="76">20</text><text x="145" y="76">25</text><text x="171" y="76">30</text><text x="180" y="76">31</text>
            </svg>
          </div>
        </section>
      </div>
    `
  );
}

function tableOfContentsMarkup(monthList) {
  return articleMarkup(
    ['toc-page'],
    `
      <header class="star-title">
        <div class="star-mark">☆</div>
        <p>STAR</p>
        <span>Support Tool for Autonomy and Reflection</span>
        <h1>Table of Contents</h1>
      </header>

      <nav class="toc-list" aria-label="Table of Contents">
        <div class="toc-entry" data-page-label="About This Workbook">
          <span class="toc-title">How to Use This Workbook</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        <div class="toc-entry" data-page-label="Quick Reference Guide">
          <span class="toc-title">Quick Reference Guide</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        ${monthList.map(({ monthNumber }) => `
        <div class="toc-entry" data-page-label="Month ${monthNumber} divider">
          <span class="toc-title">Month ${monthNumber}</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        <div class="toc-entry toc-subentry" data-page-label="Month ${monthNumber} Goals &amp; Focus - Page 1">
          <span class="toc-title">Monthly Goals &amp; Focus</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        <div class="toc-entry toc-subentry" data-page-label="Month ${monthNumber} Daily Caregiver Logs">
          <span class="toc-title">Daily Caregiver Logs</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        <div class="toc-entry toc-subentry" data-page-label="Month ${monthNumber} Monthly Outcomes Dashboard">
          <span class="toc-title">Monthly Outcomes Dashboard</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
        <div class="toc-entry toc-subentry" data-page-label="Month ${monthNumber} Health, Behavior &amp; ADL Dashboard">
          <span class="toc-title">Health, Behavior &amp; ADL Dashboard</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>`).join('')}
        <div class="toc-entry" data-page-label="Your Journey Continues">
          <span class="toc-title">Author Page</span>
          <span class="toc-leader" aria-hidden="true"></span>
          <span class="toc-page-num"></span>
        </div>
      </nav>
    `
  );
}

function numberWorkbookPages() {
  let pageNumber = 0;
  document.querySelectorAll('.page').forEach((page) => {
    const numberNode = page.querySelector('.page-number');
    if (!numberNode || page.classList.contains('cover-page')) {
      return;
    }
    pageNumber += 1;
    numberNode.textContent = pageNumber;
  });
}

function populateTableOfContents() {
  document.querySelectorAll('.toc-entry[data-page-label]').forEach((entry) => {
    const label = entry.getAttribute('data-page-label');
    const page = document.querySelector(`.page[aria-label="${label}"]`);
    const pageNum = page?.querySelector('.page-number')?.textContent || '';
    entry.querySelector('.toc-page-num').textContent = pageNum;
  });
}

const workbookPages = [
  pageMarkup('Cover', ['cover-page'], '<img src="images/cover.jpeg" alt="STAR Daily Caregiver Log cover">', false),
  pageMarkup('About This Workbook', [], aboutPage),
  pageMarkup('Quick Reference Guide', [], quickReferencePage),
  pageMarkup('Sample Completed Daily Caregiver Log', [], sampleLogLeft),
  pageMarkup('Sample Participation Page', [], sampleLogRight),
  pageMarkup('Sample Monthly Outcomes Dashboard', [], sampleMonthlyOutcomesPage()),
  pageMarkup('Sample Health Dashboard', [], sampleHealthDashboardPage())
];

// Six-month / 180-day sequence: 31 + 30 + 29 days per quarter (repeated).
const MONTH_DAY_COUNTS = [31, 30, 29, 31, 30, 29];

let nextStartDay = 1;
const months = MONTH_DAY_COUNTS.map((logCount, index) => {
  const monthNumber = index + 1;
  const startDay = nextStartDay;
  const endDay = startDay + logCount - 1;
  nextStartDay = endDay + 1;
  return { monthNumber, startDay, endDay, logCount };
});

months.forEach(({ monthNumber, startDay, endDay, logCount }) => {
  workbookPages.push(dividerPage(monthNumber, startDay, endDay));
  workbookPages.push(pageMarkup(`Month ${monthNumber} Goals & Focus - Page 1`, [], monthlyGoalsPage1Markup()));
  workbookPages.push(pageMarkup(`Month ${monthNumber} Goals & Focus - Page 2`, [], monthlyGoalsPage2Markup()));
  for (let index = 0; index < logCount; index += 1) {
    const logLeftLabel = index === 0
      ? `Month ${monthNumber} Daily Caregiver Logs`
      : 'Daily Caregiver Log left page';
    workbookPages.push(pageMarkup(logLeftLabel, ['daily-log-page'], blankLogLeft));
    workbookPages.push(pageMarkup('Daily Caregiver Log right page', ['daily-log-page'], blankLogRight));
  }
  workbookPages.push(pageMarkup(
    `Month ${monthNumber} Monthly Outcomes Dashboard`,
    [],
    monthlyOutcomesBlank
  ));
  workbookPages.push(pageMarkup(
    `Month ${monthNumber} Health, Behavior & ADL Dashboard`,
    [],
    healthDashboardBlank
  ));
});

workbookPages.push(pageMarkup('Your Journey Continues', [], authorNotePageMarkup()));

const tocPage = pageMarkup('Table of Contents', [], tableOfContentsMarkup(months));
workbookPages.splice(3, 0, tocPage);

workbook.innerHTML = workbookPages.join('');
numberWorkbookPages();
populateTableOfContents();
