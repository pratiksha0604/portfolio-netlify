# Portfolio SEO - Pratiksha Bhende

SEO-enhanced portfolio site (4 pages) with unique metadata, Open Graph tags, JSON-LD and a logical heading hierarchy.

## Run
Open `index.html` in a browser (or VS Code -> Live Server).

## What was done (task steps)
1. **Title + meta description** - unique for every page (`index`, `about`, `projects`, `contact`), plus canonical link.
2. **Open Graph** - `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200x630 in `images/og-image.png`), plus Twitter Card tags.
3. **JSON-LD** - `Person` (author) + `WebSite` on the home page; `ProfilePage`, `CollectionPage`, `ContactPage` on the other pages.
4. **Headings** - exactly one `h1` per page, then `h2` -> `h3` in order, no skipped levels.
5. **Validation** - see below.

Extras: `sitemap.xml`, `robots.txt`, skip link, ARIA landmarks, validated contact form.

## Before validating: set your real URL
All URLs use `https://pratiksha0604.github.io/portfolio`. If your GitHub Pages URL differs, find/replace it in every `.html`, `sitemap.xml` and `robots.txt`.

## Step 5 - Validate
Google's old "Structured Data Testing Tool" has been retired, so use its replacements (same purpose):
- Schema.org validator: https://validator.schema.org (paste a page URL or the code)
- Google Rich Results Test: https://search.google.com/test/rich-results

Open Graph preview: https://www.opengraph.xyz

Fix any warnings it reports (usually just a missing optional field), then re-test and note "0 errors, 0 warnings" in your submission.

## Push to GitHub
```
git init
git add .
git commit -m "Add SEO enhancements"
git branch -M main
git remote add origin https://github.com/pratiksha0604/portfolio.git
git push -u origin main
```
Then enable GitHub Pages (Settings -> Pages -> main / root).

## Live Site
https://pratiksha0604-portfolio.netlify.app

