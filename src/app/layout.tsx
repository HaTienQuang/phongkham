import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdProvider from "@/components/AntdProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { CLINIC_INFO } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f766e",
};

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_INFO.domain),
  title: {
    default: "Phòng Khám Đa Khoa Quốc Tế Azalea | Tiêu Chuẩn Y Khoa 5 Sao",
    template: "%s | Azalea Clinic",
  },
  description:
    "Phòng khám Đa khoa Quốc tế Azalea quy tụ đội ngũ bác sĩ chuyên khoa đầu ngành hơn 16 năm kinh nghiệm. Dịch vụ khám tổng quát, tim mạch, tiêu hóa, xét nghiệm nhanh, chi phí minh bạch.",
  keywords: [
    "phòng khám azalea",
    "phòng khám đa khoa quốc tế azalea",
    "azalea clinic",
    "phòng khám uy tín quận 1",
    "bác sĩ chuyên khoa azalea",
    "gói khám tổng quát azalea",
    "nội soi tiêu hóa không đau nbi",
    "xét nghiệm máu nhanh 45 phút"
  ],
  authors: [{ name: "Azalea Medical Clinic Team" }],
  creator: "Phòng Khám Đa Khoa Quốc Tế Azalea",
  publisher: "Azalea Medical Clinic",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phòng Khám Đa Khoa Quốc Tế Azalea | Y Đức Tận Tâm - Tiêu Chuẩn Quốc Tế",
    description:
      "Đặt hẹn khám ưu tiên cùng Bác sĩ Chuyên khoa Trưởng viện Azalea. Gói tầm soát sức khỏe toàn diện ưu đãi 35% trong tháng.",
    url: CLINIC_INFO.domain,
    siteName: "Phòng Khám Đa Khoa Quốc Tế Azalea",
    images: [
      {
        url: CLINIC_INFO.images.doctor,
        width: 1200,
        height: 630,
        alt: "Đội ngũ Bác sĩ Chuyên khoa Phòng Khám Đa Khoa Quốc Tế Azalea",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org MedicalClinic and Physician for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": CLINIC_INFO.name,
    "alternateName": CLINIC_INFO.shortName,
    "image": `${CLINIC_INFO.domain}${CLINIC_INFO.images.doctor}`,
    "logo": `${CLINIC_INFO.domain}${CLINIC_INFO.images.logo}`,
    "@id": CLINIC_INFO.domain,
    "url": CLINIC_INFO.domain,
    "telephone": CLINIC_INFO.hotlineClean,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "88 Đại lộ Lê Lợi, Phường Bến Nghé",
      "addressLocality": "Quận 1",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.773521,
      "longitude": 106.700142
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:30",
        "closes": "20:30"
      }
    ],
    "medicalSpecialty": [
      "GeneralPractice",
      "Cardiovascular",
      "Gastroenterology",
      "Hematology",
      "Gynecologic"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Khám Sức Khỏe Tổng Quát Toàn Diện"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Siêu Âm Màu Doppler 4D"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Nội Soi Tiêu Hóa NBI Không Đau"
      }
    ]
  };

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <AntdProvider>
          <AnalyticsTracker />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingContact />
        </AntdProvider>
      </body>
    </html>
  );
}
