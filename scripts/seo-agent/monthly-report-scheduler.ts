import { sendMonthlyReport } from "./monthly-report";

const BANK_HOLIDAYS_URL = "https://www.gov.uk/bank-holidays.json";

interface BankHolidayEvent {
  title: string;
  date: string;
}

interface BankHolidayResponse {
  "england-and-wales": {
    division: string;
    events: BankHolidayEvent[];
  };
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result: { to?: string; force?: boolean } = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--to" && args[i + 1]) {
      result.to = args[++i];
    } else if (arg === "--force") {
      result.force = true;
    }
  }

  return result;
}

function toDateKey(date: Date): string {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

async function getEnglandBankHolidaySet(): Promise<Set<string>> {
  const response = await fetch(BANK_HOLIDAYS_URL);
  if (!response.ok) throw new Error(`Failed to fetch bank holidays: HTTP ${response.status}`);
  const data = (await response.json()) as BankHolidayResponse;
  return new Set(data["england-and-wales"].events.map((event) => event.date));
}

async function getScheduledSendDate(now: Date): Promise<Date> {
  const holidaySet = await getEnglandBankHolidaySet();
  const target = new Date(now.getFullYear(), now.getMonth(), 25, 12, 0, 0);
  while (isWeekend(target) || holidaySet.has(toDateKey(target))) {
    target.setDate(target.getDate() - 1);
  }
  return target;
}

async function main() {
  const { to, force } = parseArgs();
  const now = new Date();
  const scheduledDate = await getScheduledSendDate(now);
  const todayKey = toDateKey(now);
  const scheduledKey = toDateKey(scheduledDate);

  if (!force && todayKey !== scheduledKey) {
    console.log(`Monthly report not due today. Today=${todayKey}, scheduled=${scheduledKey}`);
    return;
  }

  await sendMonthlyReport({ to, subjectPrefix: "[MONTHLY SEO CUSTOMER REPORT]" });
}

main().catch((error) => {
  console.error("Monthly report scheduler failed:", error);
  process.exit(1);
});
