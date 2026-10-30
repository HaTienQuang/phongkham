import type { Metadata } from "next";
import CampaignPromo from "@/components/CampaignPromo";
import BookingForm from "@/components/BookingForm";
import DoctorProfile from "@/components/DoctorProfile";
import FAQSection from "@/components/FAQSection";
import { CLINIC_INFO } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ưu Đãi 35% Gói Tầm Soát Sức Khỏe Toàn Diện",
  description:
    "Đăng ký ngay gói khám sức khỏe tổng quát 12 hạng mục tiêu chuẩn quốc tế với giá ưu đãi chỉ 1.625.000 VNĐ. Duy nhất cho 50 khách hàng đăng ký online.",
  alternates: {
    canonical: "/uu-dai",
  },
  openGraph: {
    title: "Ưu Đãi 35% Gói Khám Sức Khỏe Toàn Diện - Phòng Khám YDVN",
    description: "Khám trực tiếp cùng BSCK I, trang thiết bị kỹ thuật số, lấy kết quả nhanh.",
    url: `${CLINIC_INFO.domain}/uu-dai`,
    images: [{ url: "/images/doctor.jpg" }],
  },
};

export default function UuDaiLandingPage() {
  return (
    <div className="pt-6">
      {/* Targeted campaign banner */}
      <div className="bg-emerald-900 text-white py-4 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold">
          <span className="bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
            Chiến Dịch Quảng Cáo Đặc Biệt
          </span>
          <span>Dành riêng cho khách hàng đăng ký trực tuyến - Giữ ưu đãi 30 ngày</span>
        </div>
      </div>

      <CampaignPromo />
      <BookingForm />
      <DoctorProfile />
      <FAQSection />
    </div>
  );
}
