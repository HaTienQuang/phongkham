import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CLINIC_INFO = {
  name: "Phòng Khám Đa Khoa Quốc Tế YDVN",
  slogan: "Chuẩn Xác - Tận Tâm - Đồng Hành Vì Sức Khỏe Gia Đình",
  hotline: "0901 234 567",
  hotlineClean: "0901234567",
  zalo: "https://zalo.me/0901234567",
  email: "tuvan@phongkhamydvn.vn",
  address: "Số 123 Đường Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh",
  licenseNumber: "Giấy phép hoạt động khám chữa bệnh số: 08642/SYT-GPHĐ cấp bởi Sở Y Tế",
  workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 20:00 (Không nghỉ trưa)",
  domain: "https://phongkhamydvn.vn",
};
