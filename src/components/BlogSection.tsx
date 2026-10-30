"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import { ReadOutlined, CalendarOutlined, ArrowRightOutlined, UserOutlined } from "@ant-design/icons";

const ARTICLES = [
  {
    title: "5 Dấu Hiệu Cảnh Báo Bệnh Lý Dạ Dày - Đại Tràng Cần Nội Soi Ngay",
    desc: "Đầy hơi kéo dài, sụt cân không rõ nguyên nhân, ợ chua hay đau tức thượng vị là những tín hiệu đường tiêu hóa đang tổn thương cần được bác sĩ kiểm tra sớm.",
    date: "28/10/2026",
    category: "Tiêu Hóa",
    readTime: "4 phút đọc",
    author: "BSCKI. Trần Đức Mạnh",
  },
  {
    title: "Tầm Soát Sức Khỏe Định Kỳ: Đầu Tư Vàng Cho Tương Lai Khỏe Mạnh",
    desc: "Phát hiện sớm các mầm mống ung thư, mỡ máu, tiểu đường ở giai đoạn đầu giúp tăng tỉ lệ chữa khỏi đến 95% và tiết kiệm đến 80% chi phí điều trị.",
    date: "25/10/2026",
    category: "Cẩm Nang Y Khoa",
    readTime: "5 phút đọc",
    author: "Hội Đồng Y Khoa Azalea",
  },
  {
    title: "Những Điều Cần Chuẩn Bị Trước Khi Làm Xét Nghiệm Máu & Siêu Âm",
    desc: "Hướng dẫn chi tiết từ bác sĩ chuyên khoa về thời gian nhịn ăn, lượng nước nên uống và các loại thuốc cần tạm ngưng trước khi đến phòng khám.",
    date: "20/10/2026",
    category: "Hướng Dẫn Khám",
    readTime: "3 phút đọc",
    author: "Đội Ngũ Điều Dưỡng",
  },
];

export default function BlogSection() {
  return (
    <section id="bai-viet" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-3">
              <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
                <ReadOutlined /> Cẩm Nang Sức Khỏe Azalea
              </Tag>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kiến Thức Y Khoa Thường Thức <br />
              <span className="text-teal-700">Tư Vấn Trực Tiếp Từ Bác Sĩ</span>
            </h2>
          </div>
          <a
            href="#dat-lich"
            className="text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1.5 transition"
          >
            <span>Tư vấn sức khỏe trực tuyến</span>
            <ArrowRightOutlined className="text-xs" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Tag color="teal" className="font-semibold text-xs rounded-full">
                    {art.category}
                  </Tag>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <CalendarOutlined /> {art.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-teal-700 transition">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <UserOutlined className="text-teal-600" /> {art.author}
                </span>
                <span className="text-teal-700 font-bold group-hover:underline">
                  {art.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

