import { renderMonthlyReport } from "./email-design.mjs";
import { pathToFileURL } from "node:url";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "./config";

const TABLE_NAME = "saunders_simmons_runs";
const REPORT_DAYS = 30;
interface RankingRow {
  keyword: string;
  position: number | null;
  previousPosition?: string;
  clicks: number;
  impressions: number;
}

interface Recommendation {
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
}

interface Competitor {
  name: string;
  domain: string;
  totalPages: number;
  recentPages: { url: string; lastmod?: string }[];
}

interface RunRow {
  created_at: string;
  status: "success" | "error";
  trigger_type: "scheduled" | "manual";
  keywords_tracked: number;
  avg_position: number | null;
  total_clicks: number;
  total_impressions: number;
  rankings_data: RankingRow[] | null;
  blog_post_title: string | null;
  blog_post_keyword: string | null;
  blog_post_slug: string | null;
  blog_post_is_refresh: boolean | null;
  links_added: number;
  competitor_data: Competitor[] | null;
  recommendations: Recommendation[] | null;
  session_summary: string;
}

interface MonthlyReportOptions {
  to?: string;
  subjectPrefix?: string;
  reportDays?: number;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result: MonthlyReportOptions = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--to" && args[i + 1]) {
      result.to = args[++i];
    } else if (arg === "--subject-prefix" && args[i + 1]) {
      result.subjectPrefix = args[++i];
    } else if (arg === "--days" && args[i + 1]) {
      result.reportDays = parseInt(args[++i], 10);
    }
  }

  return result;
}

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(url, key);
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}

export function buildHtml(runs: RunRow[], reportDays: number): string {
  return renderMonthlyReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, runs, reportDays).html;
}

export async function sendMonthlyReport(options: MonthlyReportOptions = {}) {
  const recipient = options.to || process.env.REPORT_EMAIL;
  if (!recipient) throw new Error("Missing recipient. Pass --to or set REPORT_EMAIL.");

  const supabase = getSupabaseClient();
  const resend = getResendClient();
  const reportDays = options.reportDays ?? REPORT_DAYS;
  const since = new Date();
  since.setDate(since.getDate() - reportDays);

  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select("created_at,status,trigger_type,keywords_tracked,avg_position,total_clicks,total_impressions,rankings_data,blog_post_title,blog_post_keyword,blog_post_slug,blog_post_is_refresh,links_added,competitor_data,recommendations,session_summary")
    .gte("created_at", since.toISOString())
    .order("created_at", { ascending: true });

  if (error) throw error;
  if (!data || data.length === 0) throw new Error("No report data found for the requested window");

  const monthYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const subjectBase = `${CONFIG.siteName} — Monthly SEO Customer Report — ${monthYear}`;
  const subject = options.subjectPrefix ? `${options.subjectPrefix} ${subjectBase}` : subjectBase;

  const result = await resend.emails.send({
    from: CONFIG.emailFrom,
    to: recipient,
    subject,
    ...renderMonthlyReport({ name: CONFIG.siteName, url: CONFIG.siteUrl }, data as RunRow[], reportDays),
  });

  if (result.error) throw new Error(`Resend error: ${result.error.message}`);

  console.log(JSON.stringify(result, null, 2));
  console.log(`Monthly report sent to ${recipient}`);
}

async function main() {
  const options = parseArgs();
  await sendMonthlyReport(options);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("Monthly report failed:", error);
    process.exit(1);
  });
}
