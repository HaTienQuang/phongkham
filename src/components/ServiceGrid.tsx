"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Sparkles, 
  ShieldAlert, 
  Microscope,
  ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Khám Nội Khoa Tổng Quát",
    desc: "Tầm soát và điều trị các bệnh lý huyết áp, đái tháo đường, gan mật, tiêu hóa, rối loạn mỡ máu cùng phác đồ dinh dưỡng chuẩn y khoa.",
    badge: "Phổ biến nhất",
    features: ["Đo huyết áp & đường huyết tại chỗ", "Tư vấn phác đồ phòng bệnh", "Đơn thuốc chuẩn Bộ Y Tế"]
  },
  {
    icon: HeartPulse,
    title: "Khám Tim Mạch & Huyết Áp",
    desc: "Chẩn đoán sớm các nguy cơ xơ vữa động mạch, suy tim, rối loạn nhịp tim với máy đo điện tim kỹ thuật số 12 chuyển đạo.",
    badge: "Kỹ thuật cao",
    features: ["Điện tâm đồ (ECG) chuẩn xác", "Đo độ xơ vữa thành mạch", "Kiểm soát nguy cơ đột quỵ"]
  },
  {
    icon: Activity,
    title: "Cơ Xương Khớp & Thần Kinh",
    desc: "Thăm khám các chứng đau vai gáy, thoái hóa cột sống, thoát vị đĩa đệm, đau khớp gối bằng phương pháp bảo tồn không lạm dụng thuốc giảm đau.",
    badge: "Liệu trình chuẩn",
    features: ["Siêu âm khớp chuyên sâu", "Vật lý trị liệu phục hồi", "Phác đồ duy trì dài hạn"]
  },
  {
    icon: Microscope,
    title: "Xét Nghiệm Kỹ Thuật Cao",
    desc: "Hệ thống máy xét nghiệm tự động sinh hóa, huyết học, miễn dịch, phát hiện sớm virus và các chỉ số ung thư chỉ sau 45–60 phút.",
    badge: "Kết quả nhanh",
    features: ["Lấy máu không đau", "Trả kết quả online bảo mật", "Bác sĩ đọc và giải thích kỹ"]
  },
  {
    icon: ShieldAlert,
    title: "Nội Soi Tiêu Hóa Không Đau",
    desc: "Hệ thống nội soi dạ dày & đại tràng dải tần hẹp NBI thế giới thực, giúp phát hiện tổn thương vi thể tiền ung thư nhẹ nhàng, êm ái.",
    badge: "Tiêu chuẩn quốc tế",
    features: ["Gây mê nhẹ nhàng an toàn", "Ống soi siêu nhỏ độ nét 4K", "Không đau, không buồn nôn"]
  },
  {
    icon: Sparkles,
    title: "Sản Phụ Khoa & Tầm Soát",
    desc: "Khám và tầm soát ung thư cổ tử cung (HPV, Pap Smear), khám thai định kỳ với máy siêu âm 4D thế hệ mới bảo vệ sức khỏe phụ nữ.",
    badge: "Kín đáo - Tận tâm",
    features: ["Phòng khám riêng tư 100%", "Bác sĩ nữ giàu kinh nghiệm", "Tầm soát định kỳ trọn gói"]
  }
];

export default function ServiceGrid() {
  return (
    <section id="dich-vu" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Danh Mục Chuyên Khoa Y Tế</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dịch Vụ Khám Chữa Bệnh <br className="hidden sm:inline" />
            <span className="text-emerald-600">Đạt Chuẩn Chuyên Môn Y Tế</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Trang bị đồng bộ thiết bị thế hệ mới, quy trình khép kín, trả kết quả nhanh chóng giúp tiết kiệm tối đa thời gian của bệnh nhân.
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
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full group-hover:bg-emerald-100 group-hover:text-emerald-700 transition">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-500 mb-6 border-t border-slate-100 pt-3">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#dat-lich"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-600 group-hover:text-emerald-700 transition"
                >
                  <span>Đặt hẹn chuyên khoa này</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
