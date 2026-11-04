/* ═══════════════════════════════════════════════════════════════════════
   ARTIFACT RECORDS — this is the only file you edit to add or change entries.
   Never edit index.html to add an artifact.
   条目维护只改这个文件，不要去改 index.html。

   ── ADDING ONE ───────────────────────────────────────────────────────────
   Copy the template at the bottom of this comment, paste it at the BOTTOM of
   the ARTIFACTS array, fill it in, save, commit. This site shows the newest
   entry on top (config.js `order`, instructor 2026-09-22), so always append at
   the bottom and the page puts it first.

   ── THE FOUR RULES THAT MATTER ───────────────────────────────────────────
   1. consent MUST be "granted" or the entry does not render. No exceptions,
      no override. An entry with consent "pending" / "declined" / missing is
      skipped silently — it stays in this file so you can see it is pending.
      同意状态不是 "granted" 就不渲染。这是硬约束。
   2. NO names, student IDs, emails, or company names anywhere in this file.
      The `credit` field carries whatever string the student chose for
      themselves (real name, given name only, or "Anonymous") — that string is
      their decision, recorded when consent was asked. Nothing else identifying.
      合作企业名一律不写，只写行业标签。
   3. one_liner is capped at 18 words / 40 字, and must say WHO it helps and
      WHAT problem it solves — not the tech stack. render.js warns in the
      console if you go over.
   4. If you are not sure about a field, set confidence: "low" rather than
      guessing. Do not invent values.

   ── FIELDS ───────────────────────────────────────────────────────────────
   id           "2026F-UG-lab1-01"   term-level-source-sequence
   week         teaching week number. Feeds the source tag for lab / sharing.
   source       "lab" | "sharing" | "AS1" | "AS2" | "project"
                shown as the first, filled tag on each entry:
                lab + week 3  -> "WK3 Lab"        sharing + week 2 -> "WK2 Sharing"
                AS1 -> "Assignment 1"   AS2 -> "Assignment 2"   project -> "Group Project"
                "sharing" = work a student volunteered to present in class, not a
                graded submission (added 2026-09-14 — none of the others fit).
   title        the artifact's own name (not translated)
   one_liner    { en, zh }  <= 18 words / 40 字
   type         website | agent | workflow | chatbot | skill | others
   +            controlled list. Add a value only with a written reason (spec 3.3).
   platform     WorkBuddy | Dify | Colab | GitHub Pages | Streamlit | ...
   ai_stack     array of model / tool names
   url          the public address. This is the point of the whole site.
                A file hosted here works too: "files/<id>-slides.pdf".
   links        optional extra links shown under the tags; the title still
                opens url. [{ label: { en, zh }, url }]
   consent      "granted" | "pending" | "declined"
   credit       the string the student chose, or "Anonymous"
   role         "student" (default) | "instructor"  — instructor demos are
                labelled as such and never presented as student work
   status       "live" | "dead"      dead entries stay, greyed out
   last_checked "2026-09-03"
   screenshot   path under assets/, or null
   confidence   "low" when a field is uncertain, else null

   ── TEMPLATE ─────────────────────────────────────────────────────────────
   {
     id: "2026F-UG-lab1-01",
     week: 1,
     week: 1,
    source: "lab",
     title: "",
     one_liner: { en: "", zh: "" },
     type: "website",
     platform: "",
     ai_stack: [],
     url: "",
     consent: "pending",
     credit: "Anonymous",
     role: "student",
     status: "live",
     last_checked: "2026-09-08",
     screenshot: null,
     confidence: null,
   },
   ═══════════════════════════════════════════════════════════════════════ */

window.ARTIFACTS = [

  /* ── The four Week 1 instructor demos were taken down 2026-09-22 at the
     instructor's request, once student work started arriving. They are in the
     git history (commit bea0221) if ever needed.
     ────────────────────────────────────────────────────────────────────── */

  /* ── Student artifacts ─────────────────────────────────────────────────── */

  {
    // WK1 lab submission, received 2026-09-21. ai_stack from the student's reflection.
    id: "2026F-UG-lab1-01",
    week: 1,
    source: "lab",
    title: "AI Quiz Challenge",
    one_liner: {
      en: "Lets MIS3011 students check what they learned in the Week 1 lecture through a five-question quiz game.",
      zh: "让 MIS3011 同学用五道随机题的小游戏，自测第一周课上学到了什么。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent", "DeepSeek-V4.1-Flash"],
    url: "https://workbuddy.link/p/fC43lvHVkkmyBYVufJntce",
    consent: "granted",
    credit: "Gabriele",
    role: "student",
    status: "live",
    last_checked: "2026-09-22",
    screenshot: null,
    confidence: null,
  },

  {
    // WK1 lab submission, received 2026-09-23. Picked by the TA, confirmed by the instructor 2026-09-25.
    id: "2026F-UG-lab1-02",
    week: 1,
    source: "lab",
    title: "Which AI Course Fits You?",
    one_liner: {
      en: "Helps CUHK-SZ students choose among three AI courses through a six-question quiz built on the official syllabi.",
      zh: "帮港中深同学用六道题，从三门 AI 课里选出最适合自己的一门。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent"],
    url: "https://c1d327cd067741f39f40582289702b4b.app.workbuddy.host/",
    consent: "granted",
    credit: "NguyenPham Thanh Ngan",
    role: "student",
    status: "live",
    last_checked: "2026-09-25",
    screenshot: null,
    confidence: null,
  },

  {
    // WK1 lab submission, received 2026-09-23. Picked by the TA, confirmed by the instructor 2026-09-25.
    // ChatGPT in ai_stack: the student used it to plan the game and draft prompts before building in WorkBuddy.
    id: "2026F-UG-lab1-03",
    week: 1,
    source: "lab",
    title: "AI 侦探事务所 · AI Detective Agency",
    one_liner: {
      en: "Lets students play campus investigator, choosing which AI capability to use and when to call a human reviewer.",
      zh: "让同学扮演校园调查员，练习判断该用哪种 AI 能力、何时交给人工复核。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent", "ChatGPT"],
    url: "https://workbuddy.link/p/TuMdqDaNzJNidBXclSSwXn",
    consent: "granted",
    credit: "心甜",
    role: "student",
    status: "live",
    last_checked: "2026-09-25",
    screenshot: null,
    confidence: null,
  },

  /* ── AS1 award winners (Best UI Designer · Best Product Thinker) ─────────
     consent granted 2026-11-04 (instructor confirmed). credit = full English
     name, as given by the instructor 2026-11-04. ── */

  {
    // AS1 award winner. Platform inferred from the host; ai_stack not recorded.
    id: "2026F-UG-AS1-01",
    source: "AS1",
    title: "Signal, Campaign intelligence",
    one_liner: {
      en: "Helps bank marketing teams find the customers most likely to accept a personal loan offer.",
      zh: "帮银行营销团队找出最可能接受个人贷款的客户。",
    },
    type: "website",
    platform: "Netlify",
    ai_stack: [],
    url: "https://dapper-clafoutis-a75aa4.netlify.app/",
    consent: "granted",
    credit: "JIN Yitong",
    role: "student",
    status: "live",
    last_checked: "2026-11-04",
    screenshot: null,
    confidence: "low",
  },

  {
    // AS1 award winner. Platform inferred from the host; ai_stack not recorded.
    id: "2026F-UG-AS1-02",
    source: "AS1",
    title: "Personal Loan Campaign: Call Prioritisation",
    one_liner: {
      en: "Helps marketing teams decide which customers to call first in a personal loan campaign.",
      zh: "帮营销团队排定个人贷款外呼顺序，把有限的电话优先给最可能成交的客户。",
    },
    type: "website",
    platform: "AgentOS",
    ai_stack: [],
    url: "https://a5dc4c3beebe4b5396db149caeb198cf.sg2.agentos-app.run/",
    consent: "granted",
    credit: "CHEN Jiarui",
    role: "student",
    status: "live",
    last_checked: "2026-11-04",
    screenshot: null,
    confidence: "low",
  },

  {
    // AS1 award winner. Hosted on GitHub Pages.
    id: "2026F-UG-AS1-03",
    source: "AS1",
    title: "LoanCall",
    one_liner: {
      en: "Helps bank marketing staff pick which 100 of 1,000 clients to phone for a personal loan.",
      zh: "帮银行营销人员从 1000 名存款客户中挑出最值得打电话的 100 人推个人贷款。",
    },
    type: "website",
    platform: "GitHub Pages",
    ai_stack: [],
    url: "https://kaheiwongnatalie-coder.github.io/kaheiwongnatalie.github.io/loancall/",
    consent: "granted",
    credit: "HUANG Jiaxi",
    role: "student",
    status: "live",
    last_checked: "2026-11-04",
    screenshot: null,
    confidence: null,
  },

  {
    // AS1 award winner.
    id: "2026F-UG-AS1-04",
    source: "AS1",
    title: "LoanReach AI",
    one_liner: {
      en: "Helps loan marketing teams decide which selected customers to target for personal loan outreach.",
      zh: "帮贷款营销团队从已选客户中决定优先推送个人贷款的对象。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: [],
    url: "https://21a67239145f44c8b810485bdf3ba0e7.app.workbuddy.host/",
    consent: "granted",
    credit: "NguyenPham Thanh Ngan",
    role: "student",
    status: "live",
    last_checked: "2026-11-04",
    screenshot: null,
    confidence: null,
  },

  {
    // Class showcase of all AS1 student sites, with the four award-winning works highlighted.
    // Not one student's work, so role is "instructor" (labelled as a teacher demo on the site).
    // Author of the Kimi page is not recorded here; credit is a generic label, not a name.
    id: "2026F-UG-AS1-showcase",
    source: "AS1",
    title: "MIS3011 · 像素作品展厅",
    one_liner: {
      en: "Showcases MIS3011 Assignment 1 student websites, with the four award-winning works highlighted.",
      zh: "展示 MIS3011 作业 1 的学生网站，并标出四件获奖作品。",
    },
    type: "website",
    platform: "Kimi",
    ai_stack: [],
    url: "https://ghgouajiy5qji.ok.kimi.link",
    consent: "granted",
    credit: "Course team",
    role: "instructor",
    status: "live",
    last_checked: "2026-11-04",
    screenshot: null,
    confidence: "low",
  },

];
