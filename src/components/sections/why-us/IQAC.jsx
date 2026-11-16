import IQACAbout from "./iqac-about";
import IQACAccredition from "./IQAC-Accredition";
import IQACChairmanMessage from "./IQAC-chairmanMessage";
import IQACTeam from "./IQAC-team";
import IQACContact from "./IQAC-contact";
import IQACActivities from "./IQACActivities";
import { hasContent } from "@/lib/has-content";

// view "activities" renders the IQAC Activities page; anything else renders the About IQAC page.
// (Each is its own route now, so there is no tab switcher.)
export default function IQAC({ data, view }) {
    if (!data) return null;

    if (view === "activities") {
        if (!hasContent(data.activities?.items)) return null;
        return (
            <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] !pb-0">
                <div className="mt-[10px] pb-[50px]">
                    <IQACActivities data={data.activities} />
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] !pb-0">
            <div className="mt-[10px]">
                {hasContent(data.aboutIqacSection) && <IQACAbout data={data.aboutIqacSection} />}
                {(hasContent(data.accreditationsData?.cards) || hasContent(data.accreditationsData?.rankings)) && (
                    <IQACAccredition data={data.accreditationsData} />
                )}
                {hasContent(data.chairmanMessage) && <IQACChairmanMessage data={data.chairmanMessage} />}
                {hasContent(data.teamData?.tabs) && <IQACTeam data={data.teamData} />}
                {hasContent(data.contactData) && <IQACContact data={data.contactData} />}
            </div>
        </section>
    );
}
