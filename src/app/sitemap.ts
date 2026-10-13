import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing || !siteUrl) return [];

  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/Janith_CV.pdf`, priority: 0.5 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      priority: 0.7,
    })),
  ];
}
