# FlowFix Plumbing Dallas - Same Day Booking Page

Live demo: https://flowfix-plumbing-mu.vercel.app

Landing page for a Dallas plumber that sells speed and upfront pricing. Built to turn emergency searches into calls and form leads.

## What this is
A local SEO ready page with one clear promise: your plumber shows up today, price locked before we start. Emergency bar on top, quote ticket on the right, proof below.

## Features for conversion
- Emergency bar with 24/7 call link
- Hero with arrival window and upfront price promise
- Proof row: 90 min response, 4.9 rating, 0 trip fee with repair
- Services: drains, leaks, water heaters, fixtures, sewer
- Promise section, reviews, service areas and FAQ
- Plumber schema markup, sitemap, robots.txt and Open Graph tags

## Lead capture with n8n
The quote form posts JSON to an n8n webhook. `main.js` validates name, phone, ZIP, service and details.

1. In n8n create a Webhook node and copy the Production URL
2. Open `main.js` and set `N8N_WEBHOOK_URL` to your URL
3. Fields sent: fullName, phone, zip, service, urgency, details, page, submittedAt
4. In n8n route to Sheets, SMS, Gmail or your dispatcher
5. Demo mode: if URL still contains example.com it shows a test message without posting

## Tech stack
- Static HTML, CSS in `styles.css`, JS in `main.js`
- Google Fonts: Barlow + Barlow Condensed
- Inline SVG icons, no heavy libraries
- Deployed on Vercel

## Run locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

## Files
- `index.html`: page and quote form
- `styles.css`: styling
- `main.js`: n8n form post and validation
- `pipe.svg`, `favicon.svg`, `og-cover.svg`: visuals
- `sitemap.xml`, `robots.txt`: local SEO

## Want one like this?
I build same day booking pages for trades with n8n automation to Sheets and instant notifications. Great fit for Upwork clients in plumbing, HVAC, electrical and home services.

Live demo again: https://flowfix-plumbing-mu.vercel.app
