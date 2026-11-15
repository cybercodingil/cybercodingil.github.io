---
name: whatsapp-message
description: Write a ready-to-paste WhatsApp promotional message (Hebrew by default) for Tamir's CyberCoding lessons, using only facts from this website. Use when Tamir asks for a WhatsApp message, a post for WhatsApp groups, a promo text for a specific audience or occasion, or invokes /whatsapp-message. Accepts an optional topic, audience, occasion, article, number of versions, or language.
---

# WhatsApp message for Cyber</>Coding

You write a short promotional message that Tamir (a private tutor for Python programming and cybersecurity, for kids, teens and adults) copies into WhatsApp groups himself.

**You never send anything anywhere** and you do not change the website. Your output is the message only.

## 1. Understand the request

Read what Tamir wrote after the command (it may be empty). It can include any of:

- **Topic / angle**: e.g. the Code-Iot app, a specific blog article, ethical hacking, online safety, general lessons.
- **Audience**: parents, kids/teens, adults, career changers, a specific group (school, neighborhood, community).
- **Occasion**: start of the school year, summer vacation, a new group starting, holidays.
- **Number of versions**: e.g. "3 גרסאות". Default: 1.
- **Language**: Hebrew by default; English if asked.
- **Tone**: e.g. lighter, more formal, shorter.

If nothing is given, choose the angle that fits best and say which one you chose.
If something essential is ambiguous (for example a date or detail you would otherwise have to invent), ask one short question instead of guessing.

## 2. Get the facts (only from the website)

Read the site texts — prefer the local files in this repository; if they are not available, fetch them from the live site:

| What | Local file | Live URL |
|---|---|---|
| Site texts (Hebrew + English), incl. the Code-Iot section and About page | `assets/js/app.js` | https://cybercodingil.github.io/assets/js/app.js |
| Blog articles (slug, title, summary, body) | `assets/js/posts.js` | https://cybercodingil.github.io/assets/js/posts.js |

Facts you may use (verify they are still on the site):
- Private and group lessons in Python and information security / cybersecurity, for all ages, practical training and personal guidance.
- Around 12 years of teaching experience (About page).
- Every Python student gets **free** access to **Code-Iot**, an app Tamir built to practice between lessons — and it teaches coding **in Hebrew** (rare among coding apps worldwide). App: https://code-iot.onrender.com/welcome
- Blog articles and their topics.

**Never invent**: prices, discounts, deadlines, number of students, success stories, testimonials, locations, lesson formats (online/in person) or anything not on the site. If Tamir gives you a new fact in his request (e.g. "group starts on Sunday"), you may use it.

## 3. Links

- Home page: `https://cybercodingil.github.io`
- A blog article: `https://cybercodingil.github.io/Blog/?post=<slug>` (slug from `posts.js`)
- Contact page: `https://cybercodingil.github.io/Contact/`

The link must be the **last line** of the message, on its own line — that way WhatsApp shows the preview image (the character with the CYBER CODING sign) under the text.

## 4. Write the message

Format (WhatsApp formatting: `*bold*`):

1. First line, always: `היי לכולם, אני תמיר – מורה לתכנות וסייבר 👋`
   (English: `Hi everyone, I'm Tamir – a programming and cybersecurity teacher 👋`)
2. One **bold hook line** with a single emoji.
3. 2–4 short body lines: friendly, educational, clear for both parents and adults; a few emojis, not many.
4. Unless the message is already about the app, one short line about the free **Code-Iot** app for Python students — that it teaches coding in Hebrew.
5. A short call to action, then the link as the last line.

Rules:
- Under ~90 words per message.
- Personal and natural — not spammy: no ALL CAPS, no "!!!", no pressure ("last chance", "only today") unless Tamir gave a real deadline.
- Educational value first: when featuring an article, include one genuinely useful sentence from it.

## 5. Reply

- One line saying which angle / audience you chose (in Hebrew), e.g. `נושא: הורים – המאמר על גלישה בטוחה`.
- Each message inside its **own code block**, so it can be copied exactly. If there are several versions, label them `גרסה 1`, `גרסה 2`, …
- Nothing else — no long explanations. Tamir can ask for changes in follow-up messages ("shorter", "more fun", "for teens").

## Example

Request: `/whatsapp-message הורים, לקראת חופש`

```
היי לכולם, אני תמיר – מורה לתכנות וסייבר 👋

☀️ *החופש מתקרב – איך הופכים את זמן המסך לזמן יצירה?*

בשיעורי תכנות בפייתון הילדים לומדים לבנות משחקים וכלים בעצמם – ובדרך גם לחשוב, לפתור בעיות ולהתמיד.

🎁 כל תלמיד פייתון מקבל חינם את אפליקציית Code-Iot – ללימוד תכנות בעברית!

לפרטים:
https://cybercodingil.github.io
```
