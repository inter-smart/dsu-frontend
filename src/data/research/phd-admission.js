// Content for /research-innovation/doctoral-research/phd-admission and its two sub pages.
// Source: https://www.dsu.edu.in/coe/dsu-research/phd-admission (+ research-supervisor-list, phdregulations)
// Each page body is an HTML string rendered inside one `.typography` wrapper (dangerouslySetInnerHTML).
// Static, trusted content only: never put user input in these strings.
// Styling is Tailwind classes written in full in this file (Tailwind scans src/), so the class
// constants below must stay as complete literal strings.

export const PHD_BASE = "/research-innovation/doctoral-research";
const FILES = "https://www.dsu.edu.in";
const SYLLABUS = "/images/phd/Syllabus";

export const phdMenuItems = [
  { label: "Eligibility", href: `${PHD_BASE}/phd-admission#eligibility` },
  { label: "Admission Process", href: `${PHD_BASE}/phd-admission#admission-process` },
  { label: "Duration", href: `${PHD_BASE}/phd-admission#duration` },
  { label: "Important Dates", href: `${PHD_BASE}/phd-admission#important-dates` },
  { label: "Application", href: `${PHD_BASE}/phd-admission#application` },
  { label: "Fees", href: `${PHD_BASE}/phd-admission#fees` },
  { label: "Supervisor Directory", href: `${PHD_BASE}/supervisor-directory` },
  { label: "PhD Regulations", href: `${PHD_BASE}/phd-regulations` },
  { label: "Research Coursework", href: `${PHD_BASE}/phd-admission#research-coursework` },
  { label: "Forms and Template", href: `${PHD_BASE}/phd-admission#forms-and-template` },
];

export const phdHero = (title, crumbs) => ({
  heroMedia: {
    alternativeText: `${title} page banner`,
    mime: "image/jpg",
    url: "/images/academic-banner.jpg",
  },
  title,
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Research & Innovation", href: "/" },
    { label: "Doctoral Research", href: PHD_BASE },
    ...crumbs,
  ],
  menuBar: true,
  menuItems: phdMenuItems,
  menuHome: PHD_BASE,
});

/* ---------- class constants (same look as the first component version) ---------- */
const CARD =
  "rounded-[12px] xl:rounded-[15px] border border-[#F3DFD2] dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]";
const PAD = "p-[20px] xl:p-[30px]";
const H2 = "text-[28px] sm:text-[22px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121] dark:text-white";
const H3 = "text-[18px] xl:text-[22px] 3xl:text-[28px] font-bold leading-[1.2] text-[#212121] dark:text-white";
const H3_BIG = "text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] font-bold leading-[1.2] text-black dark:text-white";
const TEXT = "text-[15px] lg:text-[16px] 3xl:text-[18px] leading-normal tracking-[0.02rem] text-[#4A5565] dark:text-white";
const LABEL = "text-[12px] 3xl:text-[14px] uppercase tracking-wide text-[#4A5565] dark:text-[#9CA3AF]";
const GRAD = "bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent font-bold";
const FACT = "rounded-[8px] bg-[#FFF8EE] dark:bg-white/5 px-[12px] py-[10px]";
const BADGE =
  "flex h-[34px] w-[34px] xl:h-[40px] xl:w-[40px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-[14px] xl:text-[16px] font-bold text-white";
const BULLET =
  "relative pl-[20px] text_1 before:absolute before:left-0 before:top-[0.55em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-gradient-to-r before:from-[#DC2626] before:to-[#F97316]";
const FILE_LINK =
  "group flex h-full items-center justify-between gap-[12px] rounded-[10px] border border-[#F3DFD2] dark:border-white/10 bg-white dark:bg-[#1a1a1a] px-[16px] py-[12px] text_1 font-medium !text-[#212121] dark:!text-white no-underline transition-colors duration-300 hover:border-[#F97316] hover:!text-[#DC2626]";
const TEXT_LINK = "font-medium !text-[#DC2626] underline underline-offset-2";
const BTN =
  "mt-[12px] inline-flex h-[40px] items-center rounded-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-medium !text-white no-underline transition-opacity duration-300 hover:opacity-90";
const TH = "px-[16px] py-[14px] xl:py-[16px] text-center text_1 font-medium !text-white";
const TD = "px-[16px] py-[14px] align-top text_1 !text-black dark:!text-white";
// Full-bleed background behind a section that sits inside the container
const BG_WHITE = "before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-white dark:before:bg-[#101010]";
const BG_TINT = "before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#F8FAFC] dark:before:bg-[#0B0B0B]";

/* ---------- HTML builders ---------- */
const ARROW =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transition-transform duration-300 group-hover:translate-y-[2px]" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>';

const bullets = (items, extra = "") =>
  `<div role="list" class="flex flex-col gap-[10px] ${extra}">${items.map((i) => `<div role="listitem" class="${BULLET}">${i}</div>`).join("")}</div>`;
const fileLink = (path, label) =>
  `<a href="${path.startsWith("http") ? path : FILES + path}" target="_blank" rel="noopener noreferrer" class="${FILE_LINK}"><span>${label}</span>${ARROW}<span class="sr-only">(opens in a new tab)</span></a>`;
const fileList = (items, cols = "") =>
  `<div role="list" class="grid gap-[10px] ${cols}">${items.map(([label, path]) => `<div role="listitem">${fileLink(path, label)}</div>`).join("")}</div>`;
const facts = (items) =>
  `<dl class="mt-[16px] grid grid-cols-2 gap-[10px]">${items.map(([l, v]) => `<div class="${FACT}"><dt class="${LABEL}">${l}</dt><dd class="text-[18px] xl:text-[20px] font-bold text-[#212121] dark:text-white">${v}</dd></div>`).join("")}</dl>`;
const badge = (n) => `<span class="${BADGE}">${n}</span>`;

// Section shell: anchor id (menubar), heading + description, full-bleed background, shared vertical rhythm
const section = ({ id, heading, description, tint = false, body }) =>
  `<section${id ? ` id="${id}"` : ""} class="relative isolate scroll-mt-[150px] py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] ${tint ? BG_TINT : BG_WHITE}">${
    heading || description
      ? `<div data-reveal class="mb-[25px] xl:mb-[35px] max-w-[900px]">${heading ? `<h2 class="${H2}">${heading}</h2>` : ""}${description ? `<p class="${TEXT} mt-[10px]">${description}</p>` : ""}</div>`
      : ""
  }${body}</section>`;

const programmesTable = (rows) =>
  `<div class="w-full overflow-x-auto"><table class="w-full min-w-[640px] table-fixed border-collapse border border-[#333] dark:border-white/30 text-left"><caption class="sr-only">Research Programs Offered</caption><colgroup><col class="w-[60px] xl:w-[6%]"><col class="w-[40%]"><col></colgroup><thead><tr class="bg-[#F97316]"><th scope="col" class="${TH} border-r border-[#333]/60 dark:border-white/30">#</th><th scope="col" class="${TH} border-r border-[#333]/60 dark:border-white/30">School / College</th><th scope="col" class="${TH}">Departments / Areas of Research</th></tr></thead><tbody data-reveal-stagger>${rows
    .map(
      ([school, depts], i) =>
        `<tr class="border-t border-[#333] dark:border-white/30 transition-colors duration-300 hover:bg-[#FFF8EE] dark:hover:bg-[#18191B]"><td class="${TD} border-r border-[#333] dark:border-white/30 text-center">${i + 1}</td><th scope="row" class="${TD} border-r border-[#333] dark:border-white/30 text-left font-semibold">${school}</th><td class="${TD}">${depts || '<span aria-label="No departments listed">—</span>'}</td></tr>`,
    )
    .join("")}</tbody></table></div>`;

/* ---------- Ph.D. Admission ---------- */
const adm = {
  intro: `<section class="relative isolate py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] ${BG_WHITE}">
<div data-reveal class="mb-[30px] xl:mb-[40px] max-w-[1000px] border-l-4 border-[#F97316] pl-[16px] xl:pl-[24px]"><p class="text-[17px] xl:text-[19px] 3xl:text-[22px] leading-[1.5] text-[#4A5565] dark:text-white">Dayananda Sagar University (DSU) invites applications for admission to its PhD program (Full-Time/Part-Time) and Direct Ph.D. programs across various disciplines. The University has a strong pool of qualified faculty members who guide research scholars toward their doctoral degrees. DSU promotes interdisciplinary and socially relevant research across diverse domains.</p></div>
<div data-reveal class="mb-[20px]"><h2 class="${H3_BIG}">Research Programs Offered</h2><p class="${TEXT} mt-[8px]">Candidates may select any one School and Department to pursue their Ph.D. at Dayananda Sagar University.</p></div>
${programmesTable([
  ["CDSIMER (Para Clinical Research)", "Department: Community Medicine, Pathology"],
  ["College of Journalism &amp; Mass Communication", "Department: English Literature, Journalism, Mass Communication"],
  ["School of Basic and Applied Sciences", "Department: Biochemistry, Biotechnology, Chemistry, Microbiology, Molecular Biology and Genetics"],
  ["School of Commerce and Management", ""],
  ["School of Computer Application", ""],
  ["School of Engineering", "Department: Aerospace Engineering, Chemistry, Computer Science and Engineering, AI &amp; ML, Electronics and Communication Engineering, Mathematics, Mechanical Engineering, Physics, Biological Sciences and Humanities."],
  ["School of Health Sciences", "Department: Nursing Sciences, Pharmaceutical Sciences, Physiotherapy, Public Health"],
  ["School of Law", ""],
  ["AI Factory- Center of Excellence", ""],
])}
</section>`,

  eligibility: section({
    id: "eligibility",
    heading: "Eligibility Criteria",
    description:
      "For admission to all research programmes, candidates must have completed their preceding degree programmes (UG and PG) from institutions / programmes recognised by the UGC and/or AICTE, as applicable.",
    tint: true,
    body: `<div data-reveal class="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">${[
      ["Regular Ph.D.", "≥ 55%", "Master’s degree in (Engineering/Sciences/Commerce/Management/Health Sciences/Journalism / Literature / Law) with ≥55% marks or equivalent grade from any recognized university.", "Relaxation: 5% for SC/ST/OBC (NCL)/Differently abled candidates."],
      ["Direct Ph.D.", "≥ 75%", "Candidates with a 4-year degree (B.E/B.Tech or equivalent) with ≥75% marks (or equivalent grade) are also eligible to apply for Direct PhD Admission.", "Relaxation: 5% (from 75% to 70%) for reserved categories."],
    ]
      .map(
        ([t, v, text, note]) =>
          `<article class="${CARD} ${PAD}"><div class="flex items-baseline justify-between gap-[12px] border-b border-[#F3DFD2] dark:border-white/10 pb-[14px]"><h3 class="${H3}">${t}</h3><span class="${GRAD} text-[28px] xl:text-[36px] 3xl:text-[44px] leading-none">${v}</span></div><p class="${TEXT} mt-[14px]">${text}</p><p class="mt-[12px] rounded-[8px] bg-[#FFF8EE] dark:bg-white/5 px-[12px] py-[8px] font-medium !text-[#B45309] dark:!text-[#FDBA74]">${note}</p></article>`,
      )
      .join("")}</div>
<div data-reveal class="${CARD} ${PAD} mt-[25px] xl:mt-[35px]"><h3 class="${H3} mb-[14px]">Interdisciplinary Ph.D. Program</h3>${bullets([
      "Candidates opting for an Interdisciplinary Ph.D. Program may choose a CoSupervisor from another Department or School within Dayananda Sagar University (DSU), based on the relevance of the research topic.",
      "Alternatively, candidates may appear and clear the Entrance Examination conducted by the respective school/department under which they wish to register.",
      "The final Ph.D. degree certificate will be awarded under the School/Department in which the candidate formally appeared for the entrance exam and registered.",
    ])}</div>`,
  }),

  process: section({
    id: "admission-process",
    heading: "Admission Process",
    description: "Entrance test, interview and selection, followed by research supervisor allotment.",
    body: `<div role="list" data-reveal-stagger class="grid gap-[15px] xl:gap-[25px] lg:grid-cols-2">${[
      {
        title: "Entrance Test",
        subtitle: "DSU Ph.D. Entrance Test (Written Exam)",
        facts: [["Sections", "2"], ["Total marks", "100 (50 each)"], ["Duration", "2 hours"], ["Mode", "Online"]],
        points: [
          "Section 1: Research Methodology. Type: Objective questions.",
          "Section 2: Specialization subject based on school/department chosen by the candidate.",
          "Candidates who have qualified UGC-JRF/UGC-NET/UGC-CSIR JRF/UGC-CSIR NET/SLET/GATE recently can request for exemption from the entrance exam.",
          "The syllabus for each discipline is available under the tab “Entrance Test Syllabus.”",
          "Entrance Test: Online Proctored, Computer based Exam.",
        ],
      },
      {
        title: "Interview",
        points: [
          "Shortlisted candidates are required to attend in-person panel interview. Evaluation will be based on the candidate’s domain knowledge, understanding of relevant literature, and awareness of current research trends in the chosen domain.",
          "Interview: Offline at the respective schools and departments.",
        ],
      },
      {
        title: "Selection",
        facts: [["Minimum aggregate", "50%"], ["Reserved categories", "45%"], ["Entrance test weight", "70%"], ["Interview weight", "30%"]],
        points: [
          "Selection is based on performance in the Entrance Test and Interview conducted by an expert panel. A minimum of 50% aggregate marks is required to qualify.",
          "Relaxation of marks: 5% (from 50% to 45% for SC/ST/OBC (Non-Creamy Layer) / Differently abled candidates shall be given.",
          "Final selection is based on the rank list prepared from the combined performance in both Entrance Test and Interview. (70% weightage for the entrance test and 30% for the performance in the interview).",
        ],
      },
      {
        title: "Research Supervisor Selection",
        points: [
          "Supervisor will be allotted after the candidate’s selection. However, applicants may indicate their preferred research supervisor in the application form from the department in which they appeared for the entrance examination.",
          "Considering the interdisciplinary nature of the proposed research, the supervisor may request for a co-supervisor from another department, if required and must be approved by the office.",
          "Please note that indicating a supervisor preference does not guarantee allocation to the preferred supervisor. The final decision regarding supervisor allocation will be taken by the concerned Department and Dean of the school, based on the applicable criteria and availability.",
        ],
      },
    ]
      .map(
        (s, i) =>
          `<div role="listitem" class="${CARD} ${PAD}"><div class="flex items-center gap-[12px]">${badge(i + 1)}<div><h3 class="${H3}">${s.title}</h3>${s.subtitle ? `<p class="font-medium !text-[#F97316]">${s.subtitle}</p>` : ""}</div></div>${s.facts ? facts(s.facts) : ""}${bullets(s.points, "mt-[16px]")}</div>`,
      )
      .join("")}</div>`,
  }),

  duration: section({
    id: "duration",
    heading: "Program Duration",
    tint: true,
    body: `<div data-reveal class="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2 lg:grid-cols-3">${[
      ["Regular PhD", "Candidates with PG qualification, including coursework.", [["3 years", "Full-Time"], ["4 years", "Part-Time"]]],
      ["Direct PhD", "Candidates with 4-year degree, including coursework.", [["4 years", "Full-Time"], ["5 years", "Part-Time"]]],
      ["Maximum duration", "Maximum program duration will be Six years.", [["6 years", "Maximum"]]],
    ]
      .map(
        ([t, text, vals]) =>
          `<article class="${CARD} ${PAD}"><h3 class="${H3}">${t}</h3><p class="${TEXT} mt-[6px]">${text}</p><dl class="mt-[18px] flex flex-wrap gap-x-[30px] gap-y-[12px]">${vals.map(([v, l]) => `<div class="flex flex-col-reverse"><dt class="text_1 mt-[4px]">${l}</dt><dd class="${GRAD} text-[30px] xl:text-[38px] 3xl:text-[46px] leading-none">${v}</dd></div>`).join("")}</dl></article>`,
      )
      .join("")}</div>`,
  }),

  // A real sequence (deadline, test, interview, results, admission, reporting), so a rail is justified.
  dates: section({
    id: "important-dates",
    heading: "Important Dates",
    body: `<div role="list" data-reveal-stagger class="relative ml-[7px] border-l-2 border-[#F3DFD2] dark:border-white/15">${[
      ["Last date for submission of filled in Application Form", "05.11.2026"],
      ["Ph. D Entrance Test (online mode)", "14.11.2026"],
      ["Interview date will be communicated by email from the respective department/schools", "Between 17.11.2026 to 30.11.2026"],
      ["Announcement of the final list of candidates selected", "03.12.2026"],
      ["Last date for Ph.D. Admissions", "30.12.2026"],
      ["Reporting", "1st Week of January"],
    ]
      .map(
        ([a, d]) =>
          `<div role="listitem" class="relative pb-[18px] pl-[22px] xl:pl-[32px] last:pb-0"><span class="absolute -left-[9px] top-[26px] h-[16px] w-[16px] rounded-full border-[3px] border-white bg-gradient-to-r from-[#DC2626] to-[#F97316] dark:border-[#101010]" aria-hidden="true"></span><div class="${CARD} flex flex-col gap-[8px] p-[14px] xl:flex-row xl:items-center xl:justify-between xl:gap-[24px] xl:p-[18px_26px]"><span class="text_1 !text-[#212121] dark:!text-white">${a}</span><span class="w-fit shrink-0 rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[14px] py-[4px] text_1 font-semibold !text-white">${d}</span></div></div>`,
      )
      .join("")}</div>`,
  }),

  application: section({
    id: "application",
    heading: "How to Apply",
    tint: true,
    body: `<div class="grid gap-[20px] xl:gap-[30px] lg:grid-cols-[1.4fr_1fr]">
<div role="list" data-reveal-stagger class="flex flex-col gap-[15px]">${[
      [1, "Download the Application Form", "", `<a href="${FILES}${SYLLABUS}/2026_Dec/PhD_Application_From_Dec_2026.pdf" target="_blank" rel="noopener noreferrer" class="${BTN}">Click here</a>`],
      [2, "Pay the Application Fee", "₹2,500 (Entrance Test &amp; Interview)", ""],
      [3, "Submit the Google Form", "Login using your Gmail account and upload details in the Google Form link provided below:", `<a href="https://forms.gle/PNoCPDMAXnzyRaEs8" target="_blank" rel="noopener noreferrer" class="${TEXT_LINK} mt-[8px] block break-all text_1">https://forms.gle/PNoCPDMAXnzyRaEs8</a>`],
    ]
      .map(
        ([n, t, text, extra]) =>
          `<div role="listitem" class="${CARD} flex gap-[14px] p-[18px] xl:p-[24px]">${badge(n)}<div class="min-w-0"><h3 class="text-[17px] xl:text-[20px] 3xl:text-[25px] font-bold text-[#212121] dark:text-white">${t}</h3>${text ? `<p class="${TEXT} mt-[4px]">${text}</p>` : ""}${extra}</div></div>`,
      )
      .join("")}</div>
<div data-reveal class="${CARD} ${PAD} h-fit"><h3 class="${H3} mb-[14px]">Bank Details</h3><dl class="divide-y divide-[#F3DFD2] dark:divide-white/10">${[
      ["Account Name", "Dayananda Sagar University"],
      ["Account No.", "74370100004926"],
      ["Bank", "Bank of Baroda, DSCE Branch, Bangalore"],
      ["IFSC", "BARB0VJDASC (5th character is zero)"],
    ]
      .map(([l, v]) => `<div class="py-[10px] first:pt-0 last:pb-0"><dt class="${LABEL}">${l}</dt><dd class="text_1 break-words font-semibold !text-[#212121] dark:!text-white">${v}</dd></div>`)
      .join("")}</dl></div>
</div>`,
  }),

  fees: section({
    id: "fees",
    heading: "Tuition Fee Structure",
    description: "Indian Students",
    body: `<div data-reveal class="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">${[
      ["Year 1", "₹73,000"],
      ["Year 2 &amp; onwards", "₹62,000 per year"],
    ]
      .map(([l, v]) => `<article class="${CARD} ${PAD}"><p class="${LABEL}">${l}</p><p class="${GRAD} mt-[6px] text-[28px] xl:text-[36px] 3xl:text-[44px] leading-[1.1]">${v}</p></article>`)
      .join("")}</div>
<p data-reveal class="text_1 mt-[15px]">NRI/Foreign Candidates can email to <a href="mailto:admission-research@dsu.edu.in" class="${TEXT_LINK}">admission-research@dsu.edu.in</a> for enquires.</p>
<div class="mt-[35px] xl:mt-[50px]">
<div data-reveal class="mb-[20px] max-w-[1000px]"><h3 class="${H3_BIG}">Fellowship per month</h3><p class="${TEXT} mt-[8px]">Full-time Ph.D. candidates admitted in selected disciplines will be eligible for a fellowship of ₹45,000 per month (CSE Cluster) and ₹35,000 (Other Departments) for the first two years and ₹50,000 and ₹40,000 per month in the 3rd year onwards. CSE Cluster includes the departments of Computer Science and Engineering, Artificial Intelligence and Machine Learning, and School of Computer Applications.</p></div>
<div data-reveal class="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">${[
      ["Year 1 – 2", "₹45,000", "₹35,000"],
      ["Year 3 onwards", "₹50,000", "₹40,000"],
    ]
      .map(
        ([l, cse, other]) =>
          `<article class="${CARD} ${PAD}"><h4 class="text-[17px] xl:text-[20px] 3xl:text-[25px] font-bold text-[#212121] dark:text-white">${l}</h4><dl class="mt-[14px] grid grid-cols-2 gap-[10px]">${[["CSE Cluster", cse], ["Other Departments", other]].map(([n, a]) => `<div class="${FACT}"><dt class="${LABEL}">${n}</dt><dd class="text-[20px] xl:text-[24px] font-bold text-[#212121] dark:text-white">${a}<span class="text-[13px] font-normal"> / month</span></dd></div>`).join("")}</dl></article>`,
      )
      .join("")}</div>
${bullets(
  [
    "The university fellowship is available only for the first 3 years for full-time scholars.",
    "Regular PhD under AI Factory is offered only in full-time mode, with an enhanced stipend of ₹50,000 to ₹60,000 based on interview performance. Proven track record on Artificial Intelligence frameworks, NVIDIA certifications, and AI based projects are given preference.",
    "Admission to the Ph.D. programme does not guarantee the award of a stipend/fellowship. The award of a stipend/fellowship shall be based on the candidate’s performance, the recommendations of the interview/selection panel, and the availability of stipend/fellowship positions, subject to the applicable University rules and regulations.",
  ],
  "mt-[20px]",
)}
</div>`,
  }),

  coursework: section({
    id: "research-coursework",
    heading: "Research Coursework",
    description: "Entrance Test Syllabus",
    tint: true,
    body: `<div class="grid gap-[25px] xl:gap-[35px] lg:grid-cols-[1fr_1.6fr]">
<div data-reveal><h3 class="${H3} mb-[12px]">Part - A</h3>${fileList([
      ["PART A- RESEARCH METHODOLOGY(Common) 2026", `${SYLLABUS}/2026_June/PART_A__RESEARCH_METHODOLOGYCommon_2026.pdf`],
      ["PART A - Medical Science, CDSIMER 2026", `${SYLLABUS}/2026_June/PART_A_Medical_Science_CDSIMER_2026.pdf`],
    ])}</div>
<div data-reveal><h3 class="${H3} mb-[12px]">Part - B</h3>${fileList(
      [
        ["PhD Entrance Test Syllabus - AI Factory - Center of Excellence", `${SYLLABUS}/2026_Dec/PhD_Entrance_Test_Syllabus_-_AI_Factory_-_2026.pdf`],
        ["PhD Entrance Test Syllabus - School of Law 2026", `${SYLLABUS}/2026_June/5A_School_of_Law_June_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Engineering - 2026", `${SYLLABUS}/2026_June/5B_Engineering_June_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - LifeSciences - 2026", `${SYLLABUS}/2026_June/5C_Life_Sciences_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Management Studies - 2026", `${SYLLABUS}/2026_June/5D_ManagementStudies_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - School of Health Sciences - 2026", `${SYLLABUS}/2026_June/5E_HealthSciences_2026.pdf`],
        ["PhD Entrance Test Syllabus - Journalism and Mass Communication - 2026", `${SYLLABUS}/2026_June/5F_CJMC_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Maths, Physics, Chemistry, Literature - 2026", `${SYLLABUS}/2026_June/5G_PCML__2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Computer Applications - 2026", `${SYLLABUS}/2026_June/5H_CA__2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Community Medicine - 2026", `${SYLLABUS}/2026_June/5I_Community_Medicine___2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Pathology - 2026", `${SYLLABUS}/2026_June/5J_Pathology_2026_1.pdf`],
        ["PhD Entrance Test Syllabus - Biological sciences - 2026", `${SYLLABUS}/2026_June/5K_Biological_sciences_2026.pdf`],
        ["PhD Entrance Test Syllabus - Public Health - 2026", `${SYLLABUS}/2026_June/5L_Public_Health_Syllabus_2026.pdf`],
      ],
      "xl:grid-cols-2",
    )}</div>
</div>`,
  }),

  forms: section({
    id: "forms-and-template",
    heading: "Forms and Template",
    body: `<div data-reveal-stagger>${fileList(
      [
        ["Application Form", `${SYLLABUS}/2026_Dec/PhD_Application_From_Dec_2026.pdf`],
        ["Notification", `${SYLLABUS}/2026_Dec/PhD_-_December_2026_Session_2.pdf`],
        ["Notification for AI Factory", `${SYLLABUS}/2026_Dec/PhD_-_December_2026_Session_1.pdf`],
        ["Templates for Supervisors &amp; Scholars", "/images/phd/Templates_for_Scholars/Temp_03022025.pdf"],
        ["Official Circular", "/images/phd/OFFICIAL_CIRCULAR.pdf"],
        ["Code of Ethics (Research Ethics Policy 2021)", "/images/research/DSU_Research_Ethics_Policy_2021.pdf"],
      ],
      "md:grid-cols-2 xl:grid-cols-3",
    )}</div>`,
  }),

  contact: section({
    id: "contact",
    heading: "Contact",
    tint: true,
    body: `<div data-reveal-stagger class="grid gap-[15px] xl:gap-[25px] md:grid-cols-2 xl:grid-cols-3">${[
      ["Mrs. Parameswari", "Innovation Campus, Kudlu Gate, Hosur Road, Bengaluru - 560 114"],
      ["Ms. Srushti", "Room No. 317, 3rd Floor, A Block, DSU Main Campus, Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112"],
    ]
      .map(([n, a]) => `<address class="${CARD} p-[20px] xl:p-[28px] not-italic"><p class="!font-bold !text-[#212121] dark:!text-white">${n}</p><p class="font-medium !text-[#F97316]">Research Coordinator</p><p class="mt-[8px]">${a}</p></address>`)
      .join("")}
<div class="${CARD} p-[20px] xl:p-[28px]"><p class="!font-bold !text-[#212121] dark:!text-white">Research Cell</p><p class="mt-[8px]"><a href="mailto:admission-research@dsu.edu.in" class="${TEXT_LINK} break-all">admission-research@dsu.edu.in</a></p><p class="mt-[4px]"><a href="tel:08049092912" class="font-medium !text-[#212121] dark:!text-white">080 4909 2912</a></p><p class="mt-[12px]"><span class="block ${LABEL}">Admissions Helpline</span>080 46461800 / +91 6366885507</p><p class="mt-[12px]"><span class="block ${LABEL}">NRI / Foreign Admissions Helpline</span>+91 9606022152 / +91 9606022150 / +91 9606022149</p></div></div>`,
  }),
};

export const phdAdmission = {
  hero: phdHero("Ph.D. Admission – December 2026 Session", [{ label: "Ph.D. Admission" }]),
  html: Object.values(adm).join("\n"),
};

/* ---------- Research Supervisor's List ---------- */
const supervisorGroups = [
  ["School of Engineering", [
    ["Department of Aerospace", "/images/research/supervisor_list/2025/ASE.pdf"],
    ["Department of Mechanical Engineering", "/images/research/supervisor_list/2025/ME.pdf"],
    ["Department of Electronics And Communication Engineering", "/images/research/supervisor_list/2025/ECE_1.pdf"],
    ["Department of Computer Science And Engineering Cluster", "/images/research/supervisor_list/2025/CSE_1.pdf"],
    ["Department of Physics", "/images/research/supervisor_list/2025/PHYSICS.pdf"],
    ["Department of Chemistry", "/images/research/supervisor_list/2025/CHEMISTRY.pdf"],
    ["Department of Mathematics", "/images/research/supervisor_list/2025/MATHS.pdf"],
  ]],
  ["School of Health Sciences", [
    ["College of Nursing", "/images/research/supervisor_list/2025/CONS.pdf"],
    ["College of Pharmaceutical Sciences", "/images/research/supervisor_list/2025/COPS.pdf"],
    ["College of Physiotherapy", "/images/research/supervisor_list/2025/COPT.pdf"],
  ]],
  ["School of Basic And Applied Sciences", [["School of Basic And Applied Sciences", "/images/research/supervisor_list/2025/SBAS.pdf"]]],
  ["School of Commerce And Management Studies", [["School of Commerce And Management Studies", "/images/research/supervisor_list/2025/SCMS.pdf"]]],
  ["School of Arts, Design And Humanities", [["College of Journalism &amp; Mass Communication", "/images/research/supervisor_list/2025/CJMC.pdf"]]],
  ["School of Law", [["School of Law", "/images/research/supervisor_list/2025/LAW.pdf"]]],
  ["School of Computer Application", [["School of Computer Application", "/images/research/supervisor_list/2025/SCA.pdf"]]],
];

export const phdSupervisors = {
  hero: phdHero("Research Supervisor's List", [
    { label: "Ph.D. Admission", href: `${PHD_BASE}/phd-admission` },
    { label: "Research Supervisor's List" },
  ]),
  html: section({
    heading: "Research Supervisor's List",
    description: "Department-wise list of approved Ph.D. research supervisors. Each list opens as a PDF.",
    body: `<div data-reveal-stagger class="grid gap-[15px] xl:gap-[25px] md:grid-cols-2">${supervisorGroups
      .map(([school, items]) => `<section class="${CARD} ${PAD}"><h2 class="${H3} mb-[14px]">${school}</h2>${fileList(items)}</section>`)
      .join("")}</div>`,
  }),
};

/* ---------- Ph.D Regulations ---------- */
const REG_PDF = `${FILES}/images/phd/PhD_regulations_2023.pdf`;

export const phdRegulations = {
  hero: phdHero("Ph.D Regulations", [
    { label: "Ph.D. Admission", href: `${PHD_BASE}/phd-admission` },
    { label: "Ph.D Regulations" },
  ]),
  html: section({
    heading: "Ph.D Regulations",
    description: "Read the regulations below or open the PDF in a new tab.",
    body: `<div class="grid gap-[20px] xl:gap-[30px] lg:grid-cols-[2fr_1fr]">
<div data-reveal class="overflow-hidden rounded-[12px] border border-[#F3DFD2] bg-[#F8FAFC] dark:border-white/10"><object data="${REG_PDF}" type="application/pdf" aria-label="Ph.D Regulations 2023" class="block h-[520px] w-full xl:h-[750px]"><div class="p-[24px]"><p class="${TEXT}">Your browser cannot display the PDF here.</p><a href="${REG_PDF}" target="_blank" rel="noopener noreferrer" class="${BTN}">Open Ph.D Regulations 2023</a></div></object></div>
<aside class="flex flex-col gap-[15px] xl:gap-[25px]">
<div data-reveal class="${CARD} p-[20px] xl:p-[28px]"><h2 class="${H3} mb-[12px]">Documents</h2>${fileList([
      ["Download Ph.D Regulations 2023", REG_PDF],
      ["Official Circular", "/images/phd/OFFICIAL_CIRCULAR.pdf"],
      ["Templates for Supervisors &amp; Scholars", "/images/phd/Templates_for_Scholars/Temp_03022025.pdf"],
      ["Code of Ethics (Research Ethics Policy 2021)", "/images/research/DSU_Research_Ethics_Policy_2021.pdf"],
    ])}</div>
<div data-reveal class="${CARD} p-[20px] xl:p-[28px]"><h2 class="${H3} mb-[12px]">Contact</h2><p><span class="block ${LABEL}">Research Cell (City Innovation Campus)</span><a href="tel:08049092912" class="font-medium !text-[#212121] dark:!text-white">080 4909 2912</a></p><p class="mt-[12px]"><span class="block ${LABEL}">Admissions Helpline</span>080 46461800 / +91 6366885507</p></div>
</aside>
</div>`,
  }),
};
