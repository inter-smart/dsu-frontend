import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IQACAbout from "./iqac-about";
import IQACAccredition from "./IQAC-Accredition";
import IQACChairmanMessage from "./IQAC-chairmanMessage";
import IQACTeam from "./IQAC-team";
import IQACContact from "./IQAC-contact";
import IQACActivities from "./IQACActivities";

export default function IQAC({ data }) {
    if (!data) return null;

    const tabs = data.tabs || [];
    const defaultTab = tabs.find((tab) => tab.active)?.value || tabs[0]?.value || "about-iqac";

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] !pb-0">
            <Tabs defaultValue={defaultTab} className="w-full">
                <div className="container">
                    <TabsList
                        variant="line"
                        className="self-start inline-flex w-fit max-w-full p-0 mb-[25px] xl:mb-[35px] 2xl:mb-[45px] bg-white dark:bg-[#1A1A1A] rounded-[8px] lg:rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.4)] border border-transparent dark:border-white/10 overflow-x-auto !h-auto"
                    >
                        {tabs.map((tab, index) => (
                            <TabsTrigger
                                key={tab.id || tab.value}
                                value={tab.value}
                                className={`relative h-[44px] md:h-[48px] xl:h-[54px] px-[20px] sm:px-[28px] xl:px-[36px] 2xl:px-[42px] rounded-none border-0 overflow-visible !no-underline flex items-center justify-center whitespace-nowrap !bg-transparent text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-[#374151] dark:text-[#D1D5DB] shrink-0 transition-colors duration-150 hover:text-[#111827] dark:hover:text-white data-active:text-[#111827] dark:data-active:text-white data-active:font-semibold after:content-[''] after:absolute after:!bottom-0 after:!left-0 after:!right-0 after:!h-[3.5px] after:!bg-[#F97316] after:w-[75%] after:m-auto after:opacity-0 after:transition-opacity after:duration-150 data-active:after:!opacity-100 ${index !== tabs.length - 1 ? "before:absolute before:content-[''] before:right-0 before:w-[1px] before:h-[70%] before:bg-[rgba(33,33,33,0.1)] dark:before:bg-white/10 before:top-0 before:bottom-0 before:m-auto" : ""}`}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <TabsContent value="about-iqac" className="mt-[10px]">
                    <IQACAbout data={data.aboutIqacSection} />
                    <IQACAccredition data={data.accreditationsData} />
                    <IQACChairmanMessage data={data.chairmanMessage} />
                    <IQACTeam data={data.teamData} />
                    <IQACContact data={data.contactData} />
                </TabsContent>

                <TabsContent value="iqac-activities" className="mt-[10px]">
                    <IQACActivities data={data.activities} />
                </TabsContent>
            </Tabs>
        </section>
    );
}