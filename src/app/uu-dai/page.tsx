import type { Metadata } from "next";
import CampaignPromo from "@/components/CampaignPromo";
import BookingForm from "@/components/BookingForm";
import DoctorProfile from "@/components/DoctorProfile";
import FAQSection from "@/components/FAQSection";
import { CLINIC_INFO } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ưu Đãi 35% Gói Tầm Soát Sức Khỏe Toàn Diện - Azalea Clinic",
  description:
    "Đăng ký ngay gói khám sức khỏe tổng quát 12 hạng mục tiêu chuẩn quốc tế với giá ưu đãi chỉ 1.625.000 VNĐ tại Phòng Khám Đa Khoa Quốc Tế Azalea. Duy nhất cho 50 khách hàng đầu tiên.",
  alternates: {
    canonical: "/uu-dai",
  },
  openGraph: {
    title: "Ưu Đãi 35% Gói Khám Sức Khỏe Toàn Diện - Phòng Khám Azalea",
    description: "Khám trực tiếp cùng BSCK I Trưởng viện, trang thiết bị kỹ thuật số 2026, lấy kết quả nhanh.",
    url: `${CLINIC_INFO.domain}/uu-dai`,
    images: [{ url: CLINIC_INFO.images.doctor }],
  },
};

export default function UuDaiLandingPage() {
  return (
    <div className="pt-6">
      {/* Targeted campaign banner */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-4 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-semibold">
          <span className="bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
            Chiến Dịch Quảng Cáo Đặc Biệt
          </span>
          <span>Phòng Khám Quốc Tế Azalea - Giữ quyền lợi ưu đãi 30 ngày sau khi đăng ký</span>
        </div>
      </div>

      <CampaignPromo />
      <BookingForm />
      <DoctorProfile />
      <FAQSection />
    </div>
  );
}
