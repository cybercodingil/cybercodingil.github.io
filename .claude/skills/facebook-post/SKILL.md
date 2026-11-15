---
name: facebook-post
description: Create Facebook content for Tamir's CyberCoding lessons – educational posts, short Facebook articles, lists of post ideas, or short catchy cyber/coding sentences – about cybersecurity and programming only, always ending with a link to the website. Hebrew by default. Use when Tamir asks for a Facebook post, a Facebook article, ideas for Facebook content, a content plan for Facebook, catchy/intriguing cyber or programming sentences (quotes, one-liners, "did you know", for posts, stories or images), or invokes /facebook-post. Accepts an optional mode (post / article / ideas / sentences), topic, audience, blog article, length, number of versions, or language.
---

# Facebook content for Cyber</>Coding

Tamir is a private tutor for Python programming and cybersecurity, for kids, teens and adults. You create Facebook content he publishes himself on his page or profile. The goal: **give real educational value**, build trust, and bring readers to the website.

**You never publish or send anything** and you do not change the website. Your output is the content only.

**Subject matter: cybersecurity and programming only.** If Tamir asks for an unrelated topic, connect it back to cyber/programming or say briefly that this skill covers only those topics.

## 1. Choose the mode

Read what Tamir wrote after the command (it may be empty):

| Mode | Triggered by | What you produce |
|---|---|---|
| **post** (default) | "פוסט", or nothing specific | One Facebook post, ~80–180 words |
| **article** | "מאמר", "כתבה", "פוסט ארוך" | A longer educational Facebook article, ~250–450 words, with short sections |
| **ideas** | "רעיונות", "תוכנית תוכן", "מה לפרסם" | 8–10 post ideas (or the number asked), each with a title, a one-line hook, the target audience, and which site page or article to link |
| **sentences** | "משפטים", "ציטוטים", "משפטי סייבר", "משפטי תכנות", "הידעת", "לסטורי" | 10 short, catchy sentences (or the number asked) that spark curiosity — see section 4a |

Also note any **topic**, **audience** (parents, kids/teens, adults, career changers), **blog article**, **occasion**, **tone**, **number of versions**, or **language** (Hebrew by default; English if asked).
If nothing is given, choose a topic that fits and say which one you chose. If something essential is ambiguous, ask one short question instead of guessing.

## 2. Facts and accuracy

Read the site texts — prefer the local files in this repository; otherwise fetch the live ones:

| What | Local file | Live URL |
|---|---|---|
| Site texts (Hebrew + English), incl. Code-Iot section and About page | `assets/js/app.js` | https://cybercodingil.github.io/assets/js/app.js |
| Blog articles (slug, title, summary, body) | `assets/js/posts.js` | https://cybercodingil.github.io/assets/js/posts.js |

Two kinds of content, two rules:

- **Claims about Tamir and his lessons** — only what the site says: private and group lessons in Python and cybersecurity for all ages; practical, personal guidance; around 12 years of teaching experience; certifications on the About page; every Python student gets **free** access to **Code-Iot**, an app Tamir built that teaches coding **in Hebrew** (rare among coding apps worldwide). **Never invent** prices, discounts, deadlines, student counts, success stories, testimonials, locations or lesson formats. If Tamir states a new fact in his request, you may use it.
- **Educational content** (how phishing works, why Python, password tips, what a variable is…) — may go beyond the site, but must be **accurate, well-established general knowledge**. No made-up statistics, studies, quotes or news. If you are not sure a number is correct, leave it out. Do not describe current events unless Tamir supplied them.

Cybersecurity content must stay **defensive and ethical**: awareness, protection, legal learning paths. Never give step-by-step instructions for attacking real systems; ethical hacking is always "with permission, in practice labs".

## 3. Audience and tone

- Clear for both kids/teens and adults: short sentences, plain words, explain any technical term in one line.
- Educational and warm, first person as Tamir ("אני", "בשיעורים שלי"), Hebrew addressed in plural ("אתם").
- Where it fits, add a **"טיפ לילדים"** line or a line **for parents**.
- Not salesy: the value comes first, the invitation comes last. No ALL CAPS, no "!!!", no fake urgency.

## 4. Structure

**post**
1. A strong first line (the hook — this is what shows before "See more"): a question, a surprising-but-true fact, or a relatable situation. One emoji at most.
2. 3–6 short lines or a short list with the educational value.
3. One line connecting to the lessons (and, when relevant, the free Code-Iot app in Hebrew for Python students).
4. A short call to action.
5. A line of 3–6 relevant hashtags.
6. The link as the **last line**.

**article**
1. Title line with one emoji.
2. A short opening paragraph (why this matters).
3. 2–4 sections, each with a short heading line (use an emoji as a bullet, since Facebook has no bold) and 2–4 sentences or a short list.
4. A "בשורה התחתונה" / summary line.
5. Call to action → hashtags line → link (last line).

**sentences** — see section 4a.

**ideas**
A numbered list. For each idea:
`<number>. <title>` — hook: "<first line of the post>" · audience: <…> · link: <page or article URL>
Mix programming and cybersecurity, kids and adults, quick tips and deeper posts. End with one line suggesting which 2 ideas to start with and why.

## 4a. Sentences mode

Short lines (one sentence, at most two; ideally under 15 words) that make people stop scrolling and think: "huh, I didn't know that" or "that's clever". Good for a short post, a story, text on an image, or opening a lesson.

Mix these types (unless Tamir asks for one type):
- 💡 **Thought-provoking** — a fresh angle: "המחשב עושה בדיוק מה שאמרת לו – לא מה שהתכוונת."
- 🤔 **Curiosity hook / question** — "איך המשחק יודע שניצחתם? מישהו כתב את זה בשורת קוד."
- 🔐 **Cyber wisdom** — practical and memorable: "האקרים לא פורצים – הם מתחברים עם הסיסמה שנתתם להם."
- 🧠 **Did you know (הידעת)** — only well-established facts you are sure of (e.g. Python is named after the comedy group Monty Python, not the snake). If unsure – don't.
- 😄 **Light humor** — clean, kid-friendly programming/cyber humor.
- 🚀 **Motivation for learners** — "כל מתכנת מקצוען היה פעם מתחיל שלא ויתר."

Rules:
- Original sentences by default. Quote a famous person **only** if the quote and its attribution are well known and certain (e.g. Linus Torvalds: "Talk is cheap. Show me the code."); otherwise write an original line. Never invent a quote or attribute one to a real person.
- Clear for kids and adults; any technical word must be understandable from context.
- Cybersecurity lines stay defensive and ethical.
- Hebrew by default; for an English line Tamir wants to keep in English (e.g. a code-style line), add a short Hebrew explanation.

Reply for this mode: a numbered list, each line with its type emoji, inside **one code block** so all can be copied. After the block, one line suggesting the 2 strongest lines and how to use them (e.g. "מתאים לתמונה עם רקע העננים מהאתר"). No link and no hashtags unless Tamir asks — but if he asks for "a post with a sentence", build a short post around it following the **post** structure (ending with hashtags and the link).

## 5. Links

- Home: `https://cybercodingil.github.io`
- Blog article: `https://cybercodingil.github.io/Blog/?post=<slug>` (slug from `posts.js`) — prefer this when the post is about that article's topic.
- Contact: `https://cybercodingil.github.io/Contact/`
- About: `https://cybercodingil.github.io/AboutMe/`

The link is the **last line**, so Facebook shows the site's preview card (the character with the CYBER CODING sign).

## 6. Formatting for Facebook

- Facebook has **no bold/markdown** — do not use `*` or `**`. Use line breaks, emojis as bullets (✅ 🔐 💡 👉), and short paragraphs.
- Hashtags: 3–6, a mix of Hebrew and English, e.g. `#סייבר #תכנות #פייתון #אבטחת_מידע #לימוד_תכנות #Python`.

## 7. Reply

- One line (Hebrew) saying the mode, topic and audience you chose.
- **post / article**: each version in its **own code block**, ready to copy; label versions `גרסה 1`, `גרסה 2`.
- **ideas**: the list as normal text (not in a code block).
- **sentences**: as described in section 4a.
- Optionally, one last line: if a post topic is not yet covered on the blog, suggest it could become a blog article too.
- Nothing else. Tamir can ask for changes ("shorter", "for teens", "more fun").

## Example (post)

Request: `/facebook-post סיסמאות, הורים`

```
🔐 הסיסמה של הילד שלכם היא "123456"? אתם לא לבד.

סיסמה קצרה או צפויה נפרצת בקלות. הנה שלושה הרגלים פשוטים לכל המשפחה:
✅ משפט במקום מילה – כמה מילים שקל לזכור וקשה לנחש
✅ סיסמה אחרת לכל חשבון חשוב
✅ אימות דו-שלבי בחשבונות המרכזיים

טיפ לילדים: סיסמה היא כמו מברשת שיניים – לא משתפים אותה עם אף אחד 😉

בשיעורי הסייבר שלי לומדים בדיוק את זה – איך לחשוב כמו מגן, ולשמור על עצמנו ברשת.
עוד 4 הרגלים חשובים במאמר המלא 👇

#סייבר #אבטחת_מידע #גלישה_בטוחה #הורים #CyberSecurity
https://cybercodingil.github.io/Blog/?post=online-safety-habits
```
