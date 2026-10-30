"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Tag } from "antd";
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
            <Tag color="cyan" className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 m-0">
              <SafetyCertificateFilled className="text-teal-700" />
              <span>Chuyên Môn Đích Thực • Bác Sĩ Trực Tiếp Thăm Khám</span>
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Đội Ngũ Bác Sĩ Chuyên Khoa <br className="hidden sm:inline" />
            <span className="text-teal-700">Tận Tâm & Giàu Y Đức Tại Azalea</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tất cả bác sĩ tại Phòng Khám Đa Khoa Quốc Tế Azalea đều có chứng chỉ hành nghề chính quy, đào tạo chuyên sâu và hơn 15 năm kinh nghiệm lâm sàng thực chiến.
          </p>
        </div>

        {/* Doctor Featured Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Column: Real Doctor Trần Đức Mạnh */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-5 relative"
            >
              <div className="relative aspect-[9/16] max-h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src={CLINIC_INFO.images.doctor}
                  alt="Bác sĩ Chuyên khoa 1 Trần Đức Mạnh"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-xl shadow-md border border-amber-200 text-center">
                <span className="text-xs font-black text-amber-800 uppercase tracking-wide flex items-center justify-center gap-1">
                  <CheckCircleFilled className="text-amber-600" />
                  Bác Sĩ Chuyên Khoa 1
                </span>
              </div>
            </motion.div>

            {/* Information Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Tag color="gold" className="font-bold text-xs border-amber-300">
                    BÁC SĨ CHUYÊN KHOA 1
                  </Tag>
                  <Tag color="cyan" className="font-semibold text-xs">
                    KHOA CẤP CỨU & NỘI KHOA
                  </Tag>
                  <Tag color="geekblue" className="font-semibold text-xs">
                    15+ NĂM KINH NGHIỆM
                  </Tag>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {CLINIC_INFO.doctor.name}
                </h3>
                <p className="text-sm font-semibold text-teal-700">
                  {CLINIC_INFO.doctor.hospital} • {CLINIC_INFO.doctor.department}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Cố Vấn & Trưởng Bộ Phận Khám Bệnh - Phòng Khám Đa Khoa Quốc Tế Azalea
                </p>
              </div>

              {/* Doctor credentials list */}
              <div className="space-y-3 text-sm text-slate-600 border-y border-slate-200/80 py-4">
                <div className="flex items-start gap-3">
                  <BookOutlined className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Bác sĩ Chuyên khoa 1 chính quy, nhiều năm trực tiếp chỉ đạo chuyên môn cấp cứu và khám chữa bệnh.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <AuditOutlined className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Dày dặn kinh nghiệm công tác tại Bệnh viện Phụ sản Nam Định (Khoa Cấp cứu), xử lý an toàn hàng nghìn ca bệnh lý đa khoa phức tạp.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <SafetyCertificateFilled className="text-lg text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Trực tiếp thăm khám, hội chẩn, tư vấn phác đồ điều trị bảo tồn chuẩn y khoa và theo dõi sát sao tiến trình phục hồi của bệnh nhân.
                  </span>
                </div>
              </div>

              {/* Doctor ethic quote */}
              <blockquote className="italic text-xs sm:text-sm text-slate-600 bg-white p-3.5 rounded-xl border-l-4 border-amber-500 shadow-sm">
                &ldquo;Tại Azalea, chúng tôi đặt sự an toàn, chuẩn xác và sức khỏe lâu dài của bệnh nhân lên hàng đầu. Mỗi bệnh nhân đều được lắng nghe và điều trị tận tâm như người thân.&rdquo;
              </blockquote>

              {/* Action Buttons using Ant Design */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  type="primary"
                  icon={<CalendarOutlined />}
                  href="#dat-lich"
                  className="bg-teal-700 hover:!bg-teal-800 font-bold rounded-xl h-11"
                >
                  Đặt Khám Cùng BSCKI. Trần Đức Mạnh
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
