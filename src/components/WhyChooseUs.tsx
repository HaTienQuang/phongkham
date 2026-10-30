"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "antd";
import {
  SafetyCertificateFilled,
  ClockCircleFilled,
  DollarCircleFilled,
  MedicineBoxFilled,
  LockFilled,
  HeartFilled,
  CheckCircleFilled,
} from "@ant-design/icons";

const COMMITMENTS = [
  {
    icon: ClockCircleFilled,
    title: "100% Không Xếp Hàng Chờ",
    desc: "Đặt hẹn online được cấp mã ưu tiên khám ngay đúng khung giờ, không mất thời gian chờ đợi mệt mỏi.",
    color: "teal",
  },
  {
    icon: SafetyCertificateFilled,
    title: "Bác Sĩ Tuyến Đầu Trực Tiếp Khám",
    desc: "Khám trực tiếp 1 Bác sĩ : 1 Bệnh nhân cùng BSCKI. Trần Đức Mạnh và hội đồng bác sĩ chuyên khoa hơn 15 năm kinh nghiệm.",
    color: "cyan",
  },
  {
    icon: DollarCircleFilled,
    title: "Chi Phí Minh Bạch - Không Phát Sinh",
    desc: "Bảng giá niêm yết công khai theo quy chuẩn y tế. Bác sĩ tư vấn trước khi thực hiện, nói không với việc vẽ bệnh hay phát sinh chi phí.",
    color: "gold",
  },
  {
    icon: MedicineBoxFilled,
    title: "Thiết Bị Cận Lâm Sàng 2026",
    desc: "Hệ thống siêu âm 4D, máy nội soi NBI 4K và xét nghiệm tự động trả kết quả chính xác chỉ sau 45–60 phút.",
    color: "blue",
  },
  {
    icon: LockFilled,
    title: "Bảo Mật Bệnh Án Điện Tử",
    desc: "Hồ sơ y tế được số hóa, mã hóa an toàn theo chuẩn Bộ Y Tế. Bệnh nhân dễ dàng tra cứu trên điện thoại trọn đời.",
    color: "purple",
  },
  {
    icon: HeartFilled,
    title: "Đồng Hành & Chăm Sóc Sau Khám",
    desc: "Bác sĩ và điều dưỡng tận tình gọi điện thăm hỏi, hướng dẫn chế độ dinh dưỡng và nhắc lịch tái khám định kỳ.",
    color: "magenta",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              Cam Kết Vàng Từ Azalea Clinic
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            6 Điểm Khác Biệt Tạo Nên Uy Tín Của <br className="hidden sm:inline" />
            <span className="text-teal-700">Phòng Khám Quốc Tế Azalea</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Chúng tôi xây dựng tiêu chuẩn khám chữa bệnh văn minh, tận tâm và lấy sự an toàn của bệnh nhân làm kim chỉ nam phục vụ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMMITMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl mb-5 shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-teal-700">
                  <CheckCircleFilled className="text-emerald-500" />
                  <span>Tiêu chuẩn y khoa kiểm chứng</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
