import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.leahtaylorroymp.ca";
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/dashboard", "/login"],
                crawlDelay: 10,
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
