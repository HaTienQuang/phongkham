import HeroSection from "@/components/HeroSection";
import CampaignPromo from "@/components/CampaignPromo";
import ServiceGrid from "@/components/ServiceGrid";
import DoctorProfile from "@/components/DoctorProfile";
import ProcessSection from "@/components/ProcessSection";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CampaignPromo />
      <ServiceGrid />
      <DoctorProfile />
      <ProcessSection />
      <BookingForm />
      <FAQSection />
    </>
  );
}

