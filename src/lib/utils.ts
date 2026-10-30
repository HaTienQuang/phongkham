import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CLINIC_INFO = {
  name: "Phòng Khám Đa Khoa & Sản Phụ Khoa Quốc Tế Azalea",
  shortName: "Azalea Clinic",
  slogan: "Y Đức Tận Tâm - Tiêu Chuẩn Quốc Tế - Chăm Sóc Toàn Diện",
  hotline: "0908 688 888",
  hotlineClean: "0908688888",
  zalo: "https://zalo.me/0908688888",
  email: "contact@azaleaclinic.vn",
  address: "Tòa nhà Azalea Medical, 88 Đại lộ Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
  licenseNumber: "Giấy phép hoạt động khám bệnh, chữa bệnh số: 09288/SYT-GPHĐ cấp bởi Sở Y Tế",
  workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 20:30 (Khám thông trưa)",
  domain: "https://azaleaclinic.vn",
  images: {
    logo: "/images/logo.jpg",
    doctor: "/images/doctor.jpg",
  },
  doctor: {
    name: "BSCKI. Trần Đức Mạnh",
    title: "Bác sĩ Chuyên khoa 1",
    department: "Khoa Cấp cứu & Sản Phụ Khoa",
    hospital: "Bệnh viện Phụ sản Nam Định",
    bio: "Hơn 15 năm kinh nghiệm trong chẩn đoán, điều trị sản phụ khoa, cấp cứu và nội tổng hợp."
  }
};
