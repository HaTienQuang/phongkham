"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag, Rate } from "antd";
import { MessageFilled, CheckCircleFilled, UserOutlined } from "@ant-design/icons";

const REVIEWS = [
  {
    name: "Anh Hoàng Minh",
    age: "42 tuổi",
    location: "Quận 1, TP.HCM",
    service: "Gói Tầm Soát Toàn Diện & Nội Soi Dạ Dày",
    content:
      "Tôi đăng ký gói khám qua website lúc sáng, đến nơi là được vào gặp Bác sĩ Mạnh ngay không phải chờ một phút nào. Nội soi gây mê rất nhẹ nhàng, ngủ một giấc 15 phút dậy là xong, phát hiện sớm polyp nhỏ và được xử lý luôn. Rất cảm ơn đội ngũ Azalea!",
    rating: 5,
    date: "Khám ngày 12/10/2026",
  },
  {
    name: "Chị Mai Lan",
    age: "34 tuổi",
    location: "Bình Thạnh, TP.HCM",
    service: "Khám Sản Phụ Khoa & Siêu Âm 4D",
    content:
      "Phòng khám sạch sẽ, sang trọng như khách sạn. Bác sĩ Mạnh giải thích cặn kẽ từng chỉ số xét nghiệm chứ không qua loa như các bệnh viện đông đúc. Chi phí niêm yết đúng như lúc tư vấn, không bị phát sinh thêm khoản nào.",
    rating: 5,
    date: "Khám ngày 18/10/2026",
  },
  {
    name: "Bác Nguyễn Văn Thịnh",
    age: "58 tuổi",
    location: "Quận 3, TP.HCM",
    service: "Khám Tim Mạch & Huyết Áp Mãn Tính",
    content:
      "Huyết áp của tôi trước đây dao động thất thường, hay chóng mặt. Sau khi được bác sĩ Mạnh trực tiếp điều chỉnh phác đồ thuốc và hướng dẫn chế độ ăn giảm muối, hiện tại các chỉ số rất ổn định. Các cô điều dưỡng còn gọi điện hỏi thăm sau khám rất chu đáo.",
    rating: 5,
    date: "Khám ngày 22/10/2026",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              <MessageFilled /> Cảm Nhận Thực Tế Từ Bệnh Nhân
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Niềm Tin & Sự Hài Lòng Của Bệnh Nhân <br className="hidden sm:inline" />
            <span className="text-teal-700">Là Thước Đo Giá Trị Của Azalea</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Trích xuất từ phiếu đánh giá chất lượng dịch vụ thực tế của bệnh nhân sau khi thăm khám tại Azalea Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Rate disabled defaultValue={review.rating} className="text-sm text-amber-500" />
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                    <UserOutlined />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {review.name} <span className="text-xs font-normal text-slate-500">({review.age})</span>
                    </div>
                    <div className="text-[11px] text-teal-700 font-semibold">
                      {review.service}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
