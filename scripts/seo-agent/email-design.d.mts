export function renderRunReport(site: {name: string; url: string; blogTrailingSlash?: boolean}, data: any, reportDate?: Date): {html: string; text: string};
export function renderMonthlyReport(site: {name: string; url: string; blogTrailingSlash?: boolean}, runs: any[], reportDays?: number, reportDate?: Date): {html: string; text: string};
export function escapeHtml(value: unknown): string;
