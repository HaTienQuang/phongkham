import { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CLINIC_INFO.domain;
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/uu-dai`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}

