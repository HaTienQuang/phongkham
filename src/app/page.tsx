import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampaignPromo from "@/components/CampaignPromo";
import ServiceGrid from "@/components/ServiceGrid";
import DoctorProfile from "@/components/DoctorProfile";
import FacilitySection from "@/components/FacilitySection";
import ProcessSection from "@/components/ProcessSection";
import PriceListSection from "@/components/PriceListSection";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner: Giới thiệu chung, Bác sĩ trưởng & CTA */}
      <HeroSection />

      {/* 2. Điểm khác biệt & 6 Cam kết vàng của Azalea */}
      <div id="gioi-thieu">
        <WhyChooseUs />
      </div>

      {/* 3. Phễu ưu đãi đặc biệt: Gói tầm soát 35% */}
      <CampaignPromo />

      {/* 4. Danh mục các chuyên khoa mũi nhọn */}
      <ServiceGrid />

      {/* 5. Hồ sơ năng lực Bác sĩ Chuyên khoa 1 Trần Đức Mạnh */}
      <DoctorProfile />

      {/* 6. Cơ sở vật chất 5 sao & Máy móc thế hệ mới 2026 */}
      <FacilitySection />

      {/* 7. Quy trình khám 1:1 không chờ đợi */}
      <ProcessSection />

      {/* 8. Bảng giá dịch vụ niêm yết công khai */}
      <PriceListSection />

      {/* 9. Đánh giá & Phản hồi thực tế từ bệnh nhân */}
      <Testimonials />

      {/* 10. Form đặt lịch khám ưu tiên */}
      <BookingForm />

      {/* 11. Giải đáp thắc mắc (FAQ) & Bảo hiểm y tế */}
      <FAQSection />

      {/* 12. Cẩm nang sức khỏe & Bài viết y khoa */}
      <BlogSection />

      {/* 13. Vị trí bản đồ & Hướng dẫn đường đi */}
      <MapSection />
    </>
  );
}
