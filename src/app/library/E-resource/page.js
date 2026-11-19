import InnerHero from "@/components/layout/common/InnerHero";
import EResourcesLibrary from "@/components/sections/library/EResourcesLibrary";

// logo is now the full path, used as given
const r = (logo, publisher, url, loginDetails, manual, video) => ({
    logo: { url: logo, alternativeText: publisher.split("\n")[0] },
    publisher,
    url,
    loginDetails,
    userManual: { label: manual, url: null },
    selfHelpVideo: { label: video ?? manual, url: null },
});

const local_data = {
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Overview page title",
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
                label: "Student Life",
                href: "/",
            },
            {
                label: "Library",
                href: "/",
            },
            {
                label: "E - Resources",
                href: "/",
            },
        ],
    },

    eResources: {
        title: "E - Resources",
        intro:
            "The following Objectives and Responsibilities of the Library Advisory Committee Members",
        resources: [
            r("/images/library/reource-1.jpg", "IEEE\n(Institute of Electrical & Electronics Engineers)", "http://ieeexplore.ieee.org/", "IP/Remote Based", "IEEE"),
            r("/images/library/reource-2.jpg", "AIR Online", "https://www.aironline.in/", "IP Based", "AIR Online"),
            r("/images/library/reource-3.jpg", "NDL\n(National Digital Library)", "https://ndl.iitkgp.ac.in/", "Login Based", "NDL"),
            r("/images/library/reource-4.jpg", "NPTEL\n(National Programs on Technology Enhanced Learning )", "http://192.168.2.202/dsu-nptel/", "Local IP Based", "NPTEL"),
            r("/images/library/reource-5.jpg", "DELNET Developing Library Network", "https://discovery.delnet.in/", "IP Based", "DELNET"),
            r("/images/library/reource-6.jpg", "EBSCO", "https://search.ebscohost.com", "IP/Remote Based", "EBSCO"),
            r("/images/library/reource-7.jpg", "Institutional Repository", "http://192.168.2.203:8080/jspui/", "Local", "DSPACE"),
            r("/images/library/reource-8.jpg", "SCC Online", "https://www.scconline.com/", "IP Based", "SCC Online"),
            r("/images/library/reource-9.jpg", "Hein Online", "https://home.heinonline.org/", "IP Based", "Hein Online"),
            r("/images/library/reource-10.jpg", "EBC Reader", "https://www.ebcreader.com/", "IP Based", "EBC Reader"),
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <EResourcesLibrary data={local_data.eResources}  />
        </>
    );
}