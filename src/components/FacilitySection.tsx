"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag, Badge } from "antd";
import {
  SafetyCertificateFilled,
  ApartmentOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const FACILITIES = [
  {
    title: "Sảnh Đón Tiếp & Chờ Khám VIP",
    desc: "Không gian sang trọng, thoáng đãng, phục vụ trà nước miễn phí giúp bệnh nhân và người nhà có cảm giác thoải mái như nghỉ dưỡng.",
    tag: "Tiêu Chuẩn 5 Sao",
    specs: ["Ghế sofa êm ái", "Wifi tốc độ cao", "Quầy lễ tân đón tiếp chu đáo"]
  },
  {
    title: "Phòng Khám Chuyên Khoa Riêng Tư 1:1",
    desc: "Mỗi phòng khám được thiết kế cách âm, khép kín, đảm bảo sự bảo mật và thoải mái tuyệt đối khi trao đổi tình trạng bệnh cùng Bác sĩ.",
    tag: "Bảo Mật Tuyệt Đối",
    specs: ["Khám 1 bác sĩ : 1 bệnh nhân", "Giường khám điều khiển điện", "Hệ thống khử khuẩn không khí"]
  },
  {
    title: "Trung Tâm Xét Nghiệm Tự Động Hóa 2026",
    desc: "Được trang bị máy phân tích sinh hóa, miễn dịch và huyết học tự động nhập khẩu từ Đức, Nhật Bản, trả kết quả chỉ sau 45–60 phút.",
    tag: "Chuẩn Quốc Tế ISO",
    specs: ["Lấy máu không đau", "Kết quả chuẩn xác 99.9%", "Liên thông bệnh án điện tử"]
  },
  {
    title: "Phòng Nội Soi Tiêu Hóa Vô Trùng Áp Lực Âm",
    desc: "Trang bị hệ thống nội soi NBI Olympus dải tần hẹp 4K, phòng hồi tỉnh tiện nghi, quy trình vô trùng khép kín ngăn ngừa lây nhiễm chéo.",
    tag: "Công Nghệ Không Đau",
    specs: ["Ống soi siêu mềm", "Gây mê nhẹ nhàng an toàn", "Bác sĩ trực tiếp thực hiện"]
  }
];

export default function FacilitySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              <ApartmentOutlined /> Không Gian & Cơ Sở Vật Chất Y Khoa
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Hạ Tầng Y Tế Hiện Đại 2026 <br />
            <span className="text-teal-400">Không Gian Nghỉ Dưỡng An Lành</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Azalea Clinic đầu tư đồng bộ về cơ sở vật chất và công nghệ y khoa nhằm mang lại sự tiện nghi, an toàn tuyệt đối cho người bệnh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-8 hover:border-teal-500/50 transition-all shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-900/80 text-teal-300 border border-teal-700/50">
                    {item.tag}
                  </span>
                  <SafetyCertificateFilled className="text-teal-400 text-lg" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="border-t border-slate-700/80 pt-4 flex flex-wrap gap-2">
                {item.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700"
                  >
                    <CheckCircleFilled className="text-teal-400 text-[10px]" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

