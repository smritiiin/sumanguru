import { MetadataRoute } from "next";
import { BLOG_POSTS } from "../data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sumanadhikari.com";

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes, ...blogUrls];
}