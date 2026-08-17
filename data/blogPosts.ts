export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
  content: string[]; // Structured paragraphs for clean rendering
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "demystifying-saturn-return-vedic-astrology",
    title: "Understanding Your Shani Sade Sati: A Guide to Saturn's Cycles",
    excerpt:
      "Saturn's transit is often feared, but in Jyotish, it acts as a supreme teacher. Discover how to align with Shani rather than resist his lessons.",
    category: "Vedic Wisdom",
    readTime: "6 min read",
    date: "Aug 12, 2026",
    author: "Suman Adhikari",
    featured: true,
    content: [
      "In Vedic Astrology (Jyotish), Shani (Saturn) holds a unique role as the dispenser of Karma. The 7.5-year period known as Sade Sati occurs when Saturn transits the sign prior to, during, and after your natal Moon. While modern narratives often depict Sade Sati purely as a period of hardship, ancient wisdom frames it as a grand spiritual realignment.",
      "The primary purpose of Saturn is structural refinement. Like a master craftsman removing excess stone to reveal a statue, Saturn strips away superficial attachments, false security, and unviable ambitions. What remains is authentic, grounded, and durable.",
      "To navigate this cycle effectively, one must practice discipline (Tapas), humility, and consistent selfless service (Seva). By aligning your daily habits with Saturnian principles—truthfulness, routine, and patience—the period transforms from a time of friction into an era of deep, lasting mastery."
    ]
  },
  {
    id: "2",
    slug: "palmistry-mount-of-jupiter-meaning",
    title: "The Mount of Jupiter: Deciphering Leadership and Purpose in Your Palms",
    excerpt:
      "Explore the key structural indicators on your hand that reveal innate leadership qualities, spiritual ambition, and career alignment.",
    category: "Palmistry",
    readTime: "4 min read",
    date: "Jul 28, 2026",
    author: "Suman Adhikari",
    content: [
      "Located directly beneath the index finger, the Mount of Jupiter (Guru Parvat) represents personal ambition, leadership capabilities, morality, and spiritual wisdom. In structural palmistry, the height, firmness, and markings on this mount provide direct insights into your natural authority.",
      "A well-developed Mount of Jupiter indicates high self-respect, empathy, and natural organizational skills. Individuals with prominent Jupiter mounts often excel in teaching, counseling, public leadership, and entrepreneurial ventures.",
      "Look closely for vertical lines rising onto the mount—often called 'Lines of Ambition.' These signal focused drive and successful self-directed milestones throughout one's life. Crosses or star patterns here frequently point to strong marital alignment and noble public recognition."
    ]
  },
  {
    id: "3",
    slug: "numerology-life-path-and-destiny",
    title: "Combining Numerology with Your Kundali for Greater Insight",
    excerpt:
      "How birth numbers interact with planetary ruling periods (Dashas) to form a clear picture of timing and personal breakthrough periods.",
    category: "Numerology",
    readTime: "5 min read",
    date: "Jul 15, 2026",
    author: "Suman Adhikari",
    content: [
      "While a Janma Kundali provides a complex, 12-house map of life potentials, Numerology offers a streamlined vibrational frequency code through your Birth Date and Destiny Numbers. When synthesized together, they unlock precise timing for major life decisions.",
      "For instance, if your active Vedic Dasha is governed by Mercury (Budha), and your personal year number aligns with 5 (Mercury's vibration), you enter a powerful double-accentuated period for communication, business expansion, and learning.",
      "Understanding these mathematical cycles allows you to plan product launches, relocations, and financial investments in harmony with cosmic momentum."
    ]
  }
];