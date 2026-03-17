import { pathToFileURL } from "node:url";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "./config";

const TABLE_NAME = "saunders_simmons_runs";
const REPORT_DAYS = 30;
const CORE_KEYWORDS = [
  "web design yeovil",
  "seo services yeovil",
  "web design somerset",
  "seo agency yeovil",
  "app development somerset",
];

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

function formatDelta(current: number | null, previous: number | null, decimals = 1): string {
  if (current === null || previous === null) return "—";
  const diff = current - previous;
  const abs = Math.abs(diff).toFixed(decimals);
  if (diff === 0) return "No change";
  return diff < 0 ? `Improved by ${abs}` : `Down by ${abs}`;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-GB");
}

function getRankingMap(rows: RankingRow[] | null): Map<string, RankingRow> {
  return new Map((rows || []).map((row) => [row.keyword.toLowerCase(), row]));
}

function getKeywordMovement(first: RunRow, latest: RunRow) {
  const firstMap = getRankingMap(first.rankings_data);
  const latestMap = getRankingMap(latest.rankings_data);
  const movement: Array<{ keyword: string; start: number; current: number; diff: number }> = [];

  for (const [keyword, current] of latestMap) {
    const previous = firstMap.get(keyword);
    if (!previous || previous.position === null || current.position === null) continue;
    const diff = previous.position - current.position;
    if (diff === 0) continue;
    movement.push({ keyword: current.keyword, start: previous.position, current: current.position, diff });
  }

  return {
    improved: movement.filter((i) => i.diff > 0).sort((a, b) => b.diff - a.diff).slice(0, 5),
    declined: movement.filter((i) => i.diff < 0).sort((a, b) => a.diff - b.diff).slice(0, 5),
  };
}

function buildHtml(runs: RunRow[], reportDays: number): string {
  const successfulRuns = runs.filter((run) => run.status === "success");
  if (successfulRuns.length === 0) throw new Error("No successful runs found in the reporting window");

  const first = successfulRuns[0];
  const latest = successfulRuns[successfulRuns.length - 1];
  const publishedPosts = successfulRuns.filter((run) => run.blog_post_title);
  const uniquePosts = Array.from(
    new Map(publishedPosts.map((run) => [run.blog_post_slug || `${run.blog_post_title}-${run.created_at}`, run])).values()
  );
  const latestRankings = latest.rankings_data || [];
  const indexedKeywords = latestRankings.filter((row) => row.position !== null);
  const pageOneKeywords = indexedKeywords.filter((row) => (row.position || 0) <= 10);
  const pageTwoKeywords = indexedKeywords.filter((row) => (row.position || 0) > 10 && (row.position || 0) <= 20);
  const linksAdded = successfulRuns.reduce((sum, run) => sum + (run.links_added || 0), 0);
  const currentRecommendations = (latest.recommendations || []).slice(0, 3);
  const activeCompetitors = (latest.competitor_data || [])
    .filter((comp) => comp.recentPages && comp.recentPages.length > 0)
    .sort((a, b) => b.recentPages.length - a.recentPages.length)
    .slice(0, 3);
  const movement = getKeywordMovement(first, latest);
  const coreKeywordRows = latestRankings
    .filter((row) => CORE_KEYWORDS.includes(row.keyword.toLowerCase()))
    .sort((a, b) => (a.position ?? 999) - (b.position ?? 999));
  const monthYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  const metricsNote = "Performance metrics below are based on the tracked keyword set logged by the SEO agent, not full-site Search Console traffic.";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f3f4f6;padding:24px;color:#1f2937;">
  <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    <div style="background:#1d4ed8;padding:24px 28px;color:#ffffff;">
      <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.8;">Monthly SEO Customer Report</div>
      <h1 style="margin:8px 0 6px;font-size:24px;line-height:1.25;">${CONFIG.siteName} Monthly SEO Report</h1>
      <p style="margin:0;font-size:14px;opacity:0.85;">Last ${reportDays} days · ${monthYear}</p>
    </div>
    <div style="padding:28px;">
      <p style="margin-top:0;font-size:15px;line-height:1.65;">Here is your monthly SEO update for ${CONFIG.siteName}. This covers content published, tracked keyword movement, competitor monitoring, and the next actions being prioritised.</p>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin:24px 0;">
        <div style="flex:1;min-width:150px;padding:14px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc;">
          <div style="font-size:24px;font-weight:700;color:#111827;">${successfulRuns.length}</div>
          <div style="font-size:12px;color:#6b7280;">SEO runs completed</div>
        </div>
        <div style="flex:1;min-width:150px;padding:14px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc;">
          <div style="font-size:24px;font-weight:700;color:#111827;">${uniquePosts.length}</div>
          <div style="font-size:12px;color:#6b7280;">Blogs published / refreshed</div>
        </div>
        <div style="flex:1;min-width:150px;padding:14px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc;">
          <div style="font-size:24px;font-weight:700;color:#111827;">${pageOneKeywords.length}</div>
          <div style="font-size:12px;color:#6b7280;">Tracked keywords on page 1</div>
        </div>
        <div style="flex:1;min-width:150px;padding:14px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc;">
          <div style="font-size:24px;font-weight:700;color:#111827;">${pageTwoKeywords.length}</div>
          <div style="font-size:12px;color:#6b7280;">Tracked keywords on page 2</div>
        </div>
      </div>
      <h2 style="margin:28px 0 12px;font-size:18px;color:#111827;">Performance Snapshot</h2>
      <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#6b7280;">Tracked keyword average position</td><td style="padding:8px 0;text-align:right;font-weight:600;">${first.avg_position ?? "—"} → ${latest.avg_position ?? "—"} (${formatDelta(latest.avg_position, first.avg_position)})</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Tracked keyword clicks</td><td style="padding:8px 0;text-align:right;font-weight:600;">${formatNumber(first.total_clicks)} → ${formatNumber(latest.total_clicks)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Tracked keyword impressions</td><td style="padding:8px 0;text-align:right;font-weight:600;">${formatNumber(first.total_impressions)} → ${formatNumber(latest.total_impressions)}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Tracked keywords currently indexed</td><td style="padding:8px 0;text-align:right;font-weight:600;">${indexedKeywords.length} / ${latest.keywords_tracked}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Internal links added this month</td><td style="padding:8px 0;text-align:right;font-weight:600;">${linksAdded}</td></tr>
        </table>
        <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">${metricsNote}</p>
      </div>
      <h2 style="margin:28px 0 12px;font-size:18px;color:#111827;">Blogs Published This Month</h2>
      <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        <ul style="margin:0;padding-left:18px;">
          ${uniquePosts.length > 0
            ? uniquePosts.slice(-12).map((run) => `<li style="margin:0 0 10px;font-size:14px;line-height:1.5;"><strong>${run.blog_post_title}</strong><br><span style="color:#6b7280;">${formatDate(run.created_at)} · target keyword: ${run.blog_post_keyword}</span></li>`).join("")
            : `<li style="font-size:14px;">No blog work was published during this reporting window.</li>`}
        </ul>
      </div>
      <h2 style="margin:28px 0 12px;font-size:18px;color:#111827;">Core Keyword Positions</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
        <thead><tr style="background:#f8fafc;">
          <th style="padding:10px 12px;text-align:left;border-bottom:1px solid #e5e7eb;">Keyword</th>
          <th style="padding:10px 12px;text-align:left;border-bottom:1px solid #e5e7eb;">Current position</th>
          <th style="padding:10px 12px;text-align:center;border-bottom:1px solid #e5e7eb;">Clicks</th>
          <th style="padding:10px 12px;text-align:center;border-bottom:1px solid #e5e7eb;">Impressions</th>
        </tr></thead>
        <tbody>
          ${coreKeywordRows.length > 0
            ? coreKeywordRows.map((row) => `<tr><td style="padding:10px 12px;border-bottom:1px solid #f3f4f6;">${row.keyword}</td><td style="padding:10px 12px;border-bottom:1px solid #f3f4f6;font-weight:600;">${row.position ?? "Not indexed yet"}</td><td style="padding:10px 12px;border-bottom:1px solid #f3f4f6;text-align:center;">${row.clicks}</td><td style="padding:10px 12px;border-bottom:1px solid #f3f4f6;text-align:center;">${row.impressions}</td></tr>`).join("")
            : `<tr><td colspan="4" style="padding:12px;text-align:center;color:#6b7280;">No core keyword data available yet.</td></tr>`}
        </tbody>
      </table>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:28px;">
        <div style="flex:1;min-width:300px;">
          <h2 style="margin:0 0 12px;font-size:18px;color:#111827;">Notable Movement</h2>
          <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
            <h3 style="margin:0 0 10px;font-size:14px;color:#166534;">Improving keywords</h3>
            <ul style="margin:0 0 14px;padding-left:18px;">
              ${movement.improved.length > 0
                ? movement.improved.map((item) => `<li style="margin:0 0 8px;font-size:14px;">${item.keyword}: ${item.start} → ${item.current} (up ${item.diff.toFixed(1)})</li>`).join("")
                : `<li style="font-size:14px;">No major upward movement recorded in the current window.</li>`}
            </ul>
            <h3 style="margin:0 0 10px;font-size:14px;color:#991b1b;">Keywords to watch</h3>
            <ul style="margin:0;padding-left:18px;">
              ${movement.declined.length > 0
                ? movement.declined.map((item) => `<li style="margin:0 0 8px;font-size:14px;">${item.keyword}: ${item.start} → ${item.current} (down ${Math.abs(item.diff).toFixed(1)})</li>`).join("")
                : `<li style="font-size:14px;">No significant declines recorded in the current window.</li>`}
            </ul>
          </div>
        </div>
        <div style="flex:1;min-width:300px;">
          <h2 style="margin:0 0 12px;font-size:18px;color:#111827;">What We're Doing Next</h2>
          <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
            ${currentRecommendations.length > 0
              ? currentRecommendations.map((rec) => `<div style="margin-bottom:14px;"><div style="font-size:11px;text-transform:uppercase;color:#6b7280;letter-spacing:0.05em;">${rec.priority} · ${rec.category}</div><div style="font-size:14px;font-weight:600;margin:4px 0 4px;">${rec.title}</div><div style="font-size:13px;line-height:1.55;color:#4b5563;">${rec.description}</div></div>`).join("")
              : `<p style="margin:0;font-size:14px;color:#6b7280;">No strategic recommendations were logged in the current window.</p>`}
          </div>
        </div>
      </div>
      <h2 style="margin:28px 0 12px;font-size:18px;color:#111827;">Competitor Monitoring</h2>
      <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
        ${activeCompetitors.length > 0
          ? activeCompetitors.map((comp) => `<div style="margin-bottom:12px;"><div style="font-size:14px;font-weight:600;">${comp.name}</div><div style="font-size:13px;color:#6b7280;">${comp.domain} · ${comp.totalPages} pages indexed · ${comp.recentPages.length} recent/updated pages tracked</div></div>`).join("")
          : `<p style="margin:0;font-size:14px;color:#6b7280;">No significant competitor publishing activity was logged this month.</p>`}
      </div>
      <h2 style="margin:28px 0 12px;font-size:18px;color:#111827;">Latest Summary</h2>
      <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#f8fafc;font-size:14px;line-height:1.6;color:#4b5563;">${latest.session_summary}</div>
    </div>
  </div>
</body>
</html>`;
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
    html: buildHtml(data as RunRow[], reportDays),
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
