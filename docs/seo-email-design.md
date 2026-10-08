# SEO report emails

Updated 8 October 2026. Run and monthly reports use the shared `scripts/seo-agent/email-design.mjs` renderer, with client identity, a navy header, warm accents, readable cards and email-safe tables. CSS and a narrow-screen layout support desktop and mobile clients; the design requires no images or JavaScript.

Completed content and a direct article link appear first when an article was published. Maintenance reports show completed work instead. Three query metrics, three next priorities and up to six observed queries keep the email readable. The dashboard links to full results; a plain-text alternative retains the detailed query list. Monthly reports count distinct articles and separate completed runs from query snapshots.

Metrics describe the tracked query set, rather than full-site traffic or monthly growth. Missing impressions do not establish indexing status. Competitor sitemap observations are not verified article counts. Dynamic copy is escaped and links accept only HTTP or HTTPS. Existing recipients, sender, editorial restrictions, publication cooldowns and monthly schedules continue to apply.

Keep the shared renderer identical across active SEO workers when changing the design. Preview both a publication and a maintenance report, plus a monthly report, on a narrow screen before sending a labelled design test to the configured SEO mailbox. A design test must not advance publication or monthly-report state.
