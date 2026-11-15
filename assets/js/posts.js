/* Blog articles — Hebrew and English versions side by side.
 *
 * Each article has a `slug` (used in the link: Blog/?post=<slug>), a `category`
 * (programming / cybersecurity / ethical_hacking / web_security), reading time in minutes,
 * and a `he` and `en` version with: title, summary (shown on the blog card), and body.
 *
 * Body blocks:
 *   ["h", "Heading"]              section heading
 *   ["p", "Paragraph"]            paragraph
 *   ["ul", ["item", "item"]]      bullet list (use "Bold part: rest" to bold the start of an item)
 *   ["ol", ["item", "item"]]      numbered list
 *   ["tip", "Text"]               highlighted box (tips for kids, summaries)
 *
 * To add an article: copy one block below, change the slug and the texts.
 * Newest article first.
 */
window.CC_POSTS = [
  {
    slug: "why-learn-coding",
    category: "programming",
    minutes: 4,
    he: {
      title: "למה ללמוד תכנות? היתרונות לילדים ולמבוגרים",
      summary: "תכנות הוא לא רק למי שרוצה להיות מתכנת. הוא מלמד לפתור בעיות, לחשוב באופן יצירתי ולהתמיד – ואף פעם לא מוקדם מדי או מאוחר מדי להתחיל.",
      body: [
        ["p", "תכנות הוא בסך הכול מתן הוראות ברורות למחשב, צעד אחר צעד. נשמע טכני? בפועל זה דומה מאוד לכתיבת מתכון או להסבר של חוקי משחק לחבר. מי שלומד לעשות את זה היטב מפתח כישורים שמועילים הרבה מעבר למחשב."],
        ["h", "מה לימוד תכנות מלמד?"],
        ["ul", [
          "פתרון בעיות: מפרקים בעיה גדולה לצעדים קטנים שאפשר להתמודד איתם.",
          "חשיבה לוגית: \"אם זה קורה – אז עושים את זה\". כל צעד צריך להיות הגיוני.",
          "יצירתיות: אין דרך נכונה אחת. אפשר לבנות משחקים, אתרים, כלים – כל מה שמדמיינים.",
          "סבלנות והתמדה: קוד כמעט אף פעם לא עובד בפעם הראשונה. למצוא את הטעות ולתקן אותה מלמד לא לוותר.",
          "ללמוד מטעויות: הודעת שגיאה היא לא כישלון, היא רמז."
        ]],
        ["h", "לילדים ולבני נוער"],
        ["p", "ילדים לומדים דרך עשייה ומשחק. כשילד כותב כמה שורות ורואה דמות זזה על המסך או משחק פשוט שהוא בנה בעצמו, הוא עובר מלהיות משתמש בטכנולוגיה ליוצר של טכנולוגיה. זה בונה ביטחון עצמי, והכישורים עוזרים גם במתמטיקה, במדעים ואפילו בכתיבה – בכל מקום שבו צריך לסדר מחשבות לפי הסדר."],
        ["tip", "טיפ לילדים: בפעם הבאה שאתם משחקים במשחק, שאלו את עצמכם: \"איך המשחק יודע שניצחתי?\" זו בדיוק השאלה שמתכנתים שואלים!"],
        ["h", "למבוגרים"],
        ["p", "אף פעם לא מאוחר מדי. מבוגרים רבים לומדים תכנות כדי להחליף קריירה, להתקדם בעבודה הנוכחית או פשוט כדי להבין את העולם שבו אנחנו חיים. גם מעט פייתון מאפשר להפוך משימות משעממות לאוטומטיות – לסדר קבצים, לעבד גיליונות אלקטרוניים, להפיק דוחות – ולחסוך שעות של עבודה."],
        ["h", "מאיפה מתחילים?"],
        ["p", "מתחילים משפה ידידותית. פייתון היא בחירה מצוינת ראשונה: הקוד שלה נקרא כמעט כמו אנגלית, והיא משמשת בעולם האמיתי – בבינה מלאכותית, בניתוח נתונים, באתרים, באוטומציה ובסייבר. והכי חשוב: לתרגל מעט, אבל באופן קבוע. עשרים דקות כמה פעמים בשבוע עדיפות על פני מפגש ארוך אחד בחודש."],
        ["tip", "לסיכום: תכנות מלמד איך לחשוב – וזו מיומנות לכל החיים, בכל גיל."]
      ]
    },
    en: {
      title: "Why Learn to Code? The Benefits for Kids and Adults",
      summary: "Coding isn't only for people who want to become programmers. It teaches problem-solving, creative thinking and persistence – and it's never too early or too late to start.",
      body: [
        ["p", "Programming is simply giving a computer clear instructions, step by step. Sounds technical? In practice it's a lot like writing a recipe or explaining the rules of a game to a friend. Learning to do it well builds skills that are useful far beyond the computer."],
        ["h", "What does learning to code teach?"],
        ["ul", [
          "Problem-solving: breaking a big problem into small steps you can handle.",
          "Logical thinking: \"if this happens – then do that\". Every step has to make sense.",
          "Creativity: there's no single right way. You can build games, websites, tools – anything you can imagine.",
          "Patience and persistence: code almost never works the first time. Finding the mistake and fixing it teaches you not to give up.",
          "Learning from mistakes: an error message isn't a failure, it's a clue."
        ]],
        ["h", "For kids and teens"],
        ["p", "Kids learn by doing and playing. When a child writes a few lines and sees a character move on the screen, or a simple game they built themselves, they go from being a user of technology to a creator of it. That builds confidence, and the skills help in math, science and even writing – anywhere you need to put your thoughts in order."],
        ["tip", "Tip for kids: next time you play a game, ask yourself: \"How does the game know I won?\" That's exactly the kind of question programmers ask!"],
        ["h", "For adults"],
        ["p", "It's never too late. Many adults learn to code to change careers, to move ahead in their current job, or simply to understand the world we live in. Even a little Python lets you automate boring tasks – organizing files, processing spreadsheets, producing reports – and save hours of work."],
        ["h", "Where do you start?"],
        ["p", "Start with a friendly language. Python is an excellent first choice: its code reads almost like English, and it's used in the real world – in artificial intelligence, data analysis, websites, automation and cybersecurity. Most important of all: practice a little, but regularly. Twenty minutes a few times a week beats one long session a month."],
        ["tip", "Bottom line: coding teaches you how to think – and that's a skill for life, at any age."]
      ]
    }
  },

  {
    slug: "coding-at-every-age",
    category: "programming",
    minutes: 4,
    he: {
      title: "תכנות בכל גיל: מדריך מעשי להורים ולמבוגרים שרוצים להתחיל",
      summary: "מאיזה גיל אפשר להתחיל? מה עושים אם \"אני לא טוב במתמטיקה\"? ואיך הורים יכולים לעזור? תשובות לשאלות הנפוצות ביותר.",
      body: [
        ["p", "אחת השאלות ששואלים אותי הכי הרבה היא \"זה מתאים לי?\" או \"זה מתאים לילד שלי?\". התשובה הקצרה: כמעט תמיד כן. התשובה הארוכה תלויה בגיל, בסקרנות ובקצב – והנה כמה דברים שכדאי לדעת."],
        ["h", "מאיזה גיל אפשר להתחיל?"],
        ["ul", [
          "ילדים צעירים: אפשר להתחיל בכלים חזותיים שבהם גוררים \"קוביות\" של פקודות. כך לומדים את הרעיונות – סדר פעולות, חזרות ותנאים – בלי להתעסק בהקלדה.",
          "בערך מגיל 10–12: ילדים רבים כבר מוכנים לכתוב קוד אמיתי בשפה כמו פייתון, בעיקר כשהם בונים משהו שמעניין אותם, כמו משחק קטן.",
          "בני נוער: זה זמן מצוין להעמיק – פרויקטים גדולים יותר, אתרים, אוטומציה וצעדים ראשונים בסייבר."
        ]],
        ["p", "הגיל הוא רק נקודת התחלה. מה שקובע באמת הוא הסקרנות והרצון לנסות."],
        ["h", "\"אני לא טוב במתמטיקה\" – זה בסדר"],
        ["p", "זה החשש הנפוץ ביותר אצל מבוגרים, והוא כמעט אף פעם לא מהווה מכשול. רוב התכנות היומיומי דורש חשיבה מסודרת ולא מתמטיקה מתקדמת. אם אתם יודעים לעקוב אחרי מתכון או לתכנן סידור יום – יש לכם את הבסיס."],
        ["h", "איך הורים יכולים לעזור?"],
        ["ol", [
          "תתעניינו: בקשו מהילד להראות לכם מה הוא בנה, ותשאלו איך זה עובד.",
          "תפרגנו על המאמץ, לא רק על התוצאה. באגים הם חלק מהדרך.",
          "תנו זמן קבוע ורגוע לתרגול, בלי לחץ.",
          "חברו לתחומי העניין שלו: משחקים, מוזיקה, ספורט – אפשר לתכנת כמעט הכול."
        ]],
        ["tip", "טיפ לילדים: אם משהו לא עובד, נסו להסביר את הקוד בקול – אפילו לבובה או לחיית המחמד. הרבה פעמים תגלו את הטעות בעצמכם תוך כדי ההסבר!"],
        ["h", "כמה זמן לוקח לראות תוצאות?"],
        ["p", "כבר בשיעורים הראשונים כותבים תוכניות קטנות שעובדות. אחרי כמה חודשים של תרגול קבוע אפשר לבנות פרויקטים שמרגישים \"אמיתיים\". ההתקדמות אישית לכל אחד – והתמדה חשובה יותר מכישרון."],
        ["tip", "לסיכום: לא צריך להיות \"גאון מחשבים\" כדי להתחיל. צריך סקרנות, קצת סבלנות והכוונה נכונה."]
      ]
    },
    en: {
      title: "Coding at Every Age: A Practical Guide for Parents and Adults Who Want to Start",
      summary: "What age can you start? What if \"I'm not good at math\"? And how can parents help? Answers to the most common questions.",
      body: [
        ["p", "One of the questions I'm asked most is \"Is this right for me?\" or \"Is this right for my child?\". The short answer: almost always, yes. The longer answer depends on age, curiosity and pace – and here are a few things worth knowing."],
        ["h", "What age can you start?"],
        ["ul", [
          "Young children: they can start with visual tools where you drag \"blocks\" of commands. That's how they learn the ideas – order of steps, repetition and conditions – without having to type.",
          "Around ages 10–12: many kids are ready to write real code in a language like Python, especially when they're building something that interests them, like a small game.",
          "Teenagers: a great time to go deeper – bigger projects, websites, automation and first steps in cybersecurity."
        ]],
        ["p", "Age is only a starting point. What really matters is curiosity and the willingness to try."],
        ["h", "\"I'm not good at math\" – that's fine"],
        ["p", "This is the most common worry among adults, and it's almost never a real obstacle. Most everyday programming needs organized thinking, not advanced math. If you can follow a recipe or plan out your day – you already have the basics."],
        ["h", "How can parents help?"],
        ["ol", [
          "Show interest: ask your child to show you what they built, and ask how it works.",
          "Praise the effort, not only the result. Bugs are part of the journey.",
          "Give regular, relaxed time for practice, without pressure.",
          "Connect it to their interests: games, music, sports – you can code almost anything."
        ]],
        ["tip", "Tip for kids: if something doesn't work, try explaining your code out loud – even to a teddy bear or your pet. Very often you'll spot the mistake yourself while explaining!"],
        ["h", "How long until you see results?"],
        ["p", "Even in the first lessons you write small programs that work. After a few months of regular practice you can build projects that feel \"real\". Progress is personal for everyone – and persistence matters more than talent."],
        ["tip", "Bottom line: you don't need to be a \"computer genius\" to start. You need curiosity, a little patience and the right guidance."]
      ]
    }
  },

  {
    slug: "why-cybersecurity-matters",
    category: "cybersecurity",
    minutes: 4,
    he: {
      title: "למה סייבר חשוב היום יותר מתמיד?",
      summary: "בית הספר, הבנק, המשחקים והתמונות שלנו – הכול נמצא היום ברשת. מה זה בעצם אבטחת סייבר, ולמה היא נוגעת לכל אחד מאיתנו?",
      body: [
        ["p", "תחשבו על כל מה שאתם עושים ברשת ביום אחד: הודעות לחברים, שיעורי בית, משחקים, תמונות, קניות, חשבון בנק. החיים שלנו עברו במידה רבה לעולם הדיגיטלי – ובדיוק כמו שנועלים את הדלת בבית, צריך לדעת לשמור על עצמנו גם שם."],
        ["h", "מה זה בכלל אבטחת סייבר?"],
        ["p", "אבטחת סייבר (או אבטחת מידע) היא ההגנה על מחשבים, טלפונים, רשתות ומידע מפני גניבה, נזק או שימוש לא מורשה. היא כוללת גם טכנולוגיה – כמו סיסמאות, הצפנה ועדכוני תוכנה – וגם התנהגות נכונה של אנשים."],
        ["h", "למה זה חשוב דווקא עכשיו?"],
        ["ul", [
          "יותר מכשירים מחוברים: טלפונים, שעונים, טלוויזיות, מצלמות ואפילו מכוניות – כל מכשיר מחובר הוא עוד \"דלת\" שצריך לנעול.",
          "המידע שלנו שווה כסף: פרטים אישיים, סיסמאות ופרטי אשראי הם מטרה לעבריינים.",
          "תוקפים לא מחפשים רק חברות גדולות: הרבה מתקפות מכוונות לאנשים רגילים, כי קל יותר לרמות אדם אחד מאשר לפרוץ למערכת מוגנת.",
          "גם שירותים חיוניים תלויים במחשבים: בתי חולים, חשמל, מים ותחבורה – ולכן ההגנה עליהם חשובה לכולנו."
        ]],
        ["h", "האיומים הנפוצים – בשפה פשוטה"],
        ["ul", [
          "פישינג (דיוג): הודעה או מייל מזויפים שמנסים לגרום לכם ללחוץ על קישור או למסור סיסמה.",
          "סיסמאות חלשות: סיסמה כמו 123456 או שם הכלב קלה מאוד לניחוש.",
          "תוכנות זדוניות: תוכנות שנראות תמימות אבל גונבות מידע או פוגעות במכשיר.",
          "הונאות במשחקים וברשתות: הבטחות ל\"מטבעות חינם\" או \"פרסים\" שמטרתן לגנוב את החשבון."
        ]],
        ["tip", "טיפ לילדים: סיסמה היא כמו מברשת שיניים – לא משתפים אותה עם אף אחד, ומחליפים אותה אם צריך!"],
        ["h", "וגם – מקצוע עם עתיד"],
        ["p", "ככל שהעולם נעשה דיגיטלי יותר, גדל הצורך באנשים שיודעים להגן עליו. אנשי סייבר מבוקשים בחברות, בארגונים ובגופים ציבוריים, והתחום מציע עבודה מעניינת שמשלבת חשיבה, טכנולוגיה וקצת \"עבודת בלש\"."],
        ["tip", "לסיכום: סייבר הוא לא רק תחום של מומחים. הבנה בסיסית שלו היא מיומנות חיים לכל אחד – ילדים ומבוגרים כאחד."]
      ]
    },
    en: {
      title: "Why Does Cybersecurity Matter More Than Ever?",
      summary: "School, the bank, our games and photos – today it's all online. What exactly is cybersecurity, and why does it matter to every one of us?",
      body: [
        ["p", "Think about everything you do online in a single day: messages to friends, homework, games, photos, shopping, a bank account. Much of our lives has moved into the digital world – and just like we lock the door at home, we need to know how to protect ourselves there too."],
        ["h", "What is cybersecurity, anyway?"],
        ["p", "Cybersecurity (or information security) is protecting computers, phones, networks and information from theft, damage or unauthorized use. It includes technology – like passwords, encryption and software updates – and also the right behavior by people."],
        ["h", "Why does it matter right now?"],
        ["ul", [
          "More connected devices: phones, watches, TVs, cameras and even cars – every connected device is another \"door\" that needs locking.",
          "Our information is worth money: personal details, passwords and credit card numbers are a target for criminals.",
          "Attackers don't only go after big companies: many attacks target ordinary people, because tricking one person is easier than breaking into a protected system.",
          "Essential services depend on computers too: hospitals, electricity, water and transport – so protecting them matters to all of us."
        ]],
        ["h", "The common threats – in plain language"],
        ["ul", [
          "Phishing: a fake message or email that tries to get you to click a link or give away a password.",
          "Weak passwords: a password like 123456 or your dog's name is very easy to guess.",
          "Malware: programs that look harmless but steal information or damage your device.",
          "Scams in games and social media: promises of \"free coins\" or \"prizes\" meant to steal your account."
        ]],
        ["tip", "Tip for kids: a password is like a toothbrush – you don't share it with anyone, and you change it when needed!"],
        ["h", "And – a profession with a future"],
        ["p", "The more digital the world becomes, the more we need people who know how to protect it. Cybersecurity professionals are in demand at companies, organizations and public institutions, and the field offers interesting work that combines thinking, technology and a bit of \"detective work\"."],
        ["tip", "Bottom line: cybersecurity isn't only for experts. A basic understanding of it is a life skill for everyone – kids and adults alike."]
      ]
    }
  },

  {
    slug: "online-safety-habits",
    category: "cybersecurity",
    minutes: 3,
    he: {
      title: "7 הרגלים פשוטים לגלישה בטוחה – לכל המשפחה",
      summary: "לא צריך להיות מומחה כדי להיות מוגן ברשת. שבעה הרגלים קטנים שכל אחד – מילדים ועד סבים – יכול לאמץ כבר היום.",
      body: [
        ["p", "רוב הפריצות לא מתחילות בהאקר גאון, אלא בטעות קטנה: סיסמה פשוטה, קישור חשוד או עדכון שנדחה. החדשות הטובות? כמה הרגלים פשוטים מגינים מפני רוב הסכנות."],
        ["ol", [
          "משפט במקום סיסמה: סיסמה ארוכה בנויה מכמה מילים שקל לזכור וקשה לנחש. ולכל חשבון חשוב – סיסמה אחרת.",
          "אימות דו-שלבי: מפעילים אותו בחשבונות החשובים. גם אם מישהו ישיג את הסיסמה, הוא יצטרך עוד קוד שנשלח רק אליכם.",
          "עוצרים וחושבים לפני שלוחצים: הודעה שמלחיצה (\"החשבון שלך ייחסם!\") או שמבטיחה פרס היא סימן אזהרה. בודקים מי השולח, ואם יש ספק – לא לוחצים.",
          "מעדכנים: עדכוני תוכנה סוגרים פרצות אבטחה. כדאי להפעיל עדכונים אוטומטיים בטלפון ובמחשב.",
          "לא משתפים יותר מדי: כתובת, שם בית הספר, מיקום בזמן אמת ותמונות של מסמכים – נשארים פרטיים.",
          "מספרים כשמשהו מרגיש לא בסדר: ילדים – אם מישהו ברשת מבקש סוד, תמונה או פרטים, מספרים להורה או למבוגר שסומכים עליו. אף אחד לא יכעס עליכם.",
          "גיבוי: שומרים עותק של תמונות וקבצים חשובים בענן או בכונן נפרד, כדי שתקלה או מתקפה לא ימחקו אותם."
        ]],
        ["tip", "טיפ לילדים: חוק הזהב של הרשת – אם הייתם מתביישים שהמורה או ההורים יראו את זה, כנראה שעדיף לא לשלוח את זה."],
        ["h", "להורים: שיחה פתוחה היא ההגנה הטובה ביותר"],
        ["p", "אף תוכנה לא מחליפה שיחה. ילד שיודע שהוא יכול לספר על טעות בלי לקבל עונש, יפנה אליכם מוקדם – ובזמן. דברו על מה שהם רואים ברשת, שחקו איתם לפעמים, ולמדו יחד."],
        ["tip", "לסיכום: אבטחה היא לא דבר שעושים פעם אחת, אלא הרגל. מתחילים בהרגל אחד השבוע – ומוסיפים עוד אחד בשבוע הבא."]
      ]
    },
    en: {
      title: "7 Simple Habits for Safe Browsing – for the Whole Family",
      summary: "You don't need to be an expert to stay safe online. Seven small habits that anyone – from kids to grandparents – can adopt today.",
      body: [
        ["p", "Most break-ins don't start with a genius hacker but with a small mistake: a simple password, a suspicious link or an update that got postponed. The good news? A few simple habits protect you from most of the dangers."],
        ["ol", [
          "A phrase instead of a password: a long password made of several words is easy to remember and hard to guess. And every important account gets a different one.",
          "Two-step verification: turn it on for your important accounts. Even if someone gets your password, they'll also need a code that's sent only to you.",
          "Stop and think before you click: a message that pressures you (\"Your account will be blocked!\") or promises a prize is a warning sign. Check who sent it, and if in doubt – don't click.",
          "Update: software updates close security holes. It's worth turning on automatic updates on your phone and computer.",
          "Don't overshare: your address, school name, live location and photos of documents – keep them private.",
          "Tell someone when something feels wrong: kids – if someone online asks for a secret, a photo or personal details, tell a parent or an adult you trust. Nobody will be angry with you.",
          "Back up: keep a copy of important photos and files in the cloud or on a separate drive, so a breakdown or an attack can't wipe them out."
        ]],
        ["tip", "Tip for kids: the golden rule of the internet – if you'd be embarrassed for your teacher or parents to see it, it's probably better not to send it."],
        ["h", "For parents: an open conversation is the best protection"],
        ["p", "No software replaces a conversation. A child who knows they can talk about a mistake without being punished will come to you early – in time. Talk about what they see online, play with them sometimes, and learn together."],
        ["tip", "Bottom line: security isn't something you do once, it's a habit. Start with one habit this week – and add another next week."]
      ]
    }
  },

  {
    slug: "what-is-an-ethical-hacker",
    category: "ethical_hacking",
    minutes: 4,
    he: {
      title: "מה זה האקר אתי – ולמה העולם צריך אותם?",
      summary: "המילה \"האקר\" נשמעת מפחידה, אבל יש האקרים שהתפקיד שלהם הוא להגן עלינו. מי הם, מה ההבדל בינם לבין פורצים, ואיך לומדים את התחום באופן חוקי ובטוח.",
      body: [
        ["p", "כששומעים \"האקר\", רבים מדמיינים מישהו בקפוצ'ון שפורץ למחשבים בלילה. אבל במציאות יש גם צד אחר: אנשים שמשתמשים בדיוק באותם כישורים כדי למצוא חולשות – לפני שהעבריינים ימצאו אותן – ולתקן אותן."],
        ["h", "אז מה ההבדל?"],
        ["p", "ההבדל הוא אחד וחשוב מאוד: רשות. האקר אתי (נקרא גם \"בודק חדירות\") עובד רק באישור מפורש של בעל המערכת, בגבולות שסוכמו מראש, ומדווח על כל מה שמצא כדי שיתקנו את זה. מי שנכנס למערכת בלי רשות – עובר על החוק, גם אם \"רק רצה לבדוק\"."],
        ["tip", "חשוב לזכור: פריצה למחשב, לחשבון או לרשת בלי אישור היא עבירה על החוק. האקינג אתי מתחיל תמיד ברשות."],
        ["h", "מה האקר אתי עושה בפועל?"],
        ["ul", [
          "בודק אתרים, אפליקציות ורשתות ומחפש בהם חולשות.",
          "מנסה \"לחשוב כמו תוקף\" – כדי להבין איפה המערכת עלולה להישבר.",
          "כותב דוח שמסביר מה מצא, כמה זה מסוכן ואיך מתקנים.",
          "עוזר לארגונים להשתפר, כדי שהמידע של כולנו יהיה מוגן יותר."
        ]],
        ["h", "אילו כישורים צריך?"],
        ["p", "סקרנות, סבלנות ויסודות טובים: איך עובדים מחשבים ורשתות, היכרות עם מערכת לינוקס, ותכנות – בעיקר בפייתון, שמשמשת לכתיבת כלים ולאוטומציה. ומעל הכול – אחריות ויושרה."],
        ["h", "איך לומדים את זה באופן חוקי ובטוח?"],
        ["p", "לומדים ומתרגלים רק בסביבות שנבנו בשביל זה: מעבדות וירטואליות שמקימים על המחשב האישי, ופלטפורמות לימוד ותחרויות (CTF) שבהן מותר – ואפילו רצוי – לנסות לפרוץ למערכות שהוכנו במיוחד לתרגול. כך מתנסים בכלים אמיתיים בלי לפגוע באף אחד."],
        ["tip", "טיפ לילדים: האקר אתי הוא כמו בודק בטיחות במגרש משחקים – הוא מחפש איפה משהו רופף, כדי שיתקנו אותו לפני שמישהו ייפגע."],
        ["tip", "לסיכום: האקינג אתי הוא מקצוע מכובד ומבוקש, שמשלב חשיבה יצירתית עם אחריות. כשלומדים אותו נכון, הוא הופך כישורים \"של האקרים\" לכוח שמגן על אחרים."]
      ]
    },
    en: {
      title: "What Is an Ethical Hacker – and Why Does the World Need Them?",
      summary: "The word \"hacker\" sounds scary, but some hackers' job is to protect us. Who are they, how are they different from criminals, and how do you learn the field legally and safely?",
      body: [
        ["p", "When people hear \"hacker\", many picture someone in a hoodie breaking into computers at night. But in reality there's another side: people who use exactly the same skills to find weaknesses – before criminals find them – and get them fixed."],
        ["h", "So what's the difference?"],
        ["p", "There is one difference, and it's a very important one: permission. An ethical hacker (also called a \"penetration tester\") works only with the explicit approval of the system's owner, within limits agreed in advance, and reports everything they find so it can be fixed. Anyone who gets into a system without permission is breaking the law – even if they \"just wanted to check\"."],
        ["tip", "Important to remember: breaking into a computer, account or network without permission is against the law. Ethical hacking always starts with permission."],
        ["h", "What does an ethical hacker actually do?"],
        ["ul", [
          "Tests websites, apps and networks and looks for weaknesses in them.",
          "Tries to \"think like an attacker\" – to understand where the system might break.",
          "Writes a report explaining what they found, how dangerous it is and how to fix it.",
          "Helps organizations improve, so that everyone's information is better protected."
        ]],
        ["h", "What skills do you need?"],
        ["p", "Curiosity, patience and good foundations: how computers and networks work, familiarity with the Linux operating system, and programming – especially Python, which is used to write tools and automate tasks. And above all – responsibility and integrity."],
        ["h", "How do you learn it legally and safely?"],
        ["p", "You learn and practice only in environments built for it: virtual labs that you set up on your own computer, and learning platforms and competitions (CTFs) where you're allowed – even encouraged – to try to break into systems prepared especially for practice. That way you get hands-on experience with real tools without harming anyone."],
        ["tip", "Tip for kids: an ethical hacker is like a safety inspector at a playground – they look for anything loose so it gets fixed before someone gets hurt."],
        ["tip", "Bottom line: ethical hacking is a respected, in-demand profession that combines creative thinking with responsibility. Learned the right way, it turns \"hacker\" skills into a force that protects others."]
      ]
    }
  }
];
