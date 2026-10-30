import { MetadataRoute } from "next";
import { CLINIC_INFO } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${CLINIC_INFO.domain}/sitemap.xml`,
  };
}

