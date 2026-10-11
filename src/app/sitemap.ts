import type { MetadataRoute } from "next";
import { allowIndexing, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing || !siteUrl) return [];

  // Project routes will be included when their content is reviewed.
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/Janith_CV.pdf`, priority: 0.5 },
  ];
}
