export const navigationData = {
  mainNav: [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    {
      title: "Programs",
      path: "/programs",
      hasDropdown: true,
      children: [
        {
          title: "All Programs Overview",
          path: "/programs",
          desc: "Explore all structured learning tracks"
        },
        {
          title: "Nuurul Bayaan (Beginner Reading)",
          path: "/programs/nuurul-bayaan",
          desc: "Step-by-step Arabic reading & phonetics"
        },
        {
          title: "Qur'an Recitation with Tajweed",
          path: "/programs/quran-recitation",
          desc: "Fluent verse-by-verse recitation with Tajweed"
        },
        {
          title: "Qur'an Memorization (Hifdh)",
          path: "/programs/hifdh",
          desc: "Complete memorization with 3-Cycle method"
        },
        {
          title: "Fundamentals of Islamic Studies",
          path: "/programs/islamic-studies",
          desc: "Age-appropriate tracks (Ages 5-10, 11-15, 16-20)"
        },
        {
          title: "Advanced Islamic Studies",
          path: "/programs/advanced-islamic-studies",
          desc: "Deeper journey into classical Islamic sciences"
        },
        {
          title: "Arabic Language & Adhkaar",
          path: "/programs/arabic-adhkaar",
          desc: "Arabic for English speakers & daily Adhkaar"
        }
      ]
    },
    { title: "Qur'an & Tajweed", path: "/programs/quran-recitation" },
    { title: "Islamic Studies", path: "/programs/islamic-studies" },
    { title: "How It Works", path: "/how-it-works" },
    { title: "For Parents", path: "/for-parents" },
    { title: "Teachers", path: "/teachers" },
    { title: "FAQs", path: "/faqs" },
    { title: "Contact", path: "/contact" }
  ],
  footerExplore: [
    { title: "Home", path: "/" },
    { title: "About Institute", path: "/about" },
    { title: "How Online Classes Work", path: "/how-it-works" },
    { title: "For Parents & Tarbiyah", path: "/for-parents" },
    { title: "Meet Our Teachers", path: "/teachers" },
    { title: "Frequently Asked Questions (FAQ)", path: "/faqs" },
    { title: "Contact Admissions", path: "/contact" }
  ],
  footerPrograms: [
    { title: "Nuurul Bayaan", path: "/programs/nuurul-bayaan" },
    { title: "Qur'an Recitation with Tajweed", path: "/programs/quran-recitation" },
    { title: "Qur'an Memorization (Hifdh)", path: "/programs/hifdh" },
    { title: "Fundamentals of Islamic Studies", path: "/programs/islamic-studies" },
    { title: "Advanced Islamic Studies", path: "/programs/advanced-islamic-studies" },
    { title: "Arabic Language for English Speakers", path: "/programs/arabic-adhkaar" },
    { title: "Adhkaar Memorization", path: "/programs/arabic-adhkaar" }
  ],
  footerLegal: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms & Conditions", path: "/terms-and-conditions" },
    { title: "FAQs", path: "/faqs" }
  ]
};
