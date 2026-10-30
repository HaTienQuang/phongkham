"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Tag, Rate, Card } from "antd";
import {
  SafetyCertificateFilled,
  PhoneOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ThunderboltFilled,
  MedicineBoxOutlined,
  HeartFilled,
  StarFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50">
      {/* Background soft ambient blur shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 right-12 w-80 h-80 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ant Design clinical headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <Tag
                color="cyan"
                className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border-teal-200 flex items-center gap-1.5 shadow-sm m-0"
              >
                <HeartFilled className="text-teal-700 animate-pulse" />
                <span>Phòng Khám Đa Khoa Quốc Tế Azalea • Chuẩn Y Khoa 5 Sao</span>
              </Tag>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Khám Bệnh Chuẩn Xác <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-900">
                Chăm Sóc Toàn Diện
              </span>{" "}
              Tại Azalea Clinic
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Đội ngũ Bác sĩ Chuyên khoa hơn 16 năm kinh nghiệm từ các bệnh viện tuyến trung ương. Hệ thống xét nghiệm kỹ thuật cao & siêu âm dải tần 4K trả kết quả sau 45 phút, quy trình khám 1 Bác Sĩ : 1 Bệnh Nhân không chờ đợi.
            </p>

            {/* Trust points with Ant Design Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm">
                <SafetyCertificateFilled className="text-xl text-teal-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Bộ Y Tế Cấp Phép</div>
                  <div className="text-[10px] text-slate-500">Giấy phép số 09288</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm">
                <ThunderboltFilled className="text-xl text-teal-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Khám Nhanh 1:1</div>
                  <div className="text-[10px] text-slate-500">Không xếp hàng chờ</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm">
                <MedicineBoxOutlined className="text-xl text-teal-700 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Minh Bạch Chi Phí</div>
                  <div className="text-[10px] text-slate-500">Bảng giá niêm yết</div>
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                type="primary"
                size="large"
                icon={<CalendarOutlined />}
                href="#dat-lich"
                className="w-full sm:w-auto h-13 px-8 text-base bg-teal-700 hover:!bg-teal-800 shadow-xl shadow-teal-700/25 font-bold rounded-xl"
              >
                ĐẶT HẸN KHÁM NHẬN ƯU ĐÃI
              </Button>
              <Button
                size="large"
                icon={<PhoneOutlined className="text-teal-700" />}
                href={`tel:${CLINIC_INFO.hotlineClean}`}
                className="w-full sm:w-auto h-13 px-7 text-base font-bold text-slate-800 rounded-xl border-slate-300 hover:!border-teal-700 hover:!text-teal-700 shadow-sm"
              >
                Gọi Bác Sĩ: {CLINIC_INFO.hotline}
              </Button>
            </div>

            {/* Social Proof with Ant Design Rate */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <Rate disabled defaultValue={5} className="text-sm text-amber-500" />
              <span className="text-xs text-slate-500 font-medium">
                <strong className="text-slate-800 font-bold">4.96/5</strong> từ hơn 6.500+ lượt khám tin cậy tại Azalea Clinic
              </span>
            </div>
          </motion.div>

          {/* Right Column: Hero Doctor Azalea Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-emerald-400 rounded-3xl rotate-2 transform scale-100 opacity-20 blur-xl" />
              
              {/* Doctor Main Image with Azalea Branding */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/5] group">
                <Image
                  src={CLINIC_INFO.images.doctor}
                  alt="Bác sĩ Trưởng khoa Phòng Khám Azalea"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                
                {/* Doctor Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-600/90 backdrop-blur-sm rounded-lg text-xs font-bold uppercase tracking-wider mb-1.5">
                    <CheckCircleFilled /> Bác Sĩ Chuyên Khoa I • Azalea
                  </div>
                  <h3 className="text-xl font-bold">BSCKI. Nguyễn Hoàng Nam</h3>
                  <p className="text-xs text-slate-200">Trưởng Hội Đồng Chuyên Môn - Phòng Khám Đa Khoa Quốc Tế Azalea</p>
                </div>
              </div>

              {/* Floating Badge 1 (Ant Design Card style) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
                  <SafetyCertificateFilled className="text-teal-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Bác Sĩ Tuyến TW</div>
                  <div className="text-[10px] text-slate-500">16+ Năm Kinh Nghiệm</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg">
                  <StarFilled className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Chuẩn Quốc Tế</div>
                  <div className="text-[10px] text-slate-500">Trang Thiết Bị 2026</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
