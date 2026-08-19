# SEO setup (vercel_export)

Every page has, in its static `<head>` between `<!-- seo:start -->` and `<!-- seo:end -->`:
title, meta description, keywords, canonical, robots (`max-image-preview:large`,
`max-snippet:-1`), OpenGraph, Twitter card, and JSON-LD structured data.

Structured data by page type
- Home: Organization + ProfessionalService + WebSite
- Service pages: Service (+ BreadcrumbList)
- Case studies: CreativeWork (+ BreadcrumbList)
- Insights: BlogPosting with author, datePublished, articleSection, timeRequired
- FAQ pages + /faqs: FAQPage (question/answer pairs — the format Google and AI
  assistants quote from directly)
- About: AboutPage

Clean URLs
- All internal links are extensionless and root-relative (`/about`, `/insight-agentic-ai`).
- `vercel.json` sets `cleanUrls: true` and `trailingSlash: false`, so Vercel serves
  `about.html` at `/about` and 301-redirects any legacy `/about.html` request.
- Canonicals match those clean URLs exactly.

Also included: `sitemap.xml` (all indexable pages), `robots.txt` (explicitly allows
AI/answer-engine crawlers: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
Google-Extended, Applebot-Extended, Bingbot and others), and
`assets/social-thumbnail.png` as the OG/Twitter share image.

Maintenance
- `../seo-map.json` holds the url/title/description for every page — the source of
  truth if the export is regenerated. Re-run the injection against it after any
  re-export so metadata isn't lost.
- After deploy: submit `https://studiosoren.com/sitemap.xml` in Google Search Console
  and Bing Webmaster Tools.
