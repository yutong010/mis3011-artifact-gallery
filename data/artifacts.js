/* ═══════════════════════════════════════════════════════════════════════
   ARTIFACT RECORDS — this is the only file you edit to add or change entries.
   Never edit index.html to add an artifact.
   条目维护只改这个文件，不要去改 index.html。

   ── ADDING ONE ───────────────────────────────────────────────────────────
   Copy the template at the bottom of this comment, paste it at the TOP of the
   ARTIFACTS array (newest first), fill it in, save, commit.

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
   week         teaching week number. Entries are grouped under "Week N".
   source       "lab 1" | "AS1" | "AS2" | "project"  — shown as a tag
   title        the artifact's own name (not translated)
   one_liner    { en, zh }  <= 18 words / 40 字
   type         website | agent | workflow | chatbot | skill | others
   +            controlled list. Add a value only with a written reason (spec 3.3).
   platform     WorkBuddy | Dify | Colab | GitHub Pages | Streamlit | ...
   ai_stack     array of model / tool names
   url          the public address. This is the point of the whole site.
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
    source: "lab 1",
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

  /* ── Week 1 seed: four runs the instructor built and demonstrated in class.
     They are labelled as instructor demos, not student work. Student artifacts
     start landing from Week 2 (26WK1_deckC_build_order.md section 3).
     ────────────────────────────────────────────────────────────────────── */

  {
    id: "2026F-UG-demo-01",
    week: 1,
    source: "lab 1",
    title: "From WeChat Posts to a Public Feishu Doc",
    one_liner: {
      en: "Turns scattered campus announcements into one structured guide new students can actually use.",
      zh: "把散落的校园通知整理成一份新生真正用得上的结构化指南。",
    },
    type: "workflow",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent"],
    url: "https://workbuddy.cc/agents/tasks/share/4OKay8j723?platform=workbuddy-ai&ext2=copy_link",
    consent: "granted",
    credit: "为2.5努力的Yutong",
    role: "instructor",
    status: "live",
    last_checked: "2026-09-03",
    screenshot: null,
    confidence: null,
  },
  {
    id: "2026F-UG-demo-02",
    week: 1,
    source: "lab 1",
    title: "Live AI Capability Survey for MIS3011",
    one_liner: {
      en: "Lets a lecturer see, live on the projector, which AI tools the room actually uses.",
      zh: "让讲台上的老师当场看到全班到底在用哪些 AI 工具。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent"],
    url: "https://workbuddy.cc/agents/tasks/share/JUajs4mb9e?platform=workbuddy-ai&ext2=copy_link",
    consent: "granted",
    credit: "为2.5努力的Yutong",
    role: "instructor",
    status: "live",
    last_checked: "2026-09-03",
    screenshot: null,
    confidence: null,
  },
  {
    id: "2026F-UG-demo-03",
    week: 1,
    source: "lab 1",
    title: "An Academic Personal Website from a CV",
    one_liner: {
      en: "Gives a researcher a mobile-friendly public page without touching a line of code.",
      zh: "让研究者不写一行代码就拥有一个适配手机的公开主页。",
    },
    type: "website",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent"],
    url: "https://workbuddy.cc/agents/tasks/share/XieJgUExAA?platform=workbuddy-ai&ext2=copy_link",
    consent: "granted",
    credit: "为2.5努力的Yutong",
    role: "instructor",
    status: "live",
    last_checked: "2026-09-03",
    screenshot: null,
    confidence: null,
  },
  {
    id: "2026F-UG-demo-04",
    week: 1,
    source: "lab 1",
    title: "Organise Reimbursement Files",
    one_liner: {
      en: "Saves an administrator an afternoon of renaming invoices and spotting mismatches by hand.",
      zh: "帮行政人员省下一下午手工重命名发票、核对不一致的时间。",
    },
    type: "workflow",
    platform: "WorkBuddy",
    ai_stack: ["WorkBuddy agent"],
    url: "https://workbuddy.cc/agents/tasks/share/XdTX6QJ6Jk?platform=workbuddy-ai&ext2=copy_link",
    consent: "granted",
    credit: "为2.5努力的Yutong",
    role: "instructor",
    status: "live",
    last_checked: "2026-09-03",
    screenshot: null,
    confidence: null,
  },

];
