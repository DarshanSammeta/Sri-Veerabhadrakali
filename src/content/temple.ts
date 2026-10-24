/**
 * All temple facts live here so administrators can replace placeholders
 * with verified information. Anything marked PENDING must be confirmed
 * by the temple administration before publishing.
 */
export const PENDING = "To be confirmed by temple administration";

export interface NewsArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string | null;
  body: string[];
}

export interface TempleInfo {
  name: string;
  shortName: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  mapsQuery: string | null;
  timings: { label: string; value: string | null }[];
  facilities: { name: string; confirmed: boolean }[];
  social: { label: string; href: string }[];
}
export const temple: TempleInfo = {
  name: "Sri Veerabhadrakali Temple",
  shortName: "Sri Veerabhadrakali",
  address: null as string | null, // e.g. "Street, Town, District, State, PIN"
  phone: null as string | null,
  email: null as string | null,
  mapsQuery: null as string | null, // set to the verified address to enable the map
  timings: [
    { label: "Morning Darshan", value: null as string | null },
    { label: "Evening Darshan", value: null as string | null },
    { label: "Special Days", value: null as string | null },
  ],
  facilities: ["Parking", "Footwear stand", "Drinking water", "Prasadam counter"].map((f) => ({
    name: f,
    confirmed: false,
  })),
  social: [] as { label: string; href: string }[], // add only official accounts
};

export const news: NewsArticle[] = [
  {
    slug: "festival-announcement",
    body: [
      "This is an administrator-confirmation placeholder, not a confirmed festival announcement.",
      "Dates, programme details and visitor arrangements will be published after approval by the temple administration.",
    ],
    category: "Festival Announcements",
    title: "Upcoming festival announcement",
    excerpt:
      "Placeholder — the temple office will publish confirmed festival dates and programme details here.",
    date: null as string | null,
  },
  {
    slug: "special-darshan-update",
    body: [
      "No special darshan schedule has been confirmed for this website.",
      "Confirmed timing changes and visitor arrangements will be published here by the temple administration.",
    ],
    category: "Special Darshan Updates",
    title: "Special darshan update",
    excerpt:
      "Placeholder — changes to darshan timings or special darshan arrangements will appear here.",
    date: null as string | null,
  },
  {
    slug: "community-activities",
    body: [
      "Community activity details are awaiting confirmation from the temple administration.",
      "Approved seva activities, volunteer opportunities and community programmes will be announced here.",
    ],
    category: "Community Activities",
    title: "Temple news and community activities",
    excerpt: "Placeholder — news about seva activities, volunteer drives and community programmes.",
    date: null as string | null,
  },
];

export const testimonials = [
  {
    quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
    name: "Devotee (placeholder)",
    location: null,
  },
  {
    quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
    name: "Devotee (placeholder)",
    location: null,
  },
  {
    quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
    name: "Devotee (placeholder)",
    location: null,
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What are the temple darshan timings?",
    a: `Darshan timings will be listed here once verified. ${PENDING}.`,
  },
  {
    q: "Where is Sri Veerabhadrakali Temple located?",
    a: `The verified temple address will be published here. ${PENDING}.`,
  },
  {
    q: "Are special sevas available?",
    a: `Archana, special puja, abhishekam and other sevas are listed on this page; availability and offerings are ${PENDING.toLowerCase()}.`,
  },
  {
    q: "Which festivals are celebrated?",
    a: `The temple's festival calendar will be shared here. ${PENDING}.`,
  },
  {
    q: "Is there parking near the temple?",
    a: `Parking information will be added once verified. ${PENDING}.`,
  },
  {
    q: "How can devotees contact the temple?",
    a: `Official contact details will be published here. ${PENDING}.`,
  },
];
