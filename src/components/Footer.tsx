import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SafetyCertificateFilled,
  HeartFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Clinic Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-black border border-amber-400/40 shrink-0">
                <Image
                  src={CLINIC_INFO.images.logo}
                  alt="Logo Azalea Clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white block">
                  AZALEA <span className="text-teal-400">CLINIC</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {CLINIC_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Viện Y Khoa Kỹ Thuật Cao & Đa Khoa Quốc Tế Azalea. Đội ngũ bác sĩ tâm huyết, trang thiết bị chẩn đoán thế hệ mới 2026, tận tâm phục vụ vì sức khỏe dài lâu của cộng đồng.
            </p>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-teal-300 space-y-1">
              <div className="flex items-center gap-2 font-bold text-white">
                <SafetyCertificateFilled className="text-teal-400" />
                <span>Giấy Phép Hoạt Động Khám Chữa Bệnh</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {CLINIC_INFO.licenseNumber}
              </p>
            </div>
          </div>

          {/* Quick links & Internal link for SEO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Liên Kết Chuyên Mục
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#hero" className="hover:text-teal-400 transition">
                  Trang chủ Azalea Clinic
                </Link>
              </li>
              <li>
                <Link href="#dich-vu" className="hover:text-teal-400 transition">
                  Các chuyên khoa khám bệnh
                </Link>
              </li>
              <li>
                <Link href="/uu-dai" className="text-teal-400 font-semibold hover:underline">
                  Landing Page: Gói Tầm Soát 35%
                </Link>
              </li>
              <li>
                <Link href="#bac-si" className="hover:text-teal-400 transition">
                  Bác sĩ Chuyên khoa Trưởng viện
                </Link>
              </li>
              <li>
                <Link href="#dat-lich" className="hover:text-teal-400 transition">
                  Đặt lịch khám ưu tiên trực tuyến
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-400 transition">
                  Chính sách bảo hiểm y tế
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Thông Tin Liên Hệ
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <EnvironmentOutlined className="text-teal-400 text-sm mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneOutlined className="text-teal-400 text-sm shrink-0" />
                <a href={`tel:${CLINIC_INFO.hotlineClean}`} className="text-white font-bold hover:text-teal-400">
                  {CLINIC_INFO.hotline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ClockCircleOutlined className="text-teal-400 text-sm shrink-0" />
                <span>{CLINIC_INFO.workingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MailOutlined className="text-teal-400 text-sm shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
              >
                Nhắn tin tư vấn cùng Bác Sĩ Azalea qua Zalo
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 {CLINIC_INFO.name}. Toàn quyền bảo lưu.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Quy chế khám bệnh</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Tiêu chuẩn y khoa</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
