import type { LucideIcon } from "lucide-react";
import type { GalleryImage } from "@/components/temple/Gallery";
import {
  Flower2,
  ScrollText,
  PartyPopper,
  Landmark,
  Sparkles,
  BookOpen,
  Flame,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import heritage from "@/assets/heritage.jpg";
import ritual from "@/assets/ritual.jpg";
import festival from "@/assets/festival.jpg";
import devotees from "@/assets/devotees.jpg";
import landscape from "@/assets/landscape.jpg";
import lamps from "@/assets/lamps.jpg";

export const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Flower2,
    title: "Divine Darshan",
    text: "Seek blessings in the serene presence of the Goddess.",
  },
  {
    icon: ScrollText,
    title: "Sacred Traditions",
    text: "Rituals performed in keeping with time-honoured customs.",
  },
  {
    icon: PartyPopper,
    title: "Festival Celebrations",
    text: "Join devotees in vibrant, joyful sacred celebrations.",
  },
  {
    icon: Landmark,
    title: "Spiritual Heritage",
    text: "A place where faith and culture are lovingly preserved.",
  },
];

export const heritagePoints: { icon: LucideIcon; title: string }[] = [
  { icon: BookOpen, title: "Temple Traditions" },
  { icon: Sparkles, title: "Spiritual Significance" },
  { icon: Flame, title: "Sacred Rituals" },
  { icon: Landmark, title: "Cultural Heritage" },
];

export const experiences: {
  id: string;
  img: string;
  alt: string;
  title: string;
  text: string;
  cta: string;
  dark: boolean;
}[] = [
  {
    id: "darshan",
    img: lamps,
    alt: "Lamps glowing before a decorated shrine",
    title: "Sacred Darshan",
    text: "Step into the sanctum's serene atmosphere and offer your prayers before the Goddess with devotion and peace.",
    cta: "Explore Darshan",
    dark: false,
  },
  {
    id: "rituals",
    img: ritual,
    alt: "Priest performing aarti with a brass lamp",
    title: "Temple Rituals",
    text: "Daily worship, aarti and devotional practices are offered with care, in keeping with temple traditions.",
    cta: "Discover Rituals",
    dark: true,
  },
  {
    id: "celebrations",
    img: festival,
    alt: "Temple illuminated with lamps during a night festival",
    title: "Festivals and Celebrations",
    text: "Throughout the year the temple comes alive with festivals that unite the community in faith and joy.",
    cta: "Explore Festivals",
    dark: false,
  },
];

export const sevas: { img: string; title: string; text: string }[] = [
  { img: devotees, title: "Archana", text: "Offering of names and flowers to the Goddess." },
  { img: lamps, title: "Special Puja", text: "Dedicated worship for special intentions." },
  { img: ritual, title: "Abhishekam", text: "Sacred ritual bathing of the deity." },
  {
    img: festival,
    title: "Other Temple Sevas",
    text: "Further devotional services at the temple.",
  },
];

export const events: { img: string; title: string; text: string }[] = [
  {
    img: festival,
    title: "Annual Temple Festival",
    text: "The temple's grand annual celebration, bringing devotees together in prayer, music and festivity.",
  },
  {
    img: ritual,
    title: "Special Pooja Celebrations",
    text: "Special poojas held on auspicious days with elaborate rituals and offerings.",
  },
  {
    img: devotees,
    title: "Traditional Devotional Events",
    text: "Bhajans, discourses and devotional gatherings that keep traditions alive.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: hero,
    alt: "Temple gopuram at sunset",
    caption: "Temple exterior",
    className: "md:row-span-2",
  },
  { src: heritage, alt: "Carved stone pillars", caption: "Temple architecture" },
  { src: ritual, alt: "Aarti ritual", caption: "Traditional rituals" },
  { src: lamps, alt: "Lamps and marigold decoration", caption: "Festival decorations" },
  {
    src: festival,
    alt: "Devotees during a night festival",
    caption: "Devotees during celebrations",
    className: "col-span-2 md:col-span-1",
  },
  {
    src: landscape,
    alt: "Temple tank at sunrise",
    caption: "Sacred surroundings",
    className: "col-span-2",
  },
];
