# Truelove Financial Services: website redesign

A concept redesign of [truelovefinancialservices.com](https://www.truelovefinancialservices.com/) for Truelove Financial Services, a tax preparation and financial advising business founded by Sheray Truelove. Plain HTML, CSS and JavaScript. Host the repository root on any static host (GitHub Pages, Netlify, Cloudflare Pages, Vercel).

The site is one English (US) page with these sections: hero, services, why choose us, how it works (with a "what to bring" checklist), about Sheray, refer a friend ($50), and contact. The enquiry form opens the visitor's email app, addressed to truelovefinancialservices@gmail.com. Privacy policy and accessibility statement links go to the existing pages on the live site.

Pages are `noindex`, `robots.txt` blocks crawlers, and the page has a "concept" stripe while this is a proposal. Remove all three before going live.

## Fixes compared with the current site

- Every email button on the live site goes to `info@mysite.com`, a Wix template placeholder. Here, all email links and the form go to truelovefinancialservices@gmail.com.
- The contact form no longer asks for a birthday or for the email address twice. It also tells visitors not to send their Social Security number through it.
- Each service has a description and a link that preselects that service in the form. On the live site, "Learn More" only goes back to the homepage.
- The phone number is in the header and in the hero, and it can be tapped to call.
- Fixed typos: "Treament" and "Recieve".

## To confirm with the client

- The service descriptions, the "why choose us" lines and the four steps are new copy based on the existing headings. Check that they're accurate.
- The terms of the $50 referral offer.
- Any address, opening hours or credentials (PTIN, EA, CPA) they'd like to show. None appear on the current site, so none are shown here.
- The stats: 1,000+ clients and 99% satisfaction come from the current site. "2 years of experience" was left out in favour of "year-round support".

## Pitch

- `assets/pitch/truelove-before-after-0{1,2,3}.jpg`: phone before/after cards (first impression, services, getting in touch), 1200×1200

## Run locally

```bash
python3 -m http.server 5180
```

## Files

- `index.html`: the page
- `assets/css/style.css`: styles (colour tokens at the top: brand green, blush pink and gold from the logo)
- `assets/js/main.js`: mobile menu, scroll reveal, service preselect, and the enquiry form
- `assets/img/`: logo, mark and favicon (cropped from the current logo), and a cut-out of Sheray's photo from the current site
