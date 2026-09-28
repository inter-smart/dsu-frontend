import InnerHero from "@/components/layout/common/InnerHero";
import Gallery from "@/components/sections/gallery/gallery";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";

const local_data = {
  hero: {
    id: 1,
    heroMedia: {
      url: "/images/media-coverage-hero-644103.png",
      alternativeText: "Gallery",
      mime: "image/png",
    },
    title: "Gallery",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Gallery",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description:
      "Community outreach, campus visuals, and press coverage for Dayananda Sagar University — all in one place.",
    items: [
      {
        id: 1,
        category: "Events",
        title:
          "Awareness Campaign for Republic Day 2025 Online and Offline Events Celebration in University",
        images: ["/images/gallery-1.png", "/images/L-gallery-1.jpg", "/images/L-gallery-2.jpg"],
      },
      {
        id: 2,
        category: "Events",
        title: "Awareness Program On Elephantiasis",
        images: ["/images/gallery-3.png", "/images/L-gallery-3.jpg"],
      },
      {
        id: 3,
        category: "Sports",
        title: "7TH International Staff Tournament 2024-25 RUNNERS CRICKET",
        images: ["/images/gallery-9.png", "/images/L-gallery-4.jpg"],
      },
      {
        id: 4,
        category: "Campus",
        isVideo: true,
        title: "Campus Visit - 2026",
        images: ["/images/gallery-2.png", "/images/L-gallery-5.jpg", "/images/L-gallery-6.jpg"],
      },
      {
        id: 5,
        category: "Sports",
        title:
          "Represented Karnataka in UTT 86th Inter State Junior and Youth National Table Tennis Championship 2024",
        images: ["/images/gallery-4.png", "/images/L-gallery-7.jpg"],
      },
      {
        id: 6,
        category: "Events",
        title:
          "Expert talk on \"Empowering Educators: Elevating Lives through Personal and Professional Growth\"",
        images: ["/images/gallery-7.png", "/images/L-gallery-8.jpg"],
      },
      {
        id: 7,
        category: "Events",
        title: "Cheelur Village Visit Under Unnat Bharat Abhiyan (UBA)",
        images: ["/images/gallery-6.png", "/images/L-gallery-9.jpg"],
      },
      {
        id: 8,
        category: "Events",
        title: "Techspark MATLAB Expo 2024",
        images: ["/images/gallery-5.png", "/images/L-gallery-1.jpg"],
      },
      {
        id: 9,
        category: "Events",
        title: "\"Mastering Machine Learning: A Comprehensive Hands-On Bootcamp\"",
        images: ["/images/gallery-8.png", "/images/L-gallery-2.jpg"],
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <Gallery data={local_data?.gallery} />
      <FloatingContactRail />
    </>
  );
}
