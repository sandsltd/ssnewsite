import { renderRunReport } from "./email-design.mjs";
import { Resend } from "resend";
import { CONFIG } from "./config";
import type { Recommendation } from "./strategy";
import type { CompetitorReport } from "./competitors";

interface RankingChange {
  keyword: string;
  position: number | null;
  previousPosition: string;
  clicks: number;
  impressions: number;
}

interface EmailReportData {
  rankings: RankingChange[];
  blogPost: {
    slug?: string;
    title: string;
    targetKeyword: string;
    prUrl: string | null;
    isRefresh: boolean;
  } | null;
  competitorReport: CompetitorReport;
  recommendations: Recommendation[];
  linksAdded: number;
  sessionSummary: string;
}

export function buildHtml(data: EmailReportData, reportDate = new Date()): string {
  return renderRunReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, data, reportDate).html;
}

export async function sendReport(data: EmailReportData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const reportEmail = process.env.REPORT_EMAIL;

  if (!apiKey || !reportEmail) {
    console.warn("Missing RESEND_API_KEY or REPORT_EMAIL \u2014 skipping email.");
    return;
  }

  const resend = new Resend(apiKey);
  const monthYear = new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const result = await resend.emails.send({
    from: CONFIG.emailFrom,
    to: reportEmail,
    subject: `${CONFIG.emailSubjectPrefix} \u2014 ${monthYear}`,
    ...renderRunReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, data),
  });

  console.log("Resend response:", JSON.stringify(result));
  console.log(`Report email sent to ${reportEmail}`);
}
