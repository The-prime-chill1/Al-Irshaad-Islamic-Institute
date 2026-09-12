export const programsData = {
  categories: [
    {
      id: "quran-tajweed",
      number: "01",
      title: "Qur'an Recitation and Memorization with Tajweed",
      shortTitle: "Qur'an & Tajweed",
      description: "Build a strong foundation in Qur'anic reading, develop fluent recitation with Tajweed, and progress toward memorizing the Holy Qur'an.",
      icon: "book-open",
      ctaText: "Explore Qur'an Programs",
      programs: [
        {
          id: "nuurul-bayaan",
          title: "Nuurul Bayaan",
          subtitle: "Foundation in Qur'anic Reading & Arabic Pronunciation",
          level: "Beginners Level",
          ageGroup: "Kids (ages 4+) and Adult Beginners",
          duration: "3–6 months",
          classes: "5 days per week",
          session: "45–60 minutes",
          prerequisite: "None (Zero Arabic background needed)",
          route: "/programs/nuurul-bayaan",
          badge: "Foundation Track",
          shortDesc: "Step-by-step foundation course using the proven Nuurul Bayaan methodology with strong focus on proper Makharij from day one."
        },
        {
          id: "quran-recitation",
          title: "Qur'an Recitation with Tajweed",
          subtitle: "Verse-by-Verse Fluency & Articulation Mastery",
          level: "Intermediate Level",
          ageGroup: "All Ages (Kids, Teens, Adults)",
          duration: "6–12 months",
          classes: "3–5 days per week",
          session: "45–60 minutes",
          prerequisite: "Ability to read Arabic / Completion of Nuurul Bayaan",
          route: "/programs/quran-recitation",
          badge: "Fluency Track",
          shortDesc: "Verse-by-verse patient listening and correction, mastering applied Tajweed rules, Waqf & Ibtida', and confident beautiful recitation."
        },
        {
          id: "hifdh",
          title: "Qur'an Memorization (Hifdh) with Tajweed",
          subtitle: "Complete Qur'an Memorization with 3-Cycle Retention",
          level: "Advanced Memorization",
          ageGroup: "Committed Kids, Youth & Adults",
          duration: "2–4 years (Pace: ½ to 1 page/day)",
          classes: "5 days per week recommended",
          session: "45–60 minutes",
          prerequisite: "Fluent Qur'an Recitation with Tajweed",
          route: "/programs/hifdh",
          badge: "Hifdh Track",
          shortDesc: "A structured, personalized journey using our 3-Cycle Method (Talqeen, Muraajah, Manzil) with dedicated Haafidh mentors leading to Ijazah certification."
        }
      ]
    },
    {
      id: "islamic-studies-fundamentals",
      number: "02",
      title: "The Fundamentals of Islamic Studies",
      shortTitle: "Fundamentals of Islamic Studies",
      description: "Build essential Islamic knowledge and learn how to practice Islam with understanding, confidence, and beautiful character.",
      icon: "compass",
      ctaText: "Explore Islamic Studies",
      route: "/programs/islamic-studies",
      programs: [
        {
          id: "fundamentals-level-1",
          title: "Fundamentals — Level 1 (Beginner)",
          subtitle: "Ages 5–10 Foundation",
          focus: "Iman, Salah, Wudu & Basic Islamic Knowledge",
          duration: "3–6 months per level",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "None — Open to all",
          route: "/programs/islamic-studies",
          badge: "Ages 5–10",
          shortDesc: "Engaging, interactive lessons instilling the love of Allah, Prophet Muhammad ﷺ, daily prayers, and fundamental Islamic manners."
        },
        {
          id: "fundamentals-level-2",
          title: "Fundamentals — Level 2 (Intermediate)",
          subtitle: "Ages 11–15 Intermediate",
          focus: "Detailed Fiqh, Seerah & Stories of the Prophets",
          duration: "3–6 months per level",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "Basic Islamic Knowledge",
          route: "/programs/islamic-studies",
          badge: "Ages 11–15",
          shortDesc: "Practical Fiqh of Taharah and Salah, rich biographical exploration of the Prophets, and building resilient Islamic identity for pre-teens."
        },
        {
          id: "fundamentals-level-3",
          title: "Fundamentals — Level 3 (Advanced)",
          subtitle: "Ages 16–20 & Adults",
          focus: "Aqeedah in Depth, Fasting, Zakah, Hajj & Hadith Studies",
          duration: "3–6 months per level",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "None",
          route: "/programs/islamic-studies",
          badge: "Ages 16–20 & Adults",
          shortDesc: "In-depth theological foundations, pillars of worship, Hadith studies, and navigating modern ethical questions through an authentic Islamic worldview."
        }
      ]
    },
    {
      id: "advanced-islamic-studies",
      number: "03",
      title: "Advance Level in Islamic Studies",
      shortTitle: "Advance Islamic Studies",
      description: "A deeper journey into classical Islamic sciences for students ready to progress beyond the fundamentals.",
      icon: "feather",
      ctaText: "Explore Advanced Studies",
      route: "/programs/advanced-islamic-studies",
      programs: [
        {
          id: "advanced-studies-course",
          title: "Advance Level in Islamic Studies",
          subtitle: "Higher Classical Islamic Sciences",
          focus: "Advanced Aqeedah, Usul al-Fiqh, Ulum al-Qur'an & Hadith Terminology",
          duration: "6–12 months",
          classes: "3 days per week",
          session: "60 minutes",
          prerequisite: "Completion of Fundamentals or equivalent background",
          route: "/programs/advanced-islamic-studies",
          badge: "Advanced Level",
          shortDesc: "For serious students seeking structured classical scholarly foundations under qualified traditional instructors."
        }
      ]
    },
    {
      id: "adhkaar-memorization",
      number: "04",
      title: "Adhkaar Memorization",
      shortTitle: "Adhkaar Memorization",
      description: "Daily spiritual fortification through authentic prophetic remembrances with correct pronunciation and understanding.",
      icon: "sparkles",
      ctaText: "Explore Adhkaar",
      route: "/programs/arabic-adhkaar",
      programs: [
        {
          id: "adhkaar-course",
          title: "Adhkaar Memorization",
          subtitle: "Daily Prophetic Remembrances",
          focus: "Morning & Evening Adhkaar, Prayers Duas & Fortress of the Muslim",
          duration: "2–3 months",
          classes: "2–3 days per week",
          session: "30–45 minutes",
          prerequisite: "None",
          route: "/programs/arabic-adhkaar",
          badge: "Spiritual Track",
          shortDesc: "Memorize authentic daily prophetic supplications with correct pronunciation, meanings, and practical daily habit formation."
        }
      ]
    },
    {
      id: "arabic-language",
      number: "05",
      title: "Arabic Language for English Speakers",
      shortTitle: "Arabic for English Speakers",
      description: "Tailored for diaspora Muslims and international learners to understand the language of the Holy Qur'an directly.",
      icon: "sparkles",
      ctaText: "Explore Arabic",
      route: "/programs/arabic-adhkaar",
      programs: [
        {
          id: "arabic-english-speakers",
          title: "Arabic Language for English Speakers",
          subtitle: "Qur'anic & Conversational Arabic",
          focus: "Grammar, Vocabulary, Sentence Construction & Qur'anic Comprehension",
          duration: "6–12 months",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "Ability to read Arabic script",
          route: "/programs/arabic-adhkaar",
          badge: "Language Track",
          shortDesc: "Learn essential vocabulary, grammar rules, and sentence structures to understand Qur'anic Arabic in simplified expressions."
        }
      ]
    }
  ],

  nuurulBayaanDetails: {
    title: "Foundation in Qur'anic Reading & Arabic Pronunciation",
    subtitle: "Nuurul Bayaan — Beginners Level (Kids & Adults)",
    description: "The Nuurul Bayaan program is our step-by-step foundation course designed for kids (ages 4+) and adult beginners with no prior Arabic background. It is the perfect starting point before Qur'an recitation.\n\nUsing the proven Nuurul Bayaan methodology, students learn to read Arabic correctly from the very basics, with a strong focus on proper pronunciation (Makharij) from day one.",
    whatYouWillLearn: [
      { title: "Arabic Alphabet Mastery", desc: "Recognition, pronunciation, and writing of all Arabic letters." },
      { title: "Harakat & Vowels", desc: "Fatha, Damma, Kasra, and how they change letter sounds." },
      { title: "Sukoon & Tanween", desc: "Building fluency in joining letters and words." },
      { title: "Madd & Leen", desc: "Rules of elongation for beautiful recitation." },
      { title: "Shaddah & Advanced Joining", desc: "Reading complete words and sentences smoothly." },
      { title: "Qur'anic Vocabulary Practice", desc: "Applying rules directly on verses from the Qur'an." }
    ],
    features: [
      { title: "1-on-1 Live Classes", desc: "Personalized attention at the student's own pace." },
      { title: "Tajweed from the Start", desc: "Correct Makharij (articulation points) taught early to avoid mistakes later." },
      { title: "Interactive & Fun for Kids", desc: "Visual aids, repetition, and positive encouragement." },
      { title: "For Adults Too", desc: "Special patient approach for new Muslims and adult beginners." },
      { title: "Smooth Transition", desc: "Upon completion, student moves confidently to Fluent Qur'an Recitation." }
    ],
    details: {
      duration: "3–6 months (depending on age, consistency, and practice)",
      classes: "5 days per week",
      session: "45–60 minutes per session",
      prerequisite: "None",
      students: "Kids (ages 4+) and Adult Beginners",
      goal: "By the end of this program, the student will be able to read the Holy Qur'an independently with correct pronunciation, In Sha Allah."
    }
  },

  quranRecitationDetails: {
    title: "Qur'an Recitation with Tajweed",
    subtitle: "Verse-by-Verse Fluency & Articulation Mastery",
    description: "This program is for students who have completed Nuurul Bayaan (or can already read Arabic) and want to recite the Holy Qur'an fluently with correct Tajweed.\n\nOur qualified teachers listen to each student verse-by-verse, correcting pronunciation, articulation points (Makharij), and Tajweed rules in a patient and encouraging way.",
    whatYouWillLearn: [
      { title: "Fluent Recitation of Entire Qur'an", desc: "Verse-by-verse recitation with teacher correction across all 30 Juz'." },
      { title: "Noon Sakinah & Tanween Rules", desc: "Izhaar, Idghaam (with/without Ghunnah), Iqlab, and Ikhfa' practiced to automaticity." },
      { title: "Meem Sakinah & Madd Rules", desc: "Izhaar Shafawi, Idghaam Shafawi, Ikhfa' Shafawi, and Madd rules." },
      { title: "Waqf & Ibtida' (Stopping & Starting)", desc: "Understanding pause symbols, safe stopping points, and preserving meaning." },
      { title: "Correct Makharij & Sifaat", desc: "Precise articulation points and characteristics of letters." },
      { title: "Beautiful & Confident Recitation", desc: "Recite beautifully and confidently like a Qari." }
    ],
    features: [
      { title: "1-on-1 Live Correction", desc: "Live correction and practice directly with your instructor." },
      { title: "Personalized Pace", desc: "No rush, no pressure — tailored to your individual schedule." },
      { title: "Regular Revision Cycles", desc: "Regular revision and fluency checks to ensure long-term retention." },
      { title: "Flexible Timings", desc: "Matched to your convenient timezone 24/7." }
    ],
    details: {
      duration: "6–12 months (depending on level and schedule)",
      classes: "3–5 days per week",
      session: "45–60 minutes",
      prerequisite: "Ability to read Arabic / Completion of Nuurul Bayaan",
      students: "Children, Teens, and Adults worldwide",
      goal: "To recite the Holy Qur'an fluently and accurately with applied Tajweed rules."
    }
  },

  hifdhDetails: {
    title: "Qur'an Memorization (Hifdh) with Tajweed",
    subtitle: "A Sacred Journey of Complete Memorization & Retention",
    description: "Our Memorization Program is a structured, personalized journey to memorize the entire Holy Qur'an with perfect Tajweed and long-term retention.\n\nEach student gets a customized memorization plan based on their age, memory, and daily time, with a perfect balance of new lesson, recent revision and old revision.",
    threeCycleMethod: [
      {
        cycle: "01",
        name: "TALQEEN",
        arabic: "تَلْقِين",
        title: "Daily New Memorization",
        desc: "New verses are listened to, pronounced, and memorized directly with the teacher daily to guarantee flawless recitation before committing to memory."
      },
      {
        cycle: "02",
        name: "MURAAJAH",
        arabic: "مُرَاجَعَة",
        title: "Recent Revision",
        desc: "Systematic daily revision of the last 7 days' lessons (Sabqi) to lock new portions into intermediate memory."
      },
      {
        cycle: "03",
        name: "MANZIL",
        arabic: "مَنْزِل",
        title: "Long-Term Retention",
        desc: "Continuous, cumulative revision of previously memorized complete Juz' to ensure zero loss over months and years."
      }
    ],
    whatYouWillLearn: [
      { title: "Complete Memorization of the Holy Qur'an", desc: "Systematic progression through all 114 Surahs and 30 Juz'." },
      { title: "Memorization with Tajweed", desc: "Preserving exact Tajweed rules and correct pronunciation during recitation." },
      { title: "Strong Memory & Recall Techniques", desc: "Proven visual and acoustic recall strategies for long-term retention." },
      { title: "Lifelong Revision System", desc: "Revision system to never forget what you memorized." }
    ],
    features: [
      { title: "Dedicated Haafidh/Haafidhah Mentor", desc: "Your personal Haafidh/Haafidhah mentor for individual coaching." },
      { title: "Daily Listening & Correction", desc: "Daily listening, correction, and motivation." },
      { title: "Monthly Progress Reports for Parents", desc: "Detailed tracking of pages memorized and revision consistency." },
      { title: "Hifz Competitions & Encouragement", desc: "Positive encouragement and internal milestones." },
      { title: "Ijazah Certification", desc: "Formal Ijazah certification upon completion." }
    ],
    details: {
      duration: "2–4 years (depending on pace: ½ page to 1 page per day)",
      classes: "5 days per week recommended",
      session: "45–60 minutes",
      prerequisite: "Fluent Qur'an Recitation with Tajweed",
      goal: "To produce Huffaz who not only memorize, but recite with Tajweed, understand, and live by the Qur'an."
    }
  },

  islamicStudiesDetails: {
    title: "The Fundamentals of Islamic Studies",
    subtitle: "Belief, Practice, Character & Tarbiyah for Every Age",
    description: "This essential program is designed for kids (ages 5+), teens, adults, and new Muslims who want to learn and practice Islam with correct knowledge and confidence. It complements Qur'an classes perfectly.\n\nTaught in a simple, engaging, and age-appropriate way, students don't just learn information, they learn how to live Islam daily with love and understanding.",
    ageTracks: [
      {
        level: "LEVEL 1 (BEGINNER)",
        ageGroup: "Ages 5–10",
        title: "Iman, Salah, Wudu & Basic Islamic Knowledge",
        focus: ["Pillars of Iman & Tawheed", "Step-by-Step Wudu Practice", "How to Pray Salah with Meanings", "Basic Islamic Manners & Adab"],
        color: "emerald"
      },
      {
        level: "LEVEL 2 (INTERMEDIATE)",
        ageGroup: "Ages 11–15",
        title: "Detailed Fiqh, Seerah & Stories of Prophets",
        focus: ["Detailed Fiqh of Taharah & Salah", "Life of Prophet Muhammad ﷺ (Seerah)", "Stories of the Noble Prophets & Companions", "Islamic Moral Ethics & Identity"],
        color: "gold"
      },
      {
        level: "LEVEL 3 (ADVANCED)",
        ageGroup: "Ages 16–20 & Adults",
        title: "Aqeedah in Depth, Fasting, Zakah, Hajj & Hadith",
        focus: ["Aqeedah in Depth & Tawheed", "Fiqh of Sawm (Fasting), Zakah & Hajj", "40 Hadith Studies & Applications", "Navigating Modern Challenges"],
        color: "charcoal"
      }
    ],
    curriculumSections: [
      {
        title: "1. Aqeedah (Islamic Beliefs)",
        topics: [
          "Pillars of Iman, Tawheed, and love for Allah & His Messenger ﷺ",
          "Belief in Angels, Books, Prophets, Day of Judgment & Divine Decree (Qadr)"
        ]
      },
      {
        title: "2. Fiqh of Worship (Practical Islam)",
        topics: [
          "Taharah (purification) & Wudu step-by-step",
          "Salah: How to pray correctly with meanings and etiquettes",
          "Sawm (fasting), Zakah, and Hajj made simple and practical"
        ]
      },
      {
        title: "3. Seerah & Stories of the Prophets",
        topics: [
          "Inspiring life of Prophet Muhammad ﷺ (Makkah & Madinah periods)",
          "Stories of the Prophets and Companions for character building"
        ]
      }
    ],
    features: [
      { title: "Age-Wise Curriculum", desc: "Separate engaging tracks for Kids (5 - 17) and Adults." },
      { title: "1-on-1 or Small Group", desc: "Choose personalized attention or interactive group learning." },
      { title: "Practical & Interactive", desc: "Quizzes, stories, activities, and real-life application." },
      { title: "Tarbiyah Focused", desc: "We nurture Iman, love for Islam, and good character not just lessons." }
    ],
    details: {
      duration: "Ongoing (3–6 months per level)",
      classes: "3 days per week (can be combined with Qur'an classes)",
      session: "45–60 minutes",
      prerequisite: "None — open to all",
      goal: "To raise confident Muslims who know their Lord, worship correctly, love the Prophet ﷺ, and embody beautiful Islamic character."
    }
  }
};
