import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { Welcome } from "@/components/home/Welcome";
import { HeritageSection } from "@/components/home/HeritageSection";
import { Experiences } from "@/components/home/Experiences";
import { Sevas } from "@/components/home/Sevas";
import { Strip } from "@/components/home/Strip";
import { GallerySection } from "@/components/home/GallerySection";
import { Festivals } from "@/components/home/Festivals";
import { Testimonials } from "@/components/home/Testimonials";
import { NewsSection } from "@/components/home/NewsSection";
import { Banner } from "@/components/home/Banner";
import { Visit } from "@/components/home/Visit";
import { Faq } from "@/components/home/Faq";

const TITLE = "Sri Veerabhadrakali Temple — Darshan, Sevas, Festivals & Visit";
const DESC =
  "Discover the sacred heritage, darshan, sevas, festivals and visitor information of Sri Veerabhadrakali Temple.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HinduTemple",
          name: "Sri Veerabhadrakali Temple",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <Welcome />
      <HeritageSection />
      <Experiences />
      <Sevas />
      <Strip />
      <GallerySection />
      <Festivals />
      <Testimonials />
      <NewsSection />
      <Banner />
      <Visit />
      <Faq />
    </>
  );
}
