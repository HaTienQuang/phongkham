import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Clinic Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo YDVN Clinic"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white block">
                  PHÒNG KHÁM <span className="text-emerald-400">YDVN</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {CLINIC_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Trung tâm khám chữa bệnh đa khoa kỹ thuật cao chuẩn y tế YDVN. Đội ngũ bác sĩ tâm huyết, trang thiết bị tối tân, phục vụ chu đáo vì sức khỏe của mọi gia đình.
            </p>

            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-emerald-400 space-y-1">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Tính Pháp Lý & Giấy Phép Hoạt Động</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {CLINIC_INFO.licenseNumber}
              </p>
            </div>
          </div>

          {/* Quick links & Internal link for SEO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#hero" className="hover:text-emerald-400 transition">
                  Trang chủ phòng khám
                </Link>
              </li>
              <li>
                <Link href="#dich-vu" className="hover:text-emerald-400 transition">
                  Các chuyên khoa khám bệnh
                </Link>
              </li>
              <li>
                <Link href="/uu-dai" className="text-emerald-400 font-semibold hover:underline">
                  Landing Page: Gói Ưu Đãi 35%
                </Link>
              </li>
              <li>
                <Link href="#doi-ngu" className="hover:text-emerald-400 transition">
                  Bác sĩ Chuyên khoa phụ trách
                </Link>
              </li>
              <li>
                <Link href="#dat-lich" className="hover:text-emerald-400 transition">
                  Đặt lịch khám online không chờ
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-emerald-400 transition">
                  Hỏi đáp chính sách bảo hiểm y tế
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
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.hotlineClean}`} className="text-white font-bold hover:text-emerald-400">
                  {CLINIC_INFO.hotline}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{CLINIC_INFO.workingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
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
                Nhắn tin tư vấn bác sĩ qua Zalo
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 {CLINIC_INFO.name}. Toàn quyền bảo lưu.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Quy chế khám bệnh</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Miễn trừ trách nhiệm</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
