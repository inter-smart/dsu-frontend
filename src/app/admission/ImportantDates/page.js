import { permanentRedirect } from "next/navigation";

// Important Dates is now a CMS-driven Admission entry served by /admission/[slug]
export default function Page() {
    permanentRedirect("/admission/important-dates");
}
