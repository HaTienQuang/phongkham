"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle, Stethoscope, PhoneCall } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function DoctorProfile() {
  return (
    <section id="doi-ngu" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-4 h-4 text-emerald-600" />
            <span>Chuyên Môn Đích Thực • Bác Sĩ Trực Tiếp Thăm Khám</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Đội Ngũ Bác Sĩ Chuyên Khoa <br className="hidden sm:inline" />
            <span className="text-emerald-600">Giàu Kinh Nghiệm & Y Đức</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tất cả bác sĩ tại YDVN Clinic đều có chứng chỉ hành nghề được Bộ Y Tế và Sở Y Tế cấp phép, từng tu nghiệp tại các bệnh viện tuyến đầu cả nước.
          </p>
        </div>

        {/* Doctor Main Featured Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/doctor.jpg"
                  alt="Bác sĩ Trưởng khoa Khám bệnh YDVN"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-xl shadow-md border border-slate-100 text-center">
                <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wide">
                  Trưởng Khoa Khám Bệnh & Nội Khoa
                </span>
              </div>
            </motion.div>

            {/* Information Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hồ sơ chuyên môn</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  BSCKI. Nguyễn Văn Anh
                </h3>
                <p className="text-sm font-semibold text-emerald-600">
                  Hơn 16 năm kinh nghiệm trong chẩn đoán & điều trị bệnh lý Đa khoa - Nội tổng hợp
                </p>
              </div>

              <div className="space-y-2.5 text-sm text-slate-600 border-y border-slate-200/70 py-4">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tốt nghiệp Bác sĩ Đa khoa chính quy và Bác sĩ Chuyên khoa I tại Đại học Y Dược.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Từng công tác và giữ vị trí chuyên trách tại các Bệnh viện Đa khoa tuyến trung ương.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Chứng chỉ đào tạo liên tục về Siêu âm chẩn đoán, Nội soi tiêu hóa không đau và Tim mạch can thiệp.</span>
                </div>
              </div>

              {/* Quote / Ethic statement */}
              <blockquote className="italic text-xs sm:text-sm text-slate-500 bg-white p-3.5 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                &ldquo;Y học là lắng nghe và thấu cảm. Mục tiêu cao nhất của tôi và đồng nghiệp là giải thích cặn kẽ để bệnh nhân hiểu đúng tình trạng và an tâm điều trị.&rdquo;
              </blockquote>

              {/* Doctor Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#dat-lich"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-emerald-600/20"
                >
                  Đặt Khám Trực Tiếp Với Bác Sĩ
                </a>
                <a
                  href={`tel:${CLINIC_INFO.hotlineClean}`}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold rounded-xl text-sm transition flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  Tư Vấn Nhanh
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
