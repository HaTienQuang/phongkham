"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, ShieldCheck, Award, Star, Clock, HeartPulse } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
      {/* Background soft glowing blur shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Trust points & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm">
              <HeartPulse className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Chăm Sóc Y Tế Chuẩn Mực • Khám 1 Bác Sĩ : 1 Bệnh Nhân</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Phòng Khám Đa Khoa Uy Tín <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                Chẩn Đoán Chuẩn Xác
              </span>{" "}
              & Điều Trị Tận Tâm
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Đội ngũ Bác sĩ Chuyên khoa đầu ngành hơn 15 năm kinh nghiệm. Trang thiết bị y khoa hiện đại 2026, xét nghiệm lấy kết quả nhanh, phác đồ điều trị cá nhân hóa và chi phí công khai minh bạch.
            </p>

            {/* Trust points checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-100 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Bộ Y Tế cấp phép</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-100 shadow-sm">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Không xếp hàng chờ</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-100 shadow-sm">
                <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Chi phí niêm yết rõ</span>
              </div>
            </div>

            {/* Main Conversion CTA buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#dat-lich"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-3 text-base"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>ĐẶT LỊCH KHÁM NHẬN ƯU ĐÃI</span>
              </Link>
              <a
                href={`tel:${CLINIC_INFO.hotlineClean}`}
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border-2 border-slate-200 transition-all text-center flex items-center justify-center gap-3 text-base shadow-sm"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Gọi Bác Sĩ: {CLINIC_INFO.hotline}</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">
                <strong className="text-slate-800 font-bold">4.9/5</strong> từ hơn 5.200+ bệnh nhân đã khám trong năm
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Doctor Graphic & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative background frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-3xl rotate-2 transform scale-100 opacity-20 blur-lg" />
              
              {/* Doctor Main Card Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/5] group">
                <Image
                  src="/images/doctor.jpg"
                  alt="Bác sĩ chuyên khoa tại Phòng Khám YDVN"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Doctor Caption inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-2.5 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-lg text-xs font-bold uppercase tracking-wider mb-1">
                    Bác Sĩ Chuyên Khoa I
                  </div>
                  <h3 className="text-lg font-bold">Trực tiếp thăm khám & hội chẩn</h3>
                  <p className="text-xs text-slate-200">Được đào tạo chính quy, 15+ năm công tác tại bệnh viện tuyến TW</p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Bác Sĩ Thật</div>
                  <div className="text-[10px] text-slate-500">Giấy phép hành nghề rõ ràng</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Bảo Mật Bệnh Án</div>
                  <div className="text-[10px] text-slate-500">Hồ sơ điện tử chuẩn quốc tế</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
