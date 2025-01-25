// app/sitemap.ts
import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL of your website
  const baseURL = siteConfig.url;

  const staticRoutes = ["", "/about", "/contact"];

  const routeEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  // Example: Dynamic routes
  // const posts = await getPosts()
  // const dynamicRoutes: MetadataRoute.Sitemap = posts.map(post => ({
  //   url: `${baseURL}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // }))

  return routeEntries;
}
