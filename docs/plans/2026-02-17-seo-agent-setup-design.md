# Saunders Simmons — SEO Agent Setup Design

## Business Context

- **Business**: Saunders Simmons Ltd — web design, SEO, software & app development
- **Location**: 15 Oxford Road, Pen Mill Trading Estate, Yeovil, BA21 5HR
- **URL**: `https://www.saunders-simmons.co.uk`
- **Repo**: `sandsltd/ssnewsite`
- **Slug**: `saunders-simmons`
- **Supabase table**: `saunders_simmons_runs`

## Architecture

Follow the PaperRoute MDX pattern (proven across 5 sites). The SEO agent runs weekly via GitHub Actions, checking rankings, generating blog content, adding internal links, tracking competitors, and sending email reports.

### Content Pillars

| Pillar | Topics |
|--------|--------|
| `web-design` | Web design, WordPress, UI/UX, responsive design, accessibility |
| `seo-marketing` | SEO, digital marketing, content strategy, local SEO, analytics |
| `software-development` | Custom software, app development, APIs, cloud, automation |

### Image Pool (50 images, 8 categories)

| Category | Images | Patterns |
|----------|--------|----------|
| coding | 01-05 | coding, developer, programming, software |
| infrastructure | 06, 46 | server, hosting, cloud, infrastructure |
| workspace | 07-12, 47, 50 | workspace, office, desk, laptop |
| design | 13-15 | wireframe, design, UX, UI, prototype |
| meetings | 16-24 | meeting, team, consultation, client |
| analytics | 25-28 | analytics, data, SEO, metrics, graphs |
| devices | 29-35, 38, 49 | mobile, responsive, device, app |
| business | 36-37, 39-45, 48 | business, professional, typing, calendar |

## What Gets Built

### Phase 1: Market Research & Strategy
- Research competitors in Somerset/UK web design space
- Create `docs/seo-strategy.md` with tiered keywords
- Keyword tiers: primary (web design yeovil, etc.), secondary (service-specific), long-tail (blog targets)
- Competitor watchlist: 4-6 direct competitors

### Phase 2: Blog Infrastructure
- `content/blog/` directory (fresh, separate from existing `/content/posts/`)
- `src/lib/blog.ts` — MDX parsing library (getAllPosts, getPostBySlug, getRelatedPosts)
- `src/app/blog/page.tsx` — blog listing with image thumbnails
- `src/app/blog/[slug]/page.tsx` — post page with hero image, Article schema, related posts, CTA
- Copy 50 WebP images to `public/images/blog/`
- Install `gray-matter`, `next-mdx-remote`

### Phase 3: SEO Agent Pipeline
10 files in `scripts/seo-agent/`:
- `config.ts` — sc-domain:saunders-simmons.co.uk, paths, email settings
- `index.ts` — 6-stage pipeline orchestrator
- `rankings.ts` — GSC API integration, strategy doc parsing
- `content.ts` — Blog generation with Claude, IMAGE_POOL, topic picking
- `competitors.ts` — Sitemap fetching, recent page detection
- `linking.ts` — Internal link insertion via Claude
- `strategy.ts` — SEO recommendation engine
- `publish.ts` — Git commit/push, session log updates
- `email.ts` — Resend HTML email reports
- `supabase.ts` — Run logging, AI note-to-self

### Phase 4: GitHub Actions
- Create `.github/workflows/seo-agent.yml` (weekly Monday 09:00 UTC + random delay)
- Remove existing `blog-generation.yml` workflow

### Phase 5: Portal Registration
- Add `saunders-simmons` to KNOWN_SITES in seo-admin `src/lib/sites.ts`
- Add to SITE_REPOS in seo-admin `src/app/api/strategy/route.ts`
- Create `saunders_simmons_runs` table in Supabase

## What's NOT Changing
- Existing `/blogs/` routes stay accessible (352 old posts remain)
- No changes to `/content/posts/` directory
- No changes to homepage, services, FAQ, portfolio, or other pages
- Existing robots.ts and sitemap.ts stay (sitemap will need blog/ route added)

## Dependencies to Install
- `gray-matter` (already installed)
- `next-mdx-remote`
- `@supabase/supabase-js`
- `resend`
- `googleapis`
- `@anthropic-ai/sdk` (dev)
- `tsx` (dev)
