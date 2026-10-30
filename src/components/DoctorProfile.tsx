"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Tag, Rate, Card } from "antd";
import {
  SafetyCertificateFilled,
  AuditOutlined,
  BookOutlined,
  CalendarOutlined,
  PhoneOutlined,
  CheckCircleFilled,
  HeartFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

export default function DoctorProfile() {
  return (
    <section id="bac-si" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 m-0">
              <SafetyCertificateFilled className="text-teal-700" />
              <span>Chuyên Môn Đích Thực • Bác Sĩ Trực Tiếp Thăm Khám</span>
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hội Đồng Bác Sĩ Chuyên Khoa <br className="hidden sm:inline" />
            <span className="text-teal-700">Tận Tâm & Giàu Y Đức Tại Azalea</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tất cả bác sĩ tại Phòng Khám Đa Khoa Quốc Tế Azalea đều có chứng chỉ hành nghề chính quy, đào tạo chuyên sâu và hơn 16 năm kinh nghiệm lâm sàng.
          </p>
        </div>

        {/* Doctor Featured Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Column: Azalea Chief Physician */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src={CLINIC_INFO.images.doctor}
                  alt="Bác sĩ Trưởng khoa Khám bệnh Phòng Khám Azalea"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-xl shadow-md border border-teal-100 text-center">
                <span className="text-xs font-black text-teal-800 uppercase tracking-wide flex items-center justify-center gap-1">
                  <CheckCircleFilled className="text-teal-700" />
                  Trưởng Khoa Khám Bệnh & Nội Tổng Quát
                </span>
              </div>
            </motion.div>

            {/* Information Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tag color="geekblue" className="font-semibold text-xs">
                    BSCKI NỘI KHOA
                  </Tag>
                  <Tag color="cyan" className="font-semibold text-xs">
                    16+ NĂM KINH NGHIỆM
                  </Tag>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  BSCKI. Nguyễn Hoàng Nam
                </h3>
                <p className="text-sm font-semibold text-teal-700">
                  Trưởng Hội Đồng Chuyên Môn - Phòng Khám Đa Khoa Quốc Tế Azalea
                </p>
              </div>

              {/* Doctor credentials list */}
              <div className="space-y-3 text-sm text-slate-600 border-y border-slate-200/80 py-4">
                <div className="flex items-start gap-3">
                  <BookOutlined className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Tốt nghiệp Bác sĩ Đa khoa và Bác sĩ Chuyên khoa I tại Đại học Y Dược TP.HCM.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <AuditOutlined className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Từng công tác hơn 12 năm tại các Bệnh viện Đa khoa tuyến trung ương và bệnh viện quốc tế hàng đầu.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <SafetyCertificateFilled className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Chứng chỉ đào tạo nâng cao về Siêu âm chẩn đoán can thiệp, Nội soi tiêu hóa NBI và Quản lý bệnh mãn tính chuyển hóa.
                  </span>
                </div>
              </div>

              {/* Quote / Ethic statement */}
              <blockquote className="italic text-xs sm:text-sm text-slate-600 bg-white p-3.5 rounded-xl border-l-4 border-teal-600 shadow-sm">
                &ldquo;Tại Azalea, chúng tôi không chỉ khám bệnh mà còn đồng hành chăm sóc sức khỏe cho từng thành viên trong gia đình bạn bằng sự thấu hiểu và y đức cao nhất.&rdquo;
              </blockquote>

              {/* Action Buttons using Ant Design */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  type="primary"
                  icon={<CalendarOutlined />}
                  href="#dat-lich"
                  className="bg-teal-700 hover:!bg-teal-800 font-bold rounded-xl h-11"
                >
                  Đặt Khám Trực Tiếp Cùng Bác Sĩ
                </Button>
                <Button
                  icon={<PhoneOutlined className="text-teal-700" />}
                  href={`tel:${CLINIC_INFO.hotlineClean}`}
                  className="font-bold rounded-xl h-11 border-slate-300"
                >
                  Tư Vấn Nhanh 24/7
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
