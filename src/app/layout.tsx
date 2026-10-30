import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
  themeColor: "#059669",
};

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_INFO.domain),
  title: {
    default: "Phòng Khám Đa Khoa Quốc Tế YDVN | Khám Bệnh Chuẩn Y Khoa Kỹ Thuật Cao",
    template: "%s | Phòng Khám YDVN",
  },
  description:
    "Phòng khám Đa khoa YDVN quy tụ đội ngũ bác sĩ chuyên khoa giỏi hơn 15 năm kinh nghiệm. Dịch vụ khám tổng quát, tim mạch, tiêu hóa, xét nghiệm nhanh, chi phí minh bạch.",
  keywords: [
    "phòng khám đa khoa",
    "phòng khám uy tín quận 1",
    "bác sĩ chuyên khoa",
    "gói khám tổng quát",
    "nội soi tiêu hóa không đau",
    "xét nghiệm máu nhanh",
    "phòng khám y dược việt nam",
    "khám tim mạch huyết áp"
  ],
  authors: [{ name: "YDVN Clinic Medical Team" }],
  creator: "Phòng Khám YDVN",
  publisher: "Phòng Khám YDVN",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Phòng Khám Đa Khoa Quốc Tế YDVN | Chẩn Đoán Chuẩn Xác - Tận Tâm",
    description:
      "Đặt hẹn khám ưu tiên cùng Bác sĩ Chuyên khoa đầu ngành. Gói khám sức khỏe toàn diện ưu đãi 35% trong tháng.",
    url: CLINIC_INFO.domain,
    siteName: "Phòng Khám Đa Khoa YDVN",
    images: [
      {
        url: "/images/doctor.jpg",
        width: 1200,
        height: 630,
        alt: "Đội ngũ Bác sĩ Chuyên khoa Phòng Khám YDVN",
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
    "image": `${CLINIC_INFO.domain}/images/doctor.jpg`,
    "logo": `${CLINIC_INFO.domain}/images/logo.jpg`,
    "@id": CLINIC_INFO.domain,
    "url": CLINIC_INFO.domain,
    "telephone": CLINIC_INFO.hotlineClean,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Số 123 Đường Nguyễn Trãi, Phường Bến Thành",
      "addressLocality": "Quận 1",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.771971,
      "longitude": 106.691761
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
        "closes": "20:00"
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
        "name": "Khám Sức Khỏe Tổng Quát"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Siêu Âm Màu 4D"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Nội Soi Tiêu Hóa Không Đau"
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
        <AnalyticsTracker />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
