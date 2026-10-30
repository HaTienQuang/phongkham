"use client";

import { useEffect } from "react";

export default function AnalyticsTracker() {
  useEffect(() => {
    // Placeholder for Google Analytics / Google Ads / Meta Pixel / Zalo Pixel
    // When deploying to production on Vercel with a custom domain, replace with your real ID:
    // window.gtag?.('config', 'G-XXXXXXXXXX');
    // fbq?.('init', 'XXXXXXXXXXXXXXX');
    console.log("[Analytics] Ready for Google Ads, Facebook Pixel & Zalo Ads tracking events.");
  }, []);

  return null;
}
