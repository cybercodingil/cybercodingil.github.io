/* Cyber</>Coding — static GitHub Pages version.
 * Content, translations and Tailwind classes are copied from the original Base44 site.
 */
(function () {
  "use strict";

  // ---------------------------------------------------------------- config
  var WHATSAPP_NUMBER = "9720528372666";
  var FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100007702515504";
  var LINKEDIN_URL = "https://www.linkedin.com/in/tamir-maidani-b21814266";
  // Formspree form ID (the part after https://formspree.io/f/). While empty, the form falls back to WhatsApp.
  var FORMSPREE_FORM_ID = "xoededbb";

  var ROOT = document.body.getAttribute("data-root") || "./";
  var PAGE = document.body.getAttribute("data-page") || "Home";
  var IMG = ROOT + "assets/img/";

  function pageUrl(name) {
    return name === "Home" ? ROOT : ROOT + name + "/";
  }

  // ---------------------------------------------------------------- icons (lucide v0.475.0)
  var ICONS = {
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    "square-terminal": '<path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
    "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>'
  };

  function icon(name, cls, size) {
    size = size || 24;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
      name + (cls ? " " + cls : "") + '" aria-hidden="true">' + ICONS[name] + "</svg>";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // ---------------------------------------------------------------- translations
  var T = {
    layout: {
      en: { home: "Home", aboutMe: "About Me", blog: "Blog", contact: "Contact", allRightsReserved: "All rights reserved",
            whatsappLabel: "Chat with me on WhatsApp", whatsappText: "Hi, I found your website and would like to hear more about lessons." },
      he: { home: "דף הבית", aboutMe: "אודותיי", blog: "בלוג", contact: "צור קשר", allRightsReserved: "כל הזכויות שמורות",
            whatsappLabel: "שלחו לי הודעה בוואטסאפ", whatsappText: "היי, הגעתי מהאתר ואשמח לשמוע פרטים על השיעורים." }
    },
    home: {
      en: {
        heroTitle: "The World of Programming and Cyber",
        heroSubtitle: "Private and group lessons in cybersecurity and programming for all ages, through practical training and personal guidance.",
        exploreAboutMe: "About Me",
        contactMe: "Contact Me",
        cybersecurityExpertise: "Information Security",
        cybersecurityDesc: "Gradual and comprehensive learning about the various aspects of the cyber world, global defense and attack methods, and setting up real systems for hands-on experience.",
        programmingMastery: "Python Programming",
        programmingDesc: "Introduction to the Python language and building practical programming projects.",
        webSecurity: "Connecting Worlds",
        webSecurityDesc: "We will learn to connect the world of programming with the world of cyber by creating Python programs used for work in the field of information security.",
        realworldProjects: "Applied Work Environment",
        realworldDesc: "Creating virtual labs that simulate real-world scenarios and practicing in them for both defense and attack purposes.",
        whyLearnWithMe: "Why Learn With Me?",
        personalizedAttention: "Personalized Attention",
        personalizedDesc: "One-on-one sessions tailored to your learning pace and goals.",
        industryExperience: "Contemporary Learning",
        industryDesc: "Learn from real-time situations in the actual world\nand from up-to-date content adapted to a changing reality.",
        handsOnProjects: "Hands-on Projects",
        handsOnDesc: "Build your portfolio with practical projects and real tools.",
        readyToStart: "Ready to Start Your Journey?",
        takeFirstStep: 'Take the first step towards "breaking into" the world of cyber and programming. Book your first lesson today!',
        getStartedNow: "Get Started Now",
        appBadge: "Free bonus for Python students",
        appTitle: "The Code-Iot app – included with your lessons",
        appDesc: "Every student who joins the Python lessons gets free access to Code-Iot, a coding app I built to accompany the lessons.",
        appPoint1: "Keep practicing between lessons – on your phone or computer",
        appPoint2: "Learn anywhere, anytime",
        appPoint3: "No extra cost – it comes with the lessons",
        appCta: "Take a look at the app"
      },
      he: {
        heroTitle: "עולם התכנות והסייבר",
        heroSubtitle: "שיעורים פרטיים וקבוצתיים באבטחת מידע ותכנות לכל הגילאים באמצעות הדרכה מעשית והכוונה אישית",
        exploreAboutMe: "אודותיי",
        contactMe: "צור קשר",
        cybersecurityExpertise: "אבטחת מידע",
        cybersecurityDesc: "למידה הדרגתית ורחבה על גווני עולם הסייבר, שיטות הגנה והתקפה מן העולם , הקמת מערכות אמיתיות להתנסות בפועל",
        programmingMastery: "תכנות בפייתון",
        programmingDesc: "הכרות עם שפת פייתון, ובניית פרויקטים מעשיים בתכנות",
        webSecurity: "חיבור בין עולמות",
        webSecurityDesc: "נלמד לחבר בין עולם התכנות לעולם הסייבר ביצירת תוכנות בשפת פייתון המשמשות לעבודה בתחום אבטחת המידע",
        realworldProjects: "סביבת עבודה יישומית",
        realworldDesc: "יצירת מעבדות וירטואליות המדמות מציאות אמיתית והתנסות בהן לשם ההגנה וההתקפה",
        whyLearnWithMe: "למה ללמוד איתי?",
        personalizedAttention: "תשומת לב אישית",
        personalizedDesc: "שיעורים אחד על אחד המותאמים לקצב הלמידה והמטרות שלך",
        industryExperience: "למידה עכשווית",
        industryDesc: "למד ממציאות הקיימת בו בזמן בעולם האמיתי\nומתוכן עדכני המותאם למציאות משתנה",
        handsOnProjects: "פרויקטים מעשיים",
        handsOnDesc: "בנה את התיק שלך עם פרויקטים מעשיים וכלים אמיתיים",
        readyToStart: "מוכן להתחיל את המסע שלך?",
        takeFirstStep: 'עשה את הצעד הראשון לקראת "פריצה" לעולם הסייבר והתכנות. הזמן את השיעור הראשון שלך עוד היום!',
        getStartedNow: "התחל עכשיו",
        appBadge: "בונוס חינם לתלמידי פייתון",
        appTitle: "אפליקציית Code-Iot – כלולה בשיעורים",
        appDesc: "כל תלמיד שמצטרף לשיעורי פייתון מקבל גישה חינם ל-Code-Iot, אפליקציה ללימוד תכנות שפיתחתי במיוחד כדי ללוות את השיעורים.",
        appPoint1: "ממשיכים לתרגל בין השיעורים – בטלפון או במחשב",
        appPoint2: "לומדים מכל מקום ובכל זמן",
        appPoint3: "בלי עלות נוספת – כלול בשיעורים",
        appCta: "להצצה באפליקציה"
      }
    },
    about: {
      en: {
        aboutMeTitle: "About Me",
        aboutMeSubtitle: "Teacher and instructor specializing in information security and programming.",
        myStory: "My Story",
        myStoryContent: "With about 12 years of teaching experience, I've learned over time that every student is unique and has their own way of receiving information. As a teacher, you must know how to provide the student with information in the way that best suits their personality.\nThroughout my life, a love for the field of information security and computers developed. Even in my youth, like many teenagers today, I would explore information and show curiosity until, at a certain point in my life, I understood that it's possible to 'jump and ascend' to a higher level and gain 'other' abilities when one can learn the field in an organized manner that grants more advanced and numerous skills.\nI decided to study information security at college while I was still a teacher. After successfully completing the course, with G-d's help, I decided to combine my love for education with my love for computers and teach information security to young people and adults.",
        expertise: "Areas of Expertise",
        expertiseCybersecurity: "Information Security",
        expertisePython: "Python Programming",
        expertiseLinux: "Linux Systems",
        expertiseVM: "Virtualization & VMs",
        education: "Education",
        educationDetails: "B.Ed. in Education\n\nGraduate of the Information Security and Cyber course from HackerU College.",
        certifications: "Certifications",
        cert1: "TDX Arena Penetration Tester Certificate",
        cert2: "Official/Legal Hacker Course Certificate",
        cert3: "TryHackMe Pre-Security Pathway Completion Certificate",
        teachingPhilosophy: "Teaching Philosophy",
        philosophyContent: "I believe that learning should be gradual and adapted to the student's world.\nThere isn't just one way to teach; rather, one must constantly think about what is best for the specific student they are with.\nTo be relevant, to arouse curiosity, and to be aware of all the changes happening in the cyber era in real-time.\nI believe in practical application during learning, and therefore, I believe the student needs to apply what they've learned themselves and 'live the field'."
      },
      he: {
        aboutMeTitle: "אודותיי",
        aboutMeSubtitle: "מורה ומדריך המתמחה באבטחת מידע ותכנות",
        myStory: "הסיפור שלי",
        myStoryContent: "עם ניסיון של כ 12 שנה בהוראה למדתי עם הזמן שכל תלמיד הוא מיוחד וקיים אצל כל אחד דרך משלו לקבל את המידע , וכמורה אתה חייב לדעת להעניק לתלמיד את המידע בדרך הכי הנכונה לאישיותו.\nבמהלך חיי נרקמה אהבה לתחום אבטחת המידע ומחשבים, עוד בצעירותי כמו רבים מבניי הנוער כיום , הייתי חוקר את המידע ומגלה סקרנות עד שבשלב מסוים בחיי הבנתי שאפשר \"לקפוץ ולעלות\" לרמה גבוהה ויכולות \"אחרות\" כאשר ניתן ללמוד את התחום בצורה מסודרת ומעניקה כישורים מתקדמים ורבים יותר.\nהחלטתי ללמוד במכללה את לימודי אבטחת המידע עוד בהיותי מורה ולאחר הצלחה בקורס ב\"ה , החלטתי לשלב את האהבה לחינוך עם אהבה לתחום המחשבים ביחד וללמד את תחום אבטחת המידע לצעירים ומבוגרים.",
        expertise: "תחומי התמחות",
        expertiseCybersecurity: "אבטחת מידע",
        expertisePython: "תכנות בפייתון",
        expertiseLinux: "מערכת לינוקס",
        expertiseVM: "מערכות הפעלה וירטואליות",
        education: "השכלה",
        educationDetails: "תואר ראשון B.e.d בחינוך\n\nבוגר קורס אבטחת מידע וסייבר ממכללת האקר-יו",
        certifications: "הסמכות",
        cert1: "תעודת בודק חדירה של ארנה TDX",
        cert2: "תעודת קורס האקר רשמי/חוקי",
        cert3: "תעודת סיום מסלול Presecurity מבית Tryhackme",
        teachingPhilosophy: "פילוסופיית הוראה",
        philosophyContent: "אני מאמין שהלמידה צריכה להיות הדרגתית ומותאמת לעולמו של התלמיד.\nאין דרך אחת בלבד ללמד, אלה צריך כל הזמן לחשוב מה הכי נכון לתלמיד הספציפי שאיתו אני נמצא.\nלעניין , לסקרן , ולהיות מודע לכל השינויים המתחוללים בעידן הסייבר בזמן אמת.\nאני מאמין בפרקטיקה בזמן הלימוד ולכן אני מאמין שהתלמיד צריך ליישם את הנלמד בעצמו ו\"לחיות את התחום\"."
      }
    },
    blog: {
      en: { blogTitle: "Blog & Resources", blogSubtitle: "Latest articles, tutorials, and resources on cybersecurity and programming.", readMore: "Read More", categories: "Categories", cybersecurity: "Cybersecurity", programming: "Programming", ethical_hacking: "Ethical Hacking", web_security: "Web Security", searchPlaceholder: "Search articles...", noBlogPosts: "No blog posts found." },
      he: { blogTitle: "בלוג ומשאבים", blogSubtitle: "מאמרים, הדרכות ומשאבים אחרונים בנושא אבטחת סייבר ותכנות", readMore: "קרא עוד", categories: "קטגוריות", cybersecurity: "אבטחת סייבר", programming: "תכנות", ethical_hacking: "האקינג אתי", web_security: "אבטחת אתרים", searchPlaceholder: "חפש מאמרים...", noBlogPosts: "לא נמצאו פוסטים בבלוג." }
    },
    contact: {
      en: { contactTitle: "Contact Me", contactSubtitle: "Have questions? Fill out the form below to get in touch with me directly.", contactMe: "Contact Me", yourName: "Your Name", yourEmail: "Your Email", yourPhone: "Your Phone", yourMessage: "Your Message", submit: "Submit", thankYou: "Thank you for your message!", getBackToYou: "I'll get back to you as soon as possible.", sending: "Sending...", sendError: "Something went wrong and the message was not sent. Please try again, or contact me on WhatsApp.", connectWithMe: "Connect With Me", facebook: "Facebook", whatsapp: "WhatsApp", linkedin: "LinkedIn" },
      he: { contactTitle: "צור קשר", contactSubtitle: "יש לך שאלות? מלא את הטופס למטה כדי ליצור איתי קשר ישירות.", contactMe: "צור קשר", yourName: "השם שלך", yourEmail: "האימייל שלך", yourPhone: "הטלפון שלך", yourMessage: "ההודעה שלך", submit: "שלח", thankYou: "תודה על ההודעה שלך!", getBackToYou: "אחזור אליך בהקדם האפשרי.", sending: "שולח...", sendError: "משהו השתבש וההודעה לא נשלחה. נסה שוב, או צור איתי קשר בוואטסאפ.", connectWithMe: "התחבר איתי", facebook: "פייסבוק", whatsapp: "וואטסאפ", linkedin: "לינקדאין" }
    }
  };

  // Blog posts (exported from the original site's database), newest first.
  var BLOG_POSTS = [
    { id: "67d1662067d59189de380713", language: "en", category: "cybersecurity", title: "The Importance of Network Segmentation", content: "Network segmentation is a crucial security strategy that can limit the damage of a breach. This post explores best practices for implementing effective network segmentation." },
    { id: "67d1662067d59189de380712", language: "en", category: "programming", title: "Getting Started with Python for Cybersecurity", content: "Python is an essential tool for cybersecurity professionals. Here's how to get started using Python for security testing and automation." },
    { id: "67d1662067d59189de380711", language: "en", category: "web_security", title: "Understanding XSS (Cross-Site Scripting) Attacks", content: "Cross-Site Scripting (XSS) is one of the most common web application vulnerabilities. Learn how to identify and prevent XSS attacks in your applications." },
    { id: "67d163b3b40dbbf86b62cf6e", language: "he", category: "programming", title: "תחילת העבודה עם פייתון לאבטחת סייבר", content: "פייתון הוא כלי חיוני עבור אנשי מקצוע בתחום הסייבר. הנה כיצד להתחיל להשתמש בפייתון לבדיקות אבטחה ואוטומציה." },
    { id: "67d163b3b40dbbf86b62cf6d", language: "he", category: "web_security", title: "הבנת התקפות XSS (Cross-Site Scripting)", content: "Cross-Site Scripting (XSS) היא אחת מפגיעויות אבטחת האתרים הנפוצות ביותר. למד כיצד לזהות ולמנוע התקפות XSS ביישומים שלך." },
    { id: "67d05021afef5c556afb2943", language: "en", category: "programming", title: "Getting Started with Python for Cybersecurity", content: "Python is an essential tool for cybersecurity professionals. Here's how to start using Python for security testing and automation." },
    { id: "67d05021afef5c556afb2942", language: "en", category: "web_security", title: "Understanding Cross-Site Scripting (XSS) Attacks", content: "Cross-Site Scripting (XSS) is one of the most common web security vulnerabilities. Learn how to identify and prevent XSS attacks in your applications." }
  ];

  // ---------------------------------------------------------------- state
  // Hebrew is the default language; English only if the visitor picked it.
  var lang = "he";
  try { lang = localStorage.getItem("language") === "en" ? "en" : "he"; } catch (e) { /* storage blocked */ }
  var menuOpen = false;
  var blogState = { search: "", category: "all" };
  var contactSent = false;
  var contactSending = false;
  var contactError = false;

  function dir() { return lang === "he" ? "rtl" : "ltr"; }
  function t(section, key) { return (T[section][lang] && T[section][lang][key]) || key; }

  // ---------------------------------------------------------------- shared UI pieces (shadcn/ui classes)
  var BTN = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
  var BTN_DEFAULT = "bg-primary text-primary-foreground shadow hover:bg-primary/90";
  // Same as BTN_DEFAULT after the original's class-merge dropped bg-primary for bg-blue-600.
  var BTN_BLUE = "text-primary-foreground shadow bg-blue-600 hover:bg-blue-700";
  var BTN_OUTLINE = "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground";
  var BTN_GHOST = "hover:bg-accent hover:text-accent-foreground";
  var SIZE_DEFAULT = "h-9 px-4 py-2", SIZE_SM = "h-8 rounded-md px-3 text-xs", SIZE_LG = "h-10 rounded-md px-8", SIZE_ICON = "h-9 w-9";
  var CARD = "rounded-xl border bg-card text-card-foreground shadow";
  var CARD_HEADER = "flex flex-col space-y-1.5 p-6";
  var CARD_TITLE = "font-semibold leading-none tracking-tight";
  var CARD_CONTENT = "p-6 pt-0";
  var CARD_FOOTER = "flex items-center p-6 pt-0";
  var INPUT = "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
  var TEXTAREA = "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";
  var LABEL = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  var BADGE = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow";

  function chevron() {
    return icon("chevron-right", (dir() === "rtl" ? "mr-2 rotate-180" : "ml-2") + " h-4 w-4");
  }

  // ---------------------------------------------------------------- layout
  function renderLayout(content) {
    var nav = [
      { id: "home", page: "Home" },
      { id: "aboutMe", page: "AboutMe" },
      { id: "blog", page: "Blog" },
      { id: "contact", page: "Contact" }
    ];
    var L = function (k) { return t("layout", k); };
    var langBtn = function (code, label) {
      return '<button type="button" data-lang="' + code + '" class="px-2 py-1 rounded text-sm ' +
        (lang === code ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800") + '">' + label + "</button>";
    };
    var mobileLangBtn = function (code, label) {
      return '<button type="button" data-lang="' + code + '" class="' + BTN + " " + SIZE_SM + " border border-input shadow-sm hover:bg-accent hover:text-accent-foreground " +
        (lang === code ? "bg-blue-100" : "bg-background") + '">' + label + "</button>";
    };

    return '<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 ' + (dir() === "rtl" ? "text-right" : "text-left") + '">' +
      '<nav class="bg-white border-b border-gray-200">' +
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex h-16">' +
          // No logo (removed at the owner's request): the menu starts on the reading side —
          // left in English, right in Hebrew.
          '<div class="hidden md:flex items-center gap-4">' +
            nav.map(function (n) { return '<a href="' + pageUrl(n.page) + '" class="px-3 py-2 rounded-md hover:bg-gray-100">' + L(n.id) + "</a>"; }).join("") +
            '<div class="flex items-center gap-2">' + langBtn("en", "English") + langBtn("he", "עברית") + "</div>" +
          "</div>" +
          '<div class="md:hidden flex items-center"><button type="button" id="menu-toggle" aria-label="Menu" aria-expanded="' + menuOpen + '" class="' + BTN + " " + BTN_GHOST + " " + SIZE_ICON + '">' +
            (menuOpen ? icon("x", "h-6 w-6") : icon("menu", "h-6 w-6")) + "</button></div>" +
        "</div></div>" +
        (menuOpen ?
          '<div class="md:hidden"><div class="px-2 pt-2 pb-3 space-y-1">' +
            nav.map(function (n) { return '<a href="' + pageUrl(n.page) + '" class="block px-3 py-2 rounded-md hover:bg-gray-100">' + L(n.id) + "</a>"; }).join("") +
            '<div class="flex gap-2 px-3 py-2">' + mobileLangBtn("en", "English") + mobileLangBtn("he", "עברית") + "</div>" +
          "</div></div>" : "") +
      "</nav>" +
      '<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">' + content + "</main>" +
      '<footer class="bg-white border-t border-gray-200 mt-12"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">' +
        '<div class="text-center text-sm text-gray-500">© ' + new Date().getFullYear() + " Cyber&lt;/&gt;Coding. " + L("allRightsReserved") + ".</div>" +
      "</div></footer>" +
      // Floating WhatsApp button (bottom-right corner in both languages; see .whatsapp-float in site.css).
      '<a href="https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(L("whatsappText")) + '" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="' + esc(L("whatsappLabel")) + '" title="' + esc(L("whatsappLabel")) + '">' +
        icon("message-circle", "", 28) + "</a>" +
    "</div>";
  }

  // ---------------------------------------------------------------- pages
  // ---------------------------------------------------------------- Code-Iot look: clouds + drifting code words
  var CODE_IOT_URL = "https://code-iot.onrender.com/welcome";
  var CODE_WORDS = ["print()", "def", "import", "for i in range()", "if:", "else:", "return", "while", "class", "True", "False",
    "None", "len()", "input()", "range()", "[]", "{}", "lambda", "self", "elif", "try:", "except", "map()", "f\"{x}\""];

  // Same pseudo-random layout on every visit (seeded), so the page doesn't jump around between loads.
  function codeWords(count, seed) {
    var x = seed * 9301 + 49297;
    function rnd() { x = (x * 9301 + 49297) % 233280; return x / 233280; }
    var out = "";
    for (var i = 0; i < count; i++) {
      var dur = 14 + rnd() * 16;
      out += '<span class="code-word" style="left:' + (2 + rnd() * 88).toFixed(1) + "%;font-size:" + (0.85 + rnd() * 0.6).toFixed(2) +
        "rem;--float-duration:" + dur.toFixed(1) + "s;animation-delay:-" + (rnd() * dur).toFixed(1) + "s;--drift:" + Math.round(rnd() * 80 - 40) + 'px">' +
        esc(CODE_WORDS[Math.floor(rnd() * CODE_WORDS.length)]) + "</span>";
    }
    return out;
  }

  function renderAppPromo() {
    var a = function (k) { return esc(t("home", k)); };
    return '<section class="py-12"><div class="app-promo">' +
      '<div class="app-promo-bg" aria-hidden="true">' + codeWords(14, 7) + "</div>" +
      '<div class="app-promo-inner">' +
        '<div class="app-promo-brand">' +
          '<div class="app-logo-mark"><img src="' + IMG + 'code-iot.png" alt="Code-Iot" loading="lazy"></div>' +
          '<div class="app-logo-title">Code-Iot</div>' +
        "</div>" +
        '<div class="app-promo-card">' +
          '<span class="app-badge">' + a("appBadge") + "</span>" +
          '<h2 class="app-promo-title">' + a("appTitle") + "</h2>" +
          '<p class="app-promo-desc">' + a("appDesc") + "</p>" +
          '<ul class="app-promo-list">' +
            ["appPoint1", "appPoint2", "appPoint3"].map(function (k) { return "<li>" + a(k) + "</li>"; }).join("") +
          "</ul>" +
          '<a class="app-cta" href="' + CODE_IOT_URL + '" target="_blank" rel="noopener noreferrer">' + a("appCta") + "</a>" +
        "</div>" +
      "</div>" +
    "</div></section>";
  }

  function renderHome() {
    var a = function (k) { return esc(t("home", k)); };
    var rtl = dir() === "rtl";
    var features = [
      { icon: "shield", title: "cybersecurityExpertise", desc: "cybersecurityDesc" },
      { icon: "code", title: "programmingMastery", desc: "programmingDesc" },
      { icon: "lock", title: "webSecurity", desc: "webSecurityDesc" },
      { icon: "globe", title: "realworldProjects", desc: "realworldDesc" }
    ];
    var why = [
      { icon: "users", bg: "bg-green-100", color: "text-green-600", title: "personalizedAttention", desc: "personalizedDesc", pre: false },
      { icon: "laptop", bg: "bg-purple-100", color: "text-purple-600", title: "industryExperience", desc: "industryDesc", pre: true },
      { icon: "square-terminal", bg: "bg-orange-100", color: "text-orange-600", title: "handsOnProjects", desc: "handsOnDesc", pre: false }
    ];

    return '<div class="space-y-16" dir="' + dir() + '">' +
      // The original renders a <style> tag first, which gives the hero the space-y-16 top margin.
      '<style></style>' +
      '<section class="relative py-12 md:py-20 overflow-hidden"><div class="relative"><div class="text-center">' +
        // Clouds + drifting code words behind the character (same look as the Code-Iot app).
        '<div class="hero-sky soft mb-8">' +
          '<div class="hero-sky-bg" aria-hidden="true">' + codeWords(18, 1) + "</div>" +
          '<div class="hero-sky-content flex justify-center"><div class="glitch-container">' +
            '<img src="' + IMG + 'instructor.png" alt="Tech Instructor" class="glitch-image w-64 h-64 md:w-96 md:h-96 object-contain">' +
          "</div></div>" +
        "</div>" +
        '<h1 class="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-4">' + a("heroTitle") + "</h1>" +
        '<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">' + a("heroSubtitle") + "</p>" +
        '<div class="flex flex-col sm:flex-row justify-center gap-4">' +
          '<a href="' + pageUrl("AboutMe") + '" class="' + BTN + " " + BTN_BLUE + " " + SIZE_LG + ' w-full sm:w-auto">' + a("exploreAboutMe") + chevron() + "</a>" +
          '<a href="' + pageUrl("Contact") + '" class="' + BTN + " " + BTN_OUTLINE + " " + SIZE_LG + ' w-full sm:w-auto">' + a("contactMe") + "</a>" +
        "</div>" +
      "</div></div></section>" +

      '<section class="py-12"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">' +
        features.map(function (f) {
          return '<div class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">' +
            '<div class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">' + icon(f.icon, "h-6 w-6 text-blue-600") + "</div>" +
            '<h3 class="text-xl font-semibold mb-2">' + a(f.title) + "</h3>" +
            '<p class="text-gray-600">' + a(f.desc) + "</p></div>";
        }).join("") +
      "</div></section>" +

      renderAppPromo() +

      '<section class="py-12"><div class="grid md:grid-cols-2 gap-12 items-center ' + (rtl ? "md:grid-flow-dense" : "") + '">' +
        '<div><h2 class="text-3xl font-bold mb-6">' + a("whyLearnWithMe") + '</h2><div class="space-y-4">' +
          why.map(function (w) {
            return '<div class="flex items-start gap-4">' +
              '<div class="h-8 w-8 rounded-lg ' + w.bg + " flex items-center justify-center flex-shrink-0 " + (rtl ? "order-last" : "") + '">' + icon(w.icon, "h-4 w-4 " + w.color) + "</div>" +
              '<div><h3 class="text-lg font-semibold mb-1">' + a(w.title) + "</h3>" +
              '<p class="text-gray-600' + (w.pre ? " whitespace-pre-line" : "") + '">' + a(w.desc) + "</p></div></div>";
          }).join("") +
        "</div></div>" +
        '<div class="relative"><div class="aspect-video rounded-xl overflow-hidden shadow-2xl">' +
          '<img src="' + IMG + 'hack.jpg" alt="Coding Environment" class="w-full h-full object-cover" loading="lazy"></div></div>' +
      "</div></section>" +

      '<section class="py-12"><div class="text-center">' +
        '<h2 class="text-3xl font-bold mb-6">' + a("readyToStart") + "</h2>" +
        '<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">' + a("takeFirstStep") + "</p>" +
        '<a href="' + pageUrl("Contact") + '" class="' + BTN + " " + BTN_BLUE + " " + SIZE_LG + '">' + a("getStartedNow") + chevron() + "</a>" +
      "</div></section>" +
    "</div>";
  }

  function renderAbout() {
    var a = function (k) { return esc(t("about", k)); };
    var expertise = [
      { icon: "shield", key: "expertiseCybersecurity" },
      { icon: "code", key: "expertisePython" },
      { icon: "terminal", key: "expertiseLinux" },
      { icon: "layers", key: "expertiseVM" }
    ];
    return '<div class="max-w-4xl mx-auto" dir="' + dir() + '">' +
      '<div class="mb-10 text-center">' +
        '<h1 class="text-3xl md:text-4xl font-bold mb-4">' + a("aboutMeTitle") + "</h1>" +
        '<p class="text-xl text-gray-600 max-w-2xl mx-auto">' + a("aboutMeSubtitle") + "</p>" +
      "</div>" +
      '<div class="grid md:grid-cols-3 gap-8 mb-12">' +
        '<div class="md:col-span-1">' +
          '<div class="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 p-1"><div class="rounded-xl overflow-hidden">' +
            '<img src="' + IMG + 'profile.jpg" alt="Teacher Profile" class="w-full h-full object-cover"></div></div>' +
          '<div class="mt-6 space-y-4">' +
            '<div class="flex items-center gap-2">' + icon("award", "w-5 h-5 text-blue-600") + '<h3 class="font-medium">' + a("certifications") + "</h3></div>" +
            '<ul class="space-y-2 text-sm text-gray-600 ml-7"><li>' + a("cert1") + "</li><li>" + a("cert2") + "</li><li>" + a("cert3") + "</li></ul>" +
            '<div class="flex items-center gap-2">' + icon("graduation-cap", "w-5 h-5 text-blue-600") + '<h3 class="font-medium">' + a("education") + "</h3></div>" +
            '<p class="text-sm text-gray-600 ml-7 whitespace-pre-line">' + a("educationDetails") + "</p>" +
          "</div>" +
        "</div>" +
        '<div class="md:col-span-2 space-y-8"><div class="' + CARD + '"><div class="' + CARD_CONTENT + ' pt-6">' +
          '<h2 class="text-xl font-semibold mb-4">' + a("myStory") + "</h2>" +
          '<p class="text-gray-600 mb-6 whitespace-pre-line">' + a("myStoryContent") + "</p>" +
          '<h2 class="text-xl font-semibold mb-4">' + a("expertise") + "</h2>" +
          '<div class="grid grid-cols-2 gap-4">' +
            expertise.map(function (e) {
              return '<div class="flex items-center gap-3"><div class="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">' +
                icon(e.icon, "h-5 w-5 text-blue-600") + "</div><span>" + a(e.key) + "</span></div>";
            }).join("") +
          "</div>" +
          '<h2 class="text-xl font-semibold mt-8 mb-4">' + a("teachingPhilosophy") + "</h2>" +
          '<p class="text-gray-600 whitespace-pre-line">' + a("philosophyContent") + "</p>" +
        "</div></div></div>" +
      "</div>" +
    "</div>";
  }

  var CATEGORY_COLORS = {
    cybersecurity: "bg-blue-100 text-blue-800",
    programming: "bg-green-100 text-green-800",
    ethical_hacking: "bg-purple-100 text-purple-800",
    web_security: "bg-red-100 text-red-800"
  };

  function filteredPosts() {
    var posts = BLOG_POSTS.filter(function (p) { return !p.language || p.language === lang; });
    if (blogState.category !== "all") posts = posts.filter(function (p) { return p.category === blogState.category; });
    if (blogState.search) {
      var q = blogState.search.toLowerCase();
      posts = posts.filter(function (p) {
        return (p.title || "").toLowerCase().indexOf(q) !== -1 || (p.content || "").toLowerCase().indexOf(q) !== -1;
      });
    }
    return posts;
  }

  function renderBlogList() {
    var C = function (k) { return esc(t("blog", k)); };
    var posts = filteredPosts();
    if (!posts.length) return '<div class="text-center py-8"><p class="text-gray-500">' + C("noBlogPosts") + "</p></div>";
    return '<div class="space-y-6">' + posts.map(function (p) {
      return '<div class="' + CARD + '">' +
        '<div class="' + CARD_HEADER + '">' +
          '<div class="' + BADGE + " mb-2 " + (CATEGORY_COLORS[p.category] || "bg-gray-100 text-gray-800") + '">' + esc((p.category || "").replace(/_/g, " ")) + "</div>" +
          '<div class="tracking-tight text-xl font-bold">' + esc(p.title) + "</div>" +
        "</div>" +
        '<div class="' + CARD_CONTENT + '"><p class="text-gray-600">' + esc((p.content || "").substring(0, 200)) + "...</p></div>" +
        '<div class="' + CARD_FOOTER + '"><button type="button" class="' + BTN + " " + BTN_OUTLINE + " " + SIZE_DEFAULT + ' mt-2">' + C("readMore") + chevron() + "</button></div>" +
      "</div>";
    }).join("") + "</div>";
  }

  function renderBlogTabs() {
    var C = function (k) { return esc(t("blog", k)); };
    var cats = [
      { id: "all", label: "All" },
      { id: "cybersecurity", label: C("cybersecurity") },
      { id: "programming", label: C("programming") },
      { id: "ethical_hacking", label: C("ethical_hacking") },
      { id: "web_security", label: C("web_security") }
    ];
    return '<div role="tablist" dir="' + dir() + '" class="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground flex flex-wrap">' +
      cats.map(function (c) {
        var active = blogState.category === c.id;
        return '<button type="button" role="tab" aria-selected="' + active + '" data-state="' + (active ? "active" : "inactive") + '" data-category="' + c.id +
          '" class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">' +
          c.label + "</button>";
      }).join("") + "</div>";
  }

  function renderBlog() {
    var C = function (k) { return esc(t("blog", k)); };
    var rtl = dir() === "rtl";
    return '<div class="max-w-6xl mx-auto" dir="' + dir() + '">' +
      '<div class="mb-8 text-center"><h1 class="text-3xl font-bold mb-4">' + C("blogTitle") + '</h1><p class="text-gray-600 max-w-3xl mx-auto">' + C("blogSubtitle") + "</p></div>" +
      '<div class="flex flex-col md:flex-row gap-6 mb-8">' +
        '<div class="w-full md:w-2/3">' +
          '<div class="relative mb-6">' +
            icon("search", "absolute " + (rtl ? "right-3" : "left-3") + " top-1/2 transform -translate-y-1/2 text-gray-400") +
            '<input id="blog-search" type="text" class="' + INPUT + " " + (rtl ? "pr-10" : "pl-10") + '" placeholder="' + C("searchPlaceholder") + '" value="' + esc(blogState.search) + '">' +
          "</div>" +
          '<div id="blog-list">' + renderBlogList() + "</div>" +
        "</div>" +
        '<div class="w-full md:w-1/3"><div class="' + CARD + '">' +
          '<div class="' + CARD_HEADER + '"><div class="tracking-tight text-lg font-medium">' + C("categories") + "</div></div>" +
          '<div class="' + CARD_CONTENT + '" id="blog-tabs">' + renderBlogTabs() + "</div>" +
        "</div></div>" +
      "</div>" +
    "</div>";
  }

  function renderContact() {
    var g = function (k) { return esc(t("contact", k)); };
    var social = function (href, cls, ic, label) {
      return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-md ' + cls + ' text-white transition-colors">' +
        icon(ic, "", 20) + label + "</a>";
    };
    var field = function (id, type, label, required) {
      return '<div class="space-y-2"><label for="' + id + '" class="' + LABEL + '">' + label + "</label>" +
        '<input id="' + id + '" name="' + id + '" type="' + type + '" class="' + INPUT + '"' + (required ? " required" : "") + "></div>";
    };
    return '<div class="max-w-3xl mx-auto" dir="' + dir() + '">' +
      '<div class="mb-8 text-center"><h1 class="text-3xl font-bold mb-2">' + g("contactTitle") + '</h1><p class="text-gray-600">' + g("contactSubtitle") + "</p></div>" +
      '<div class="mb-10"><h2 class="text-xl font-semibold mb-4 text-center">' + g("connectWithMe") + "</h2>" +
        '<div class="flex flex-wrap justify-center gap-4">' +
          social(FACEBOOK_URL, "bg-blue-600 hover:bg-blue-700", "facebook", g("facebook")) +
          social("https://wa.me/" + WHATSAPP_NUMBER, "bg-green-600 hover:bg-green-700", "message-circle", g("whatsapp")) +
          social(LINKEDIN_URL, "bg-blue-800 hover:bg-blue-900", "linkedin", g("linkedin")) +
        "</div></div>" +
      '<div class="' + CARD + '">' +
        '<div class="' + CARD_HEADER + '"><div class="' + CARD_TITLE + '">' + g("contactMe") + "</div></div>" +
        '<div class="' + CARD_CONTENT + '">' +
          (contactSent ?
            '<div class="bg-green-50 text-green-800 p-4 rounded-md text-center"><p class="font-medium">' + g("thankYou") + "</p><p>" + g("getBackToYou") + "</p></div>" :
            '<form id="contact-form" class="space-y-6">' +
              field("name", "text", g("yourName"), true) +
              field("email", "email", g("yourEmail"), true) +
              field("phone", "tel", g("yourPhone"), false) +
              '<div class="space-y-2"><label for="message" class="' + LABEL + '">' + g("yourMessage") + "</label>" +
                '<textarea id="message" name="message" rows="5" class="' + TEXTAREA + '" required></textarea></div>' +
              // Hidden honeypot field: bots fill it in, people don't, and Formspree drops those submissions.
              '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none">' +
              (contactError ? '<div role="alert" class="bg-red-50 text-red-800 p-4 rounded-md text-center">' + g("sendError") + "</div>" : "") +
              '<button type="submit" class="' + BTN + " " + BTN_BLUE + " " + SIZE_DEFAULT + ' w-full"' + (contactSending ? " disabled" : "") + ">" + g(contactSending ? "sending" : "submit") + "</button>" +
            "</form>") +
        "</div>" +
      "</div>" +
    "</div>";
  }

  var PAGES = { Home: renderHome, AboutMe: renderAbout, Blog: renderBlog, Contact: renderContact };

  var PAGE_TITLES = {
    Home: { he: "Cyber</>Coding | שיעורים פרטיים בסייבר ותכנות", en: "Cyber</>Coding | Private Cybersecurity & Programming Lessons" },
    AboutMe: { he: "אודותיי | Cyber</>Coding", en: "About Me | Cyber</>Coding" },
    Blog: { he: "בלוג ומשאבים | Cyber</>Coding", en: "Blog & Resources | Cyber</>Coding" },
    Contact: { he: "צור קשר | Cyber</>Coding", en: "Contact | Cyber</>Coding" }
  };

  // ---------------------------------------------------------------- render + events
  var app = document.getElementById("app");

  function render() {
    document.documentElement.setAttribute("dir", dir());
    document.documentElement.setAttribute("lang", lang);
    app.innerHTML = renderLayout((PAGES[PAGE] || renderHome)());
    document.title = PAGE_TITLES[PAGE][lang];
  }

  function setLanguage(code) {
    lang = code === "he" ? "he" : "en";
    try { localStorage.setItem("language", lang); } catch (e) { /* storage blocked */ }
    render();
  }

  app.addEventListener("click", function (e) {
    var langBtn = e.target.closest("[data-lang]");
    if (langBtn) { setLanguage(langBtn.getAttribute("data-lang")); return; }

    if (e.target.closest("#menu-toggle")) { menuOpen = !menuOpen; render(); return; }

    var tab = e.target.closest("[data-category]");
    if (tab) {
      blogState.category = tab.getAttribute("data-category");
      document.getElementById("blog-tabs").innerHTML = renderBlogTabs();
      document.getElementById("blog-list").innerHTML = renderBlogList();
    }
  });

  app.addEventListener("input", function (e) {
    if (e.target.id === "blog-search") {
      blogState.search = e.target.value;
      document.getElementById("blog-list").innerHTML = renderBlogList();
    }
  });

  function sendViaWhatsApp(f) {
    var text = [
      t("contact", "yourName") + ": " + f.name.value,
      t("contact", "yourEmail") + ": " + f.email.value,
      f.phone.value ? t("contact", "yourPhone") + ": " + f.phone.value : null,
      "",
      f.message.value
    ].filter(function (x) { return x !== null; }).join("\n");
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    contactSent = true;
    render();
  }

  function sendViaFormspree(f) {
    var data = {
      name: f.name.value,
      email: f.email.value,
      phone: f.phone.value,
      message: f.message.value,
      _gotcha: f._gotcha.value,
      _subject: "Cyber</>Coding – new message from " + f.name.value
    };
    var keep = { name: data.name, email: data.email, phone: data.phone, message: data.message };
    contactSending = true;
    contactError = false;
    render();
    restoreForm(keep);
    fetch("https://formspree.io/f/" + FORMSPREE_FORM_ID, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error("Formspree responded " + res.status);
      contactSent = true;
    }).catch(function (err) {
      console.error("Error submitting form", err);
      contactError = true;
    }).then(function () {
      contactSending = false;
      render();
      if (!contactSent) restoreForm(keep);
    });
  }

  // Re-rendering rebuilds the form, so put back what the visitor typed.
  function restoreForm(values) {
    var f = document.getElementById("contact-form");
    if (!f) return;
    Object.keys(values).forEach(function (k) { if (f[k]) f[k].value = values[k]; });
  }

  app.addEventListener("submit", function (e) {
    if (e.target.id !== "contact-form") return;
    e.preventDefault();
    if (contactSending) return;
    if (FORMSPREE_FORM_ID) sendViaFormspree(e.target);
    else sendViaWhatsApp(e.target);
  });

  render();
})();
