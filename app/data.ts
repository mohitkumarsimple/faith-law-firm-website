export type PracticeArea = {
  code: string;
  title: string;
  shortTitle: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    code: "IP",
    title: "IPR & Litigation",
    shortTitle: "Intellectual Property",
    description:
      "Trademark, copyright and brand-protection strategy, prosecution and dispute support in India and across borders.",
  },
  {
    code: "TM",
    title: "International Trademark Registration",
    shortTitle: "International Trademarks",
    description:
      "Madrid Protocol and multi-jurisdiction filing guidance for Indian businesses expanding overseas and foreign businesses entering India.",
  },
  {
    code: "AR",
    title: "Arbitration",
    shortTitle: "Arbitration",
    description:
      "Domestic, international and ad-hoc arbitration support focused on practical, confidential dispute resolution.",
  },
  {
    code: "CL",
    title: "Civil Litigation",
    shortTitle: "Civil Litigation",
    description:
      "Property, contract, recovery, injunction and declaratory matters before courts in Delhi.",
  },
  {
    code: "CS",
    title: "Commercial Suits",
    shortTitle: "Commercial Disputes",
    description:
      "Partnership, shareholder, trade-contract and business disputes under India’s commercial-courts framework.",
  },
  {
    code: "LC",
    title: "Licence & Compliances",
    shortTitle: "Licensing & Compliance",
    description:
      "Business registrations, operating licences, regulatory filings and incorporation guidance, including for foreign nationals.",
  },
  {
    code: "FL",
    title: "Family Issues",
    shortTitle: "Family Law",
    description:
      "Divorce, custody, maintenance, domestic-violence and adoption matters handled with care and discretion.",
  },
  {
    code: "CR",
    title: "Criminal Matters",
    shortTitle: "Criminal Matters",
    description:
      "Bail, anticipatory bail, trial defence and related criminal-court representation.",
  },
  {
    code: "CC",
    title: "Consumer Court",
    shortTitle: "Consumer Protection",
    description:
      "Claims involving deficient services, unfair trade practices, refunds and compensation before consumer commissions.",
  },
  {
    code: "BL",
    title: "Banking Law",
    shortTitle: "Banking Law",
    description:
      "Loan recovery, debt restructuring, cheque-dishonour and security-enforcement matters.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  updated: string;
  readTime: string;
  keyword: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "file-consumer-complaint-e-daakhil",
    title: "How to File a Consumer Complaint Using e-Daakhil",
    excerpt:
      "A practical overview of the documents, steps and jurisdiction questions to consider before filing online.",
    tag: "Consumer Protection",
    date: "24 July 2026",
    updated: "24 July 2026",
    readTime: "6 min read",
    keyword: "how to file consumer complaint e-Daakhil",
    sections: [
      {
        heading: "Before you begin",
        paragraphs: [
          "Collect the invoice, payment proof, written correspondence, warranty terms and a clear chronology. A concise record makes it easier to identify the service deficiency or unfair trade practice being alleged.",
          "Confirm the appropriate commission by considering the value of the goods or services paid for and the territorial connection to the dispute. Jurisdiction can change the correct filing destination.",
        ],
      },
      {
        heading: "Preparing the online filing",
        paragraphs: [
          "Create an account on the official e-Daakhil platform, complete the complainant and opposite-party details, and upload the complaint with supporting documents in the requested format. Relief should be stated precisely.",
          "Review every uploaded document before payment and submission. Keep the acknowledgement and filing reference available for future correspondence.",
        ],
      },
    ],
  },
  {
    slug: "consumer-refund-rights-india",
    title: "Your Rights When a Company Refuses a Refund",
    excerpt:
      "What the Consumer Protection Act, 2019 may offer when a refund request is rejected or ignored.",
    tag: "Consumer Protection",
    date: "18 July 2026",
    updated: "18 July 2026",
    readTime: "5 min read",
    keyword: "company refusing refund consumer rights India",
    sections: [
      {
        heading: "Start with the transaction record",
        paragraphs: [
          "The contract, invoice, advertised promise and refund policy form the starting point. Save screenshots and correspondence before online information changes.",
          "A carefully drafted written demand can resolve some disputes and establishes a useful record if formal proceedings become necessary.",
        ],
      },
      {
        heading: "Choosing the next step",
        paragraphs: [
          "Depending on the facts, a consumer may consider a grievance portal, mediation or a complaint before the appropriate consumer commission. Limitation and jurisdiction should be checked early.",
        ],
      },
    ],
  },
  {
    slug: "madrid-protocol-trademark-registration",
    title: "International Trademark Registration Through the Madrid Protocol",
    excerpt:
      "How one international application can support brand protection across selected member jurisdictions.",
    tag: "Intellectual Property",
    date: "10 July 2026",
    updated: "10 July 2026",
    readTime: "7 min read",
    keyword: "Madrid Protocol trademark registration India",
    sections: [
      {
        heading: "The basic structure",
        paragraphs: [
          "An applicant uses a qualifying national application or registration as the basis for an international filing and designates the member jurisdictions where protection is sought.",
          "The system centralises filing administration, but each designated office still applies its own substantive trademark law.",
        ],
      },
      {
        heading: "Plan before designating markets",
        paragraphs: [
          "Goods and services, mark ownership, clearance searches, business priorities and enforcement plans should be reviewed before filing. A broad list of designations is not always the most efficient strategy.",
        ],
      },
    ],
  },
  {
    slug: "section-138-cheque-bounce",
    title: "Section 138 NI Act: Understanding Cheque-Dishonour Matters",
    excerpt:
      "Key notices, timelines and records commonly involved in cheque-dishonour proceedings.",
    tag: "Banking Law",
    date: "2 July 2026",
    updated: "2 July 2026",
    readTime: "6 min read",
    keyword: "Section 138 cheque bounce procedure India",
    sections: [
      {
        heading: "Timelines matter",
        paragraphs: [
          "Cheque-dishonour matters involve linked statutory steps, including presentation, the bank return memo, a written demand and the filing window. Delay can materially affect available remedies.",
          "Preserve the original cheque, return memo, transaction documents and proof of delivery of the demand notice.",
        ],
      },
      {
        heading: "Look beyond the cheque",
        paragraphs: [
          "The underlying transaction and legally enforceable debt remain important. Contracts, invoices, account statements and correspondence can provide essential context.",
        ],
      },
    ],
  },
  {
    slug: "mutual-consent-divorce-india",
    title: "Mutual Consent Divorce: Procedure, Timeline and Preparation",
    excerpt:
      "A plain-language introduction to settlement terms, joint petitions and the court process.",
    tag: "Family Law",
    date: "25 June 2026",
    updated: "25 June 2026",
    readTime: "6 min read",
    keyword: "mutual consent divorce procedure India",
    sections: [
      {
        heading: "Agreement comes first",
        paragraphs: [
          "The parties should address maintenance, property, custody, pending proceedings and implementation details with care. Ambiguous settlement language can create later disputes.",
          "The joint petition records the agreed position and is supported by the documents required by the relevant court.",
        ],
      },
      {
        heading: "Court stages",
        paragraphs: [
          "The process generally involves statements before the court and a later stage at which continuing consent is confirmed. The treatment of the intervening period depends on the law and facts.",
        ],
      },
    ],
  },
  {
    slug: "foreign-national-company-incorporation-india",
    title: "Company Incorporation in India by a Foreign National",
    excerpt:
      "An orientation to ownership, documentation, FDI and ongoing compliance considerations.",
    tag: "Corporate Compliance",
    date: "16 June 2026",
    updated: "16 June 2026",
    readTime: "8 min read",
    keyword: "foreign national company incorporation India",
    sections: [
      {
        heading: "Map the proposed business",
        paragraphs: [
          "The activity, ownership structure, investment route and resident-director requirements should be mapped before incorporation documents are prepared.",
          "Sector-specific foreign investment conditions may affect ownership, approvals, reporting and the timing of capital contributions.",
        ],
      },
      {
        heading: "Prepare for ongoing compliance",
        paragraphs: [
          "Incorporation is only the first step. Tax registrations, foreign-investment reporting, accounting, corporate records and operational licences should form part of the launch plan.",
        ],
      },
    ],
  },
];

export type Publication = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  citation: string;
  sections: { heading: string; body: string }[];
};

export const publications: Publication[] = [
  {
    slug: "consumer-protection-digital-economy",
    title: "Evolving Standards of Consumer Protection in the Digital Economy",
    excerpt:
      "A research note on platform transactions, online representations and remedies under India’s consumer-law framework.",
    date: "July 2026",
    citation:
      "Faith Law Firm, “Evolving Standards of Consumer Protection in the Digital Economy” (Research Note, July 2026).",
    sections: [
      {
        heading: "Abstract",
        body: "Digital transactions compress advertising, contracting, payment and performance into a single interface. This note identifies the evidentiary and remedial questions that arise when consumer expectations are shaped by platform design.",
      },
      {
        heading: "Key themes",
        body: "The analysis considers online disclosures, dark patterns, intermediary roles, grievance mechanisms and preservation of digital evidence. It is intended as an issue map rather than advice on any individual dispute.",
      },
    ],
  },
  {
    slug: "arbitration-india-post-2015",
    title: "Arbitration in India After the 2015 Amendments",
    excerpt:
      "A concise analysis of efficiency, interim relief and judicial intervention in the modern arbitration framework.",
    date: "June 2026",
    citation:
      "Faith Law Firm, “Arbitration in India After the 2015 Amendments” (Research Note, June 2026).",
    sections: [
      {
        heading: "Abstract",
        body: "India’s arbitration reforms sought to reduce delay, support tribunal autonomy and narrow avoidable court intervention. Their practical effect depends on clause drafting, institutional choices and procedural discipline.",
      },
      {
        heading: "Key themes",
        body: "This note surveys tribunal appointment, interim measures, timelines, costs and enforcement as planning considerations for commercial parties.",
      },
    ],
  },
  {
    slug: "trademark-dilution-online-impersonation",
    title: "Trademark Dilution and Online Brand Impersonation",
    excerpt:
      "Emerging brand-protection challenges across domains, social platforms and online marketplaces.",
    date: "May 2026",
    citation:
      "Faith Law Firm, “Trademark Dilution and Online Brand Impersonation” (Research Note, May 2026).",
    sections: [
      {
        heading: "Abstract",
        body: "Online impersonation can fragment across domains, profiles, advertising accounts and marketplace listings. Effective response requires rapid evidence preservation and a coordinated platform, contractual and legal strategy.",
      },
      {
        heading: "Key themes",
        body: "The note addresses account attribution, takedown pathways, trademark claims, passing off and the practical value of an organised brand-enforcement record.",
      },
    ],
  },
  {
    slug: "fdi-company-incorporation-primer",
    title: "FDI and Company Incorporation: A Primer for Non-Residents",
    excerpt:
      "A planning framework for foreign founders considering an Indian company and its compliance obligations.",
    date: "April 2026",
    citation:
      "Faith Law Firm, “FDI and Company Incorporation: A Primer for Non-Residents” (Research Note, April 2026).",
    sections: [
      {
        heading: "Abstract",
        body: "The appropriate entry structure depends on business activity, investment restrictions, tax and governance. Early sequencing reduces avoidable documentation and reporting issues.",
      },
      {
        heading: "Key themes",
        body: "This primer maps incorporation, foreign investment, banking, beneficial ownership and recurring corporate-compliance considerations.",
      },
    ],
  },
];
