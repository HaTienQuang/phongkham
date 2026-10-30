"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag, Button } from "antd";
import {
  MedicineBoxFilled,
  HeartFilled,
  ExperimentFilled,
  SafetyCertificateFilled,
  RightOutlined,
  ThunderboltFilled,
  FireFilled,
  CheckCircleFilled,
} from "@ant-design/icons";

const SERVICES = [
  {
    icon: MedicineBoxFilled,
    title: "Khám Nội Khoa Tổng Quát",
    desc: "Tầm soát và điều trị các bệnh lý huyết áp, đái tháo đường, gan mật, tiêu hóa, rối loạn mỡ máu cùng phác đồ dinh dưỡng chuẩn y khoa.",
    badge: "Phổ biến nhất",
    tagColor: "teal",
    features: ["Đo huyết áp & đường huyết tại chỗ", "Tư vấn phác đồ phòng bệnh", "Đơn thuốc chuẩn Bộ Y Tế"]
  },
  {
    icon: HeartFilled,
    title: "Tim Mạch & Huyết Áp Kỹ Thuật Cao",
    desc: "Chẩn đoán sớm các nguy cơ xơ vữa động mạch, suy tim, rối loạn nhịp tim với máy đo điện tim kỹ thuật số 12 chuyển đạo.",
    badge: "Kỹ thuật cao",
    tagColor: "cyan",
    features: ["Điện tâm đồ (ECG) chuẩn xác", "Đo độ xơ vữa thành mạch", "Kiểm soát nguy cơ đột quỵ"]
  },
  {
    icon: ThunderboltFilled,
    title: "Cơ Xương Khớp & Thần Kinh",
    desc: "Thăm khám các chứng đau vai gáy, thoái hóa cột sống, thoát vị đĩa đệm, đau khớp gối bằng phương pháp bảo tồn không lạm dụng thuốc giảm đau.",
    badge: "Liệu trình chuẩn",
    tagColor: "blue",
    features: ["Siêu âm khớp chuyên sâu", "Vật lý trị liệu phục hồi", "Phác đồ duy trì dài hạn"]
  },
  {
    icon: ExperimentFilled,
    title: "Xét Nghiệm Tự Động Hóa 2026",
    desc: "Hệ thống máy xét nghiệm tự động sinh hóa, huyết học, miễn dịch, phát hiện sớm virus và các chỉ số ung thư chỉ sau 45–60 phút.",
    badge: "Kết quả nhanh 45p",
    tagColor: "geekblue",
    features: ["Lấy máu nhẹ nhàng không đau", "Trả kết quả online bảo mật", "Bác sĩ đọc và giải thích kỹ"]
  },
  {
    icon: SafetyCertificateFilled,
    title: "Nội Soi Tiêu Hóa Không Đau (NBI)",
    desc: "Hệ thống nội soi dạ dày & đại tràng dải tần hẹp NBI phóng đại 4K, giúp phát hiện tổn thương vi thể tiền ung thư nhẹ nhàng, êm ái.",
    badge: "Chuẩn Quốc Tế",
    tagColor: "purple",
    features: ["Gây mê nhẹ nhàng êm ái", "Ống soi siêu mềm chuẩn Nhật", "Không đau, không buồn nôn"]
  },
  {
    icon: FireFilled,
    title: "Sản Phụ Khoa & Tầm Soát Ung Thư Nữ",
    desc: "Khám và tầm soát ung thư cổ tử cung (HPV, ThinPrep), khám thai định kỳ với máy siêu âm Doppler 4D bảo vệ sức khỏe phụ nữ.",
    badge: "Kín đáo - Tận tâm",
    tagColor: "magenta",
    features: ["Phòng khám riêng tư 100%", "Bác sĩ nữ giàu kinh nghiệm", "Tầm soát định kỳ trọn gói"]
  }
];

export default function ServiceGrid() {
  return (
    <section id="dich-vu" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              Chuyên Khoa Y Tế Azalea Clinic
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dịch Vụ Khám Chữa Bệnh <br className="hidden sm:inline" />
            <span className="text-teal-700">Đạt Tiêu Chuẩn Quốc Tế</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Trang bị đồng bộ hệ thống chẩn đoán hiện đại, quy trình vô trùng khép kín, trả kết quả nhanh chóng giúp tiết kiệm thời gian của người bệnh.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300">
                      <Icon />
                    </div>
                    <Tag color="cyan" className="font-semibold text-[11px] rounded-full px-2.5 py-0.5">
                      {service.badge}
                    </Tag>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-3">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircleFilled className="text-emerald-500 text-[11px] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  type="link"
                  href="#dat-lich"
                  className="!px-0 font-bold text-teal-700 hover:!text-teal-800 flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs sm:text-sm"
                >
                  <span>Đặt hẹn chuyên khoa này</span>
                  <RightOutlined className="text-xs group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
