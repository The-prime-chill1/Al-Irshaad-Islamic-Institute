export const programsData = {
  categories: [
    {
      id: "quran-tajweed",
      number: "01",
      title: "Qur'an Recitation & Memorization with Tajweed",
      shortTitle: "Qur'an & Tajweed",
      description: "Build a strong foundation in Qur'anic reading, develop fluent recitation with Tajweed and progress toward memorizing the Holy Qur'an.",
      icon: "book-open",
      ctaText: "Explore Qur'an Programs",
      programs: [
        {
          id: "nuurul-bayaan",
          title: "Nuurul Bayaan",
          subtitle: "Foundation in Qur'anic Reading & Arabic Pronunciation",
          level: "Beginners Level",
          ageGroup: "Kids aged 4+ and Adults",
          duration: "3–6 months",
          classes: "5 days per week",
          session: "45–60 minutes",
          prerequisite: "None (Zero Arabic background needed)",
          route: "/programs/nuurul-bayaan",
          badge: "Foundation Track",
          shortDesc: "The perfect step-by-step foundation course using the renowned Nuurul Bayaan methodology with strong focus on proper Makharij from day one."
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
          shortDesc: "Listen and recite verse-by-verse under dedicated teachers, mastering practical Tajweed rules, Waqf & Ibtida', and confident beautiful recitation."
        },
        {
          id: "hifdh",
          title: "Qur'an Memorization — Hifdh",
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
      title: "Fundamentals of Islamic Studies",
      shortTitle: "Islamic Studies (Age-Based)",
      description: "Build essential Islamic knowledge and learn how to practice Islam with understanding, confidence and beautiful character.",
      icon: "compass",
      ctaText: "Explore Islamic Studies",
      route: "/programs/islamic-studies",
      programs: [
        {
          id: "fundamentals-level-1",
          title: "Fundamentals — Level 1",
          subtitle: "Ages 5–10 Foundation",
          focus: "Iman, Salah, Wudu & Basic Islamic Knowledge",
          duration: "3–6 months per level",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "None",
          route: "/programs/islamic-studies",
          badge: "Ages 5–10",
          shortDesc: "Engaging, interactive lessons instilling the love of Allah, Prophet Muhammad ﷺ, daily prayers, and fundamental Islamic manners."
        },
        {
          id: "fundamentals-level-2",
          title: "Fundamentals — Level 2",
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
          title: "Fundamentals — Level 3",
          subtitle: "Ages 16–20 Youth & Adults",
          focus: "Aqeedah in Depth, Fasting, Zakah, Hajj & Hadith Studies",
          duration: "3–6 months per level",
          classes: "3 days per week",
          session: "45–60 minutes",
          prerequisite: "None",
          route: "/programs/islamic-studies",
          badge: "Ages 16–20 & Adults",
          shortDesc: "In-depth theological foundations, pillars of worship, 40 Hadith studies, and navigating modern ethical questions through an authentic Islamic worldview."
        }
      ]
    },
    {
      id: "advanced-islamic-studies",
      number: "03",
      title: "Advanced Islamic Studies",
      shortTitle: "Advanced Studies",
      description: "A deeper journey into Islamic knowledge for students ready to progress beyond the fundamentals.",
      icon: "feather",
      ctaText: "Explore Advanced Studies",
      route: "/programs/advanced-islamic-studies",
      programs: [
        {
          id: "advanced-studies-course",
          title: "Advanced Islamic Studies",
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
      id: "arabic-adhkaar",
      number: "04",
      title: "Arabic Language & Adhkaar",
      shortTitle: "Arabic & Adhkaar",
      description: "Essential linguistic understanding and daily spiritual fortification through authentic prophetic remembrances.",
      icon: "sparkles",
      ctaText: "Explore Arabic & Adhkaar",
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
          shortDesc: "Tailored for diaspora Muslims and international learners to understand the language of the Holy Qur'an directly."
        },
        {
          id: "adhkaar-memorization",
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
    }
  ],

  nuurulBayaanDetails: {
    title: "Foundation in Qur'anic Reading & Arabic Pronunciation",
    subtitle: "Nuurul Bayaan — Beginners Level",
    description: "The Nuurul Bayaan program is our step-by-step foundation course designed for kids aged 4+ and adult beginners with no prior Arabic background. It is the perfect starting point before Qur'an recitation.\n\nUsing the Nuurul Bayaan methodology, students learn to read Arabic correctly from the very basics, with a strong focus on proper pronunciation (Makharij) from day one.",
    whatYouWillLearn: [
      { title: "Arabic Alphabet Mastery", desc: "Recognize, name, and articulate all 28 Arabic letters in isolated, initial, medial, and final forms." },
      { title: "Harakat & Short Vowels", desc: "Master Fat-hah, Kasrah, and Dammah with accurate vocal timing and zero distortion." },
      { title: "Sukoon & Tanween", desc: "Confidently recite resting letters (Sukoon) and double-vowel nunations (Tanween)." },
      { title: "Madd & Leen", desc: "Understand vowel elongation rules and subtle soft diphthongs (Waaw and Yaa)." },
      { title: "Shaddah & Advanced Joining", desc: "Read doubled consonants (Tashdeed) and smoothly join multi-syllable Qur'anic words." },
      { title: "Qur'anic Vocabulary Practice", desc: "Direct reading exercises from authentic Qur'anic verses preparing for full recitation." }
    ],
    features: [
      { title: "1-on-1 Live Classes", desc: "Dedicated teacher listening to every single phoneme in real time." },
      { title: "Tajweed from the Start", desc: "Learn correct articulation points (Makharij) before bad habits form." },
      { title: "Interactive Learning for Kids", desc: "Engaging visual aids, gentle encouragement, and joyful pacing." },
      { title: "Patient Approach for Adults", desc: "Dignified, comfortable, and personalized private sessions." },
      { title: "Smooth Transition", desc: "Direct pathway to fluent Qur'an recitation upon graduation." }
    ],
    details: {
      duration: "3–6 months",
      classes: "5 days per week",
      session: "45–60 minutes",
      prerequisite: "None",
      students: "Kids aged 4+ and adults",
      goal: "By the end of this program, the student will be able to read the Holy Qur'an independently with correct pronunciation, In Sha Allah."
    }
  },

  quranRecitationDetails: {
    title: "Qur'an Recitation with Tajweed",
    subtitle: "Fluent Verse-by-Verse Recitation & Rules Mastery",
    description: "This program is for students who have completed Nuurul Bayaan or can already read Arabic and want to recite the Holy Qur'an fluently with correct Tajweed.\n\nOur teachers listen to students verse-by-verse, correcting pronunciation, articulation points (Makharij) and Tajweed rules in a patient and encouraging way.",
    whatYouWillLearn: [
      { title: "Fluent Recitation of Entire Qur'an", desc: "Build smooth, rhythmic reading capability across all 30 Juz' with teacher correction." },
      { title: "Noon Sakinah & Tanween Rules", desc: "Izhaar, Idghaam (with/without Ghunnah), Iqlab, and Ikhfa' practiced to automaticity." },
      { title: "Meem Sakinah Rules", desc: "Izhaar Shafawi, Idghaam Shafawi, and Ikhfa' Shafawi rules." },
      { title: "Rules of Madd (Elongation)", desc: "Natural Madd (Asli) and derived Madd (Far'i) including Muttasil, Munfasil, and Lazim." },
      { title: "Waqf & Ibtida' (Stopping & Starting)", desc: "Understanding pause symbols, safe stopping points, and preserving holy meaning." },
      { title: "Makharij & Sifaat of Letters", desc: "Deepening theoretical and practical mastery of throat, tongue, and lip articulation points." },
      { title: "Confident & Beautiful Recitation", desc: "Harmonizing rhythm, tone, and reverent pace in accordance with prophetic sunnah." }
    ],
    features: [
      { title: "1-on-1 Live Correction", desc: "No verse goes unreviewed; instant real-time correction." },
      { title: "Personalized Learning Pace", desc: "Progress comfortably based on your individual schedule and capacity." },
      { title: "Regular Revision Cycles", desc: "Weekly revision of covered surahs to consolidate fluency." },
      { title: "Fluency & Tajweed Checks", desc: "Periodic evaluations to track pronunciation accuracy." }
    ],
    details: {
      duration: "6–12 months",
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
    description: "Our Memorization Program is a structured, personalized journey to memorize the entire Holy Qur'an with perfect Tajweed and long-term retention.\n\nEach student receives a customized memorization plan based on their age, memory and available daily study time.",
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
        desc: "Systematic daily revision of the last seven days' lessons (Sabqi) to lock new portions into intermediate memory."
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
      { title: "Memorization with Applied Tajweed", desc: "Preserving exact Tajweed rules during memorized recitation." },
      { title: "Correct Pronunciation & Makharij", desc: "Uncompromising clarity on every letter and Harakah." },
      { title: "Strong Memory & Recall Techniques", desc: "Proven visual and acoustic recall strategies for long-term retention." },
      { title: "Long-term Revision System", desc: "Building a lifelong daily habit of Qur'an maintenance." }
    ],
    features: [
      { title: "Dedicated Haafidh/Haafidhah Mentor", desc: "Learn directly from certified Huffaz with years of teaching experience." },
      { title: "Daily Listening and Correction", desc: "Consistent daily accountability and individualized feedback." },
      { title: "Motivation and Spiritual Guidance", desc: "Continuous encouragement to keep the sacred intention pure." },
      { title: "Monthly Progress Reports for Parents", desc: "Detailed tracking of pages memorized, revision scores, and attendance." },
      { title: "Hifz Competitions & Encouragement", desc: "Internal challenges to boost enthusiasm and excellence." },
      { title: "Ijazah Certification", desc: "Formal Sanad and certificate upon verified completion of the Holy Qur'an." }
    ],
    details: {
      duration: "2–4 years",
      pace: "½ page to 1 page per day",
      classes: "5 days per week recommended",
      session: "45–60 minutes",
      prerequisite: "Fluent Qur'an Recitation with Tajweed",
      goal: "To produce Huffaz who not only memorize, but recite with Tajweed, understand and live by the Qur'an."
    }
  },

  islamicStudiesDetails: {
    title: "Fundamentals of Islamic Studies",
    subtitle: "Belief, Practice, Character & Tarbiyah for Every Age",
    description: "This essential program is designed for children, teens, adults and new Muslims who want to learn and practice Islam with correct knowledge and confidence.\n\nIt complements Qur'an classes perfectly. Students don't simply learn information. They learn how to live Islam daily with love and understanding.",
    ageTracks: [
      {
        level: "LEVEL 1",
        ageGroup: "Ages 5–10",
        title: "Foundations of Iman & Worship",
        focus: ["Iman in Allah & His Angels", "Practical Salah & Daily Steps", "Step-by-Step Wudu Practice", "Basic Islamic Manners & Adab"],
        color: "emerald"
      },
      {
        level: "LEVEL 2",
        ageGroup: "Ages 11–15",
        title: "Fiqh, Seerah & Prophetic Guidance",
        focus: ["Detailed Fiqh of Taharah & Salah", "Life of Prophet Muhammad ﷺ (Seerah)", "Stories of the Noble Prophets", "Islamic Moral Ethics & Identity"],
        color: "gold"
      },
      {
        level: "LEVEL 3",
        ageGroup: "Ages 16–20 & Adults",
        title: "In-Depth Aqeedah, Worship & Hadith",
        focus: ["Aqeedah in Depth & Tawheed", "Fiqh of Sawm (Fasting), Zakah & Hajj", "Comprehensive Hadith Studies", "Navigating Modern Challenges"],
        color: "charcoal"
      }
    ],
    curriculumSections: [
      {
        title: "Aqeedah — Islamic Beliefs",
        topics: [
          "Six Pillars of Iman",
          "Tawheed (Ruboobiyyah, Uloohiyyah, Asma wa Sifat)",
          "Love for Allah and His Messenger ﷺ",
          "Belief in Angels and Divine Books",
          "Belief in all Prophets and Messengers",
          "Day of Judgment & The Hereafter",
          "Belief in Divine Decree (Qadr)"
        ]
      },
      {
        title: "Fiqh of Worship",
        topics: [
          "Taharah (Purity, Cleanliness, Najasah removal)",
          "Wudu (Obligatory steps, Sunnahs, Invalidation)",
          "Salah (Pillars, Conditions, Sunnahs, Nullifiers)",
          "Sawm (Fasting rules, Ramadan virtues, Etiquettes)",
          "Zakah (Obligation, Calculation, Beneficiaries)",
          "Hajj & Umrah (Rites, Significance, Spiritual lessons)"
        ]
      },
      {
        title: "Seerah & Stories of the Prophets",
        topics: [
          "Life of Prophet Muhammad ﷺ (Makkah & Madinah periods)",
          "Stories of the Prophets from Adam (AS) to Isa (AS)",
          "Stories of the Noble Companions (Sahabah)",
          "Character Building (Sidq, Amanah, Sabr, Birr al-Walidayn)",
          "Living Islam in School, Work, and Modern Society"
        ]
      }
    ],
    features: [
      { title: "Age-Wise Curriculum", desc: "Carefully tailored content suited to the cognitive stage of each student." },
      { title: "1-on-1 & Small Group Learning", desc: "Choose between focused private coaching or collaborative peer learning." },
      { title: "Interactive Quizzes & Activities", desc: "Reinforce learning through visual decks, quizzes, and engaging worksheets." },
      { title: "Real-Life Practical Application", desc: "Focus on how to implement every lesson immediately in daily routine." },
      { title: "Tarbiyah-Focused Teaching", desc: "Nurturing genuine love for Allah and moral uprightness in every session." }
    ],
    details: {
      duration: "3–6 months per level",
      classes: "3 days per week",
      session: "45–60 minutes",
      prerequisite: "None"
    }
  }
};
