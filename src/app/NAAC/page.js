import AccreditationPage, { generateMetadata as accreditationMetadata } from "../accreditions/[slug]/page";

// /NAAC renders the Strapi "naac" accreditation entry (same data as /accreditions/naac)
const params = Promise.resolve({ slug: "naac" });

export const generateMetadata = () => accreditationMetadata({ params });

export default function page() {
    return <AccreditationPage params={params} />;
}
