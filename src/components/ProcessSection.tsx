"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "antd";
import {
  CalendarFilled,
  MedicineBoxFilled,
  ExperimentFilled,
  FileDoneOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const STEPS = [
  {
    num: "01",
    icon: CalendarFilled,
    title: "Đặt Hẹn Online VIP",
    desc: "Đăng ký trên website hoặc gọi Hotline Azalea để chọn khung giờ khám mong muốn và nhận mã ưu tiên không cần chờ đợi."
  },
  {
    num: "02",
    icon: MedicineBoxFilled,
    title: "Bác Sĩ Khám 1:1",
    desc: "Bác sĩ Chuyên khoa trực tiếp thăm khám lâm sàng, lắng nghe tiền sử sức khỏe và tư vấn các hạng mục cần thiết nhất."
  },
  {
    num: "03",
    icon: ExperimentFilled,
    title: "Xét Nghiệm & Siêu Âm Nhanh",
    desc: "Thực hiện siêu âm Doppler 4D, chụp X-quang và xét nghiệm máu tự động, nhận trọn vẹn kết quả chỉ sau 45–60 phút."
  },
  {
    num: "04",
    icon: FileDoneOutlined,
    title: "Kết Luận & Đồng Hành",
    desc: "Bác sĩ phân tích kết quả, lập phác đồ điều trị cá nhân hóa và hướng dẫn chế độ dinh dưỡng, theo dõi sức khỏe định kỳ."
  }
];

export default function ProcessSection() {
  return (
    <section id="quy-trinh" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              Quy Trình Khám Nhanh 1:1
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Quy Trình Khám Chữa Bệnh Chuẩn Y Khoa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Khép kín 4 bước tại Azalea Clinic giúp người bệnh tiết kiệm thời gian, thoải mái và an tâm tuyệt đối.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-teal-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white text-teal-700 flex items-center justify-center text-xl shadow-sm group-hover:bg-teal-700 group-hover:text-white transition-all">
                    <Icon />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
