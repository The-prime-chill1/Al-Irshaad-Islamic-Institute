/**
 * Al-Irshaad Islamic Institute
 * Course Pricing & Tuition Plans Data
 */

export const pricingData = {
  hero: {
    subtitle: "Transparent Global Tuition",
    title: "Affordable & Transparent Tuition for Authentic Islamic Education",
    description: "Quality one-on-one Qur'an and Islamic studies with certified Huffaz and scholars — structured to be accessible to families and students worldwide.",
    freeTrialBadge: "100% Free Placement Assessment & Trial Session"
  },

  plans: [
    {
      id: "starter",
      title: "Foundation Track",
      subtitle: "Ideal for beginners & busy schedules",
      priceUsd: 45,
      frequency: "per month",
      daysPerWeek: "2 Days / Week",
      sessionDuration: "30-40 mins per session",
      totalSessions: "8 live one-on-one classes / month",
      popular: false,
      badge: "Flexible Schedule",
      suitableFor: [
        "Nuurul Bayaan (Beginner Arabic Reading)",
        "Adhkaar Memorization & Daily Duas",
        "Weekend or Part-Time Students"
      ],
      features: [
        "1-on-1 Private Live Tutor",
        "Certified Azhari / Haafidh Instructor",
        "Flexible Timezone Scheduling",
        "Monthly Progress & Makharij Assessment",
        "Digital Class Materials & Audio Recitations",
        "Parent Progress Dashboard"
      ],
      ctaText: "Enroll in Foundation Track",
      ctaLink: "/enroll"
    },
    {
      id: "standard",
      title: "Standard Recitation & Islamic Studies",
      subtitle: "Our most popular track for steady fluency",
      priceUsd: 70,
      frequency: "per month",
      daysPerWeek: "3 Days / Week",
      sessionDuration: "30-45 mins per session",
      totalSessions: "12 live one-on-one classes / month",
      popular: true,
      badge: "Most Popular",
      suitableFor: [
        "Qur'an Recitation with Applied Tajweed",
        "Fundamentals of Islamic Studies (Ages 5–20+)",
        "Arabic Language for English Speakers"
      ],
      features: [
        "1-on-1 Dedicated Ustadh or Ustadha",
        "Personalized Verse-by-Verse Tajweed Corrections",
        "Full Fiqh, Aqeedah, Seerah & Akhlaaq Syllabus",
        "Weekly Homework & Recitation Review",
        "Free Makeup Classes for Rescheduled Sessions",
        "Official Certificate of Level Completion"
      ],
      ctaText: "Enroll in Standard Track",
      ctaLink: "/enroll"
    },
    {
      id: "intensive-hifdh",
      title: "Intensive Hifdh & Advanced Studies",
      subtitle: "Daily immersion for memorization & classical sciences",
      priceUsd: 110,
      frequency: "per month",
      daysPerWeek: "5 Days / Week",
      sessionDuration: "45-60 mins per session",
      totalSessions: "20 live one-on-one classes / month",
      popular: false,
      badge: "Hifdh Mastery",
      suitableFor: [
        "Qur'an Memorization (Hifdh 3-Cycle System)",
        "Advanced Classical Islamic Sciences",
        "Ijaazah Preparation with Sanad"
      ],
      features: [
        "Daily 1-on-1 Mentorship with Senior Haafidh",
        "3-Cycle Retention: Talqeen, Muraajah & Manzil",
        "Tajweed Theory (Tuhfat al-Atfal & Al-Jazariyyah)",
        "Usul al-Fiqh & Classical Arabic Mastery",
        "Quarterly Live Oral Sanad Assessments",
        "Direct Mentorship with Academic Deans"
      ],
      ctaText: "Enroll in Intensive Hifdh",
      ctaLink: "/enroll"
    }
  ],

  familyDiscount: {
    title: "Family & Sibling Discount",
    description: "We are committed to making Islamic education affordable for the whole household.",
    terms: [
      "10% discount for the second child/family member",
      "15% discount for the third child and beyond",
      "Unified family billing & coordinated class schedules"
    ]
  },

  guarantees: [
    {
      title: "Free Placement Assessment",
      desc: "Every student receives a free 1-on-1 evaluation session with a teacher before any fee is paid."
    },
    {
      title: "No Long-Term Contracts",
      desc: "All tuition is billed month-to-month. You can adjust your schedule or pause anytime."
    },
    {
      title: "Global Currency Friendly",
      desc: "Invoicing in USD ($), GBP (£), EUR (€), CAD ($), and local currency equivalents."
    },
    {
      title: "Need-Based Scholarships",
      desc: "Financial aid and subsidized seats available for deserving students upon verification."
    }
  ],

  faqs: [
    {
      q: "How does the free assessment class work?",
      a: "Before any payment is made, you will attend a free 1-on-1 live session where our certified teachers evaluate your current Arabic reading level, Tajweed proficiency, and Islamic knowledge. We then recommend the best track for you."
    },
    {
      q: "How are tuition payments processed?",
      a: "Tuition is billed monthly through secure digital invoicing via credit/debit card, bank transfer, or official school payment gateways. You will receive an official invoice with every payment."
    },
    {
      q: "Can I choose male or female teachers for my children?",
      a: "Yes, 100%. We have certified male Ustadhs and female Ustadhas so sisters and daughters can learn comfortably with qualified female instructors."
    },
    {
      q: "What if I need to reschedule a class?",
      a: "We offer flexible scheduling. As long as you notify your teacher 12 hours in advance, your class will be rescheduled without losing your session."
    },
    {
      q: "Are there any registration or admission fees?",
      a: "No. There are zero hidden fees, zero registration fees, and zero material fees. The monthly tuition covers all classes, resources, and level exams."
    }
  ]
};
