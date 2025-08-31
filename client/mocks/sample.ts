export type Borrower = {
  id: string;
  name: string;
  loan_type: string;
  amount: number;
  status: string;
};

export type BorrowerDetail = {
  id: string;
  name: string;
  email: string;
  phone: string;
  loan_amount: number;
  status: string;
  employment: string;
  income: number;
  existing_loan: number;
  credit_score: number;
  source_of_funds: string;
  risk_signal: string;
  ai_flags: string[];
};

export const pipeline = {
  new: [
    { id: "1", name: "Sarah Dunn", loan_type: "Home Loan", amount: 300000, status: "Renew" },
    { id: "3", name: "Lisa Carter", loan_type: "Home Loan", amount: 450000, status: "New" },
  ] as Borrower[],
  in_review: [
    { id: "2", name: "Alan Matthews", loan_type: "Personal Loan", amount: 20000, status: "In Review" },
  ] as Borrower[],
  approved: [] as Borrower[],
};

export const borrowerDetail: BorrowerDetail = {
  id: "1",
  name: "Sarah Dunn",
  email: "sarah.dunn@example.com",
  phone: "(355)123-4557",
  loan_amount: 300000,
  status: "In Review",
  employment: "At Tech Company",
  income: 120000,
  existing_loan: 240000,
  credit_score: 720,
  source_of_funds: "Declared",
  risk_signal: "Missing Source of Funds declaration",
  ai_flags: [
    "Income Inconsistent with Bank statements",
    "High Debt-to-Income Ratio detected",
  ],
};

export const borrowerDetails: Record<string, BorrowerDetail> = {
  "1": borrowerDetail,
  "2": {
    id: "2",
    name: "Alan Matthews",
    email: "alan.matthews@example.com",
    phone: "(355)987-2231",
    loan_amount: 20000,
    status: "In Review",
    employment: "Self‑employed",
    income: 85000,
    existing_loan: 5000,
    credit_score: 690,
    source_of_funds: "Savings",
    risk_signal: "High utilization on revolving credit",
    ai_flags: [
      "Recent credit inquiries detected",
      "Debt-to-Income above policy threshold",
    ],
  },
  "3": {
    id: "3",
    name: "Lisa Carter",
    email: "lisa.carter@example.com",
    phone: "(355)442-1180",
    loan_amount: 450000,
    status: "New",
    employment: "Senior Analyst",
    income: 140000,
    existing_loan: 120000,
    credit_score: 745,
    source_of_funds: "Declared",
    risk_signal: "None",
    ai_flags: [
      "No adverse signals",
    ],
  },
};

export const brokerInfo = {
  name: "Robert Turner",
  deals: 16,
  approval_rate: "75%",
  pending: 7660,
};

export const onboarding = {
  steps: [
    "Deal Intake",
    "IDV & Credit Check",
    "Document Upload",
    "AI Validation",
    "Credit Committee",
    "Approval & Docs",
    "Funder Syndication",
  ],
};

export type Endpoint = {
  name: string;
  method: "GET" | "POST";
  url: string;
  // Using unknown allows each response to keep its own shape
  response: unknown;
};

export const endpoints: Endpoint[] = [
  {
    name: "Get Borrower Pipeline",
    method: "GET",
    url: "/api/borrowers/pipeline",
    response: {
      new: pipeline.new,
      in_review: pipeline.in_review,
      approved: pipeline.approved,
    },
  },
  {
    name: "Get Borrower Detail",
    method: "GET",
    url: "/api/borrowers/{id}",
    response: borrowerDetail,
  },
  {
    name: "Request Documents",
    method: "POST",
    url: "/api/borrowers/{id}/request-documents",
    response: { success: true, message: "Documents requested." },
  },
  {
    name: "Send to Valuer",
    method: "POST",
    url: "/api/borrowers/{id}/send-valuer",
    response: { success: true, message: "Valuer notified." },
  },
  {
    name: "Approve Loan",
    method: "POST",
    url: "/api/borrowers/{id}/approve",
    response: { success: true, message: "Loan approved." },
  },
  {
    name: "Escalate to Credit Committee",
    method: "POST",
    url: "/api/borrowers/{id}/escalate",
    response: { success: true, message: "Escalated to Credit Committee." },
  },
  {
    name: "Get Broker Info",
    method: "GET",
    url: "/api/broker/{id}",
    response: brokerInfo,
  },
  {
    name: "Get Onboarding Workflow",
    method: "GET",
    url: "/api/onboarding/workflow",
    response: onboarding,
  },
];
