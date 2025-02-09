import { fetchEvents } from "@/actions/getAllEvents";
import { fetchPublishedNews } from "@/actions/getPublishedNews";

export default async function sitemap() {
    const baseUrl = "https://leahtaylorroymp-development.vercel.app";

    const staticRoutes = [
        "/",
        "/about-leah",
        "/contact-us",
        "/constituency-work",
        "/events",
        "/gallery",
        "/news"
    ];

    const newsData = await fetchPublishedNews();
    const eventData = await fetchEvents()


    const routes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));


    interface NewsItem {
        title: string;
        id: string;
        updated_at?: string;
    }

    interface EventItem {
        title: string;
        id: string;
        updated_at?: string;
    }

    const newsRoutes = newsData.map((item: NewsItem) => ({
        url: `${baseUrl}/news/${item.title}/${item.id}`,
        lastModified: (item.updated_at ? new Date(item.updated_at).toISOString() : new Date().toISOString()),
    }));

    const eventsRoutes = eventData.map((item: EventItem) => ({
        url: `${baseUrl}/events/${item.title}/${item.id}`,
        lastModified: (item.updated_at ? new Date(item.updated_at).toISOString() : new Date().toISOString()),
    }));


    return [
        ...routes,
        ...newsRoutes,
        ...eventsRoutes,
    ];
}
