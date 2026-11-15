# Cyber</>Coding

אתר המורה הפרטי לסייבר ותכנות — גרסה סטטית ל-GitHub Pages (הועבר מ-Base44).
Personal website for private cybersecurity & programming lessons — a static GitHub Pages version of the original Base44 site.

## מבנה / Structure

| Path | Page |
|------|------|
| `index.html` | Home / דף הבית |
| `AboutMe/index.html` | About Me / אודותיי |
| `Blog/index.html` | Blog / בלוג |
| `Contact/index.html` | Contact / צור קשר |
| `assets/js/app.js` | All texts (English + Hebrew), blog posts and page rendering |
| `assets/css/tailwind.css` | Original compiled stylesheet from the Base44 site |
| `assets/css/site.css` | Custom animations (hero image "breathing" effect) |
| `assets/img/` | Images |

No build step — plain HTML/CSS/JS.

## עריכת תוכן / Editing content

- **Texts:** edit the `T` object at the top of `assets/js/app.js` (each section has `en` and `he`).
- **Blog posts:** edit the `BLOG_POSTS` array in `assets/js/app.js` (`language`: `"en"` or `"he"`).
- **Link preview (WhatsApp/Facebook):** `assets/img/share.jpg` (1200×630) and the `og:` tags in each page's `index.html`.
- **Default language:** Hebrew. Visitors' language choice is remembered in their browser.
- **Contact links:** `WHATSAPP_NUMBER`, `FACEBOOK_URL`, `LINKEDIN_URL` at the top of `assets/js/app.js`.

## Contact form

GitHub Pages has no server, so the form sends messages by email through [Formspree](https://formspree.io).
Set `FORMSPREE_FORM_ID` at the top of `assets/js/app.js` to your form ID (the part after `https://formspree.io/f/`).
While it is empty, the form opens WhatsApp with the visitor's details and message pre-filled instead.

## Deploy

1. Merge to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`.

## Preview locally

```bash
python3 -m http.server 8000
```
Then open http://localhost:8000
