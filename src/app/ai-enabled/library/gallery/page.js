import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar"; 
import LibraryGallery from "@/components/sections/ai-enabled/library/library-gallery"; 

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Collaborations page title",
        metaDescription: "Industry Collaborations page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Library",
                href: "/",
            },
            {
                label: "FAQ's",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    gallerySection: {
        heading: "Gallery",
        gallery: [
            {
                id: 1,
                image: {
                    alternativeText: "Students working in computer lab at the library",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-1.jpg",
                },
            },
            {
                id: 2,
                image: {
                    alternativeText: "Library entrance with notice boards",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-2.jpg",
                },
            },
            {
                id: 3,
                image: {
                    alternativeText: "Bookshelves with library collection",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-3.jpg",
                },
            },
            {
                id: 4,
                image: {
                    alternativeText: "Students studying in reading hall",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-4.jpg",
                },
            },
            {
                id: 5,
                image: {
                    alternativeText: "Library reading area with seating",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-5.jpg",
                },
            },
            {
                id: 6,
                image: {
                    alternativeText: "Bookshelves with library collection near window",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-6.jpg",
                },
            },
            {
                id: 7,
                image: {
                    alternativeText: "Students studying at tables in library",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-7.jpg",
                },
            },
            {
                id: 8,
                image: {
                    alternativeText: "Students seated in lounge chairs reading",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-8.jpg",
                },
            },
            {
                id: 9,
                image: {
                    alternativeText: "Students seated at tables in main hall",
                    mime: "image/jpeg",
                    url: "/images/L-gallery-9.jpg",
                },
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryGallery data={local_data.gallerySection} />

        </>
    )
}

