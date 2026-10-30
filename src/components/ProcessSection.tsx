"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck2, Stethoscope, Microscope, ClipboardList } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: CalendarCheck2,
    title: "Đặt Hẹn Online",
    desc: "Đăng ký trên website hoặc gọi Hotline để chọn khung giờ và nhận mã khám ưu tiên không cần chờ đợi."
  },
  {
    num: "02",
    icon: Stethoscope,
    title: "Bác Sĩ Khám 1:1",
    desc: "Bác sĩ Chuyên khoa trực tiếp thăm khám lâm sàng, lắng nghe tiền sử bệnh và tư vấn các hạng mục cần thiết."
  },
  {
    num: "03",
    icon: Microscope,
    title: "Cận Lâm Sàng Nhanh",
    desc: "Thực hiện siêu âm, xét nghiệm, X-quang với máy móc kỹ thuật số hiện đại, nhận kết quả chỉ sau 45–60 phút."
  },
  {
    num: "04",
    icon: ClipboardList,
    title: "Kết Luận & Đồng Hành",
    desc: "Bác sĩ phân tích kết quả, lên phác đồ điều trị cá nhân và hướng dẫn chế độ dinh dưỡng, theo dõi sức khỏe dài hạn."
  }
];

export default function ProcessSection() {
  return (
    <section id="quy-trinh" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Tiện Lợi • Nhanh Chóng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Quy Trình Khám Chữa Bệnh Chuẩn Y Khoa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Khép kín 4 bước giúp người bệnh tiết kiệm thời gian, trải nghiệm khám thoải mái và chính xác tuyệt đối.
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
                  <span className="text-3xl font-black text-slate-300 group-hover:text-emerald-500 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
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
