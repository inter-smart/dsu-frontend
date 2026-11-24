import InnerHero from "@/components/layout/common/InnerHero"; 
import GalleryLibrary from "@/components/sections/library/GalleryLibrary";

const local_data = { 

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Gallery",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Gallery",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Gallery", href: "/" },
        ],
    },

    gallery: {
        title: "DSU Library",
        items: [
            { type: "image", src: "/images/library/gallery-1.jpg", alt: "Computer lab", caption: "Computer lab" },
            { type: "image", src: "/images/library/gallery-2.jpg", alt: "Library entrance" },
            { type: "image", src: "/images/library/gallery-3.jpg", alt: "Access gates" },
            // mp4 file, thumb is optional (first frame is used when it is missing)
            { type: "video", src: "/videos/library/tour.mp4", thumb: "/images/library/gallery-4.jpg", caption: "Library tour" },
            { type: "image", src: "/images/library/gallery-5.jpg", alt: "Reading area" },
            { type: "image", src: "/images/library/gallery-6.jpg", alt: "Bookshelves" },
            // YouTube, the thumbnail comes from the link
            { type: "youtube", src: "https://www.youtube.com/shorts/K3jX800AH3A", caption: "Library overview" },
            { type: "image", src: "/images/library/gallery-8.jpg", alt: "Lounge area" },
            { type: "image", src: "/images/library/gallery-9.jpg", alt: "Study zone" }, 
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <GalleryLibrary data={local_data.gallery}   />
        </>
    );
}