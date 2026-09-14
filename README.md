# seedlesslabs.xyz

The website for **Seedless**, the money app for people who get paid in dollars. Hold dollars and stocks, send money to anyone, and pay any Nigerian bank account from one app.

Live at **[www.seedlesslabs.xyz](https://www.seedlesslabs.xyz)**. The app itself lives in [seedless-labs/seedless](https://github.com/seedless-labs/seedless).

## What's here

A static site: plain HTML and one stylesheet, no framework and no build step.

```
public/
  index.html            home
  how-it-works.html     how it works
  features.html         what you can do
  fees.html             what it costs
  faq.html              questions
  claim.html            opens a money link (see below)
  terms.html            terms of use
  privacy.html          privacy policy
  security.html         security policy and how to report an issue
  data-deletion.html    how to delete your data
  assets/site.css       the whole design system: colours, type, layout
  assets/app/           real app screenshots
  assets/partners/      partner logos
  assets/og.png         link preview image (2400×1260)
  sitemap.xml, robots.txt, site.webmanifest, favicons
og-source.html          source for assets/og.png
vercel.json             static hosting, clean URLs, /claim headers
```

URLs are clean (`/fees`, not `/fees.html`), and the site is served on **www**. The bare domain redirects there, so canonical tags, the sitemap and link previews all use `https://www.seedlesslabs.xyz`.

## Run it locally

```bash
cd public
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html`. Locally, open pages with `.html`; clean URLs only work on Vercel.

## Deploy

**Pushing to GitHub does not deploy.** Production goes out with the Vercel CLI from an up-to-date `main`:

```bash
git switch main && git pull
vercel --prod --yes
```

After deploying, check the pages you changed return 200 on `https://www.seedlesslabs.xyz`.

## How changes get in

Every change goes through a branch and a pull request, including one-line fixes. The PR description says what changed and what visitors will notice.

## Design and wording

- **Design system:** everything visual comes from the tokens at the top of `public/assets/site.css`. Seedless blue `#00AEFF`, Night `#0B0F1A` (the app's own dark background), neutrals tinted toward the blue, Bricolage Grotesque for headlines and Inter for text. Legal pages use the `.legal` styles in the same file.
- **Seedless is a money app.** Don't call it a wallet, a neobank or a beta. Say "pay a bank" or "payout", never "cash out".
- **Don't name the payouts partner.** Call it a licensed payments partner.
- **Audits:** the only wording is "Seedless orchestrates audited infrastructure. Seedless itself has not been audited."
- **Every figure on the site must be true today.** No invented user counts, and no features that aren't in the app yet.

## The claim page

`/claim` is where a Seedless money link opens: `https://www.seedlesslabs.xyz/claim#<key>`. The key sits in the URL fragment, which browsers never send to a server. The page only checks that the link is whole, then offers **Open in Seedless** (hands the same fragment to the app) or **Get Seedless**. It is not indexed, not cached and sends no referrer. Never add analytics or third-party scripts to it.

## Link previews and SEO

Each page carries its own title, description, canonical URL, Open Graph and Twitter card tags, plus structured data (Organization, WebSite, MobileApplication, and FAQPage on the home and FAQ pages). When you add a page, copy the head from an existing one, change those fields, and add it to `sitemap.xml`.

To change the preview image, edit `og-source.html` and render it at 2400×1260 (1200×630 at 2x) to `public/assets/og.png`.

## Leftovers

`public/assets/tailwind.css`, `tailwind.config.js`, `tailwind-input.css` and a few old images in `public/assets/` are from the previous design. No page uses them.

## Contact

Security issues: see [seedlesslabs.xyz/security](https://www.seedlesslabs.xyz/security). Everything else: francis@seedlesslabs.xyz.

## License

MIT, see [LICENSE](LICENSE). The Seedless name, logo and brand assets are not covered by the licence.
