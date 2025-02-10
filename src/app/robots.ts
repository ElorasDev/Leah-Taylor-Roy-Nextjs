import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://leahtaylorroymp-development.vercel.app";
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
