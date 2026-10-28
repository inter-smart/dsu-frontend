import { getAnnouncements, getNewsEvents } from "@/lib/api";
import News from "@/components/sections/home/home-news";
import Events from "@/components/sections/home/home-events";

// The home page lists the News & Events and Announcement entries next to the section's own fields.
export async function HomeNews({ data }) {
    const newsList = await getNewsEvents();
    return <News data={{ title: data?.title, news_list: newsList || [] }} />;
}

export async function HomeEvents({ data }) {
    const announcements = await getAnnouncements();
    return (
        <Events
            data={{
                ...data,
                announcements_list: announcements?.length ? announcements : data?.announcements_list || [],
            }}
        />
    );
}
