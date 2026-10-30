"use client";

import React from "react";
import { Tag, Button } from "antd";
import { DollarCircleFilled, CheckCircleFilled, CalendarOutlined, InfoCircleOutlined } from "@ant-design/icons";

const PRICE_ITEMS = [
  {
    name: "Khám Lâm Sàng Bác Sĩ Chuyên Khoa 1",
    desc: "Khám trực tiếp cùng BSCKI. Trần Đức Mạnh, đo sinh hiệu, tư vấn phác đồ điều trị 1:1",
    price: "300.000 VNĐ",
    note: "Miễn phí tái khám trong 7 ngày",
    hot: false,
  },
  {
    name: "Gói Tầm Soát Sức Khỏe Toàn Diện (12 Hạng Mục)",
    desc: "Khám nội tổng quát, siêu âm ổ bụng 4D, X-quang, điện tim, xét nghiệm máu, gan, thận, đường huyết",
    price: "1.625.000 VNĐ",
    originalPrice: "2.500.000 VNĐ",
    note: "Đang ưu đãi 35% cho khách đặt online",
    hot: true,
  },
  {
    name: "Khám & Tầm Soát Sản Phụ Khoa Toàn Diện",
    desc: "Khám chuyên khoa phụ sản, siêu âm đầu dò, soi cổ tử cung và tư vấn sức khỏe phụ nữ",
    price: "450.000 VNĐ",
    note: "Phòng khám nữ riêng tư 100%",
    hot: false,
  },
  {
    name: "Siêu Âm Màu Doppler 4D Kỹ Thuật Số",
    desc: "Siêu âm màu ổ bụng tổng quát / Siêu âm tuyến giáp / Tuyến vú độ nét cao",
    price: "400.000 VNĐ",
    note: "Có kết quả & ảnh màu ngay",
    hot: false,
  },
  {
    name: "Nội Soi Tiêu Hóa NBI Không Đau (Dạ Dày)",
    desc: "Công nghệ dải tần hẹp NBI 4K phát hiện sớm tế bào ung thư, gây mê êm ái 15 phút",
    price: "1.850.000 VNĐ",
    note: "Bao gồm thuốc gây mê chuẩn y tế",
    hot: false,
  },
  {
    name: "Gói Xét Nghiệm Máu Sinh Hóa Cơ Bản",
    desc: "Kiểm tra công thức máu, men gan, chức năng thận, đường huyết, mỡ máu, acid uric",
    price: "650.000 VNĐ",
    note: "Nhận kết quả sau 45 phút",
    hot: false,
  },
];

export default function PriceListSection() {
  return (
    <section id="bang-gia" className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="gold" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              <DollarCircleFilled /> Bảng Giá Niêm Yết Công Khai
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Chi Phí Khám Chữa Bệnh <br className="hidden sm:inline" />
            <span className="text-teal-700">Minh Bạch - Chuẩn Mực Y Khoa</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Theo nguyên tắc minh bạch y tế của Azalea Clinic, mọi chi phí đều được thông báo rõ ràng trước khi khám. Tuyệt đối không phát sinh chi phí ngoài dự kiến.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                item.hot
                  ? "bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-xl border-2 border-teal-500 scale-102"
                  : "bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {item.hot ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-red-600 text-white uppercase">
                      GÓI HOT GIẢM 35%
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                      Niêm yết tiêu chuẩn
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-400">
                    {item.note}
                  </span>
                </div>

                <h3 className={`text-base font-bold mb-2 leading-snug ${item.hot ? "text-white" : "text-slate-900"}`}>
                  {item.name}
                </h3>

                <p className={`text-xs mb-5 leading-relaxed ${item.hot ? "text-slate-300" : "text-slate-600"}`}>
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100/20">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    {item.originalPrice && (
                      <span className="text-xs line-through text-slate-400 block">
                        {item.originalPrice}
                      </span>
                    )}
                    <span className={`text-2xl font-black ${item.hot ? "text-amber-400" : "text-teal-700"}`}>
                      {item.price}
                    </span>
                  </div>
                </div>

                <Button
                  type={item.hot ? "primary" : "default"}
                  block
                  icon={<CalendarOutlined />}
                  href="#dat-lich"
                  className={item.hot ? "bg-amber-500 hover:!bg-amber-600 font-bold border-0 text-slate-900" : "font-bold border-slate-300 hover:!border-teal-700 hover:!text-teal-700"}
                >
                  Đăng Ký Khám
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance and fee notice */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-600 text-center">
          <InfoCircleOutlined className="text-teal-700" />
          <span>
            Phòng khám hỗ trợ xuất hóa đơn điện tử VAT và cung cấp bệnh án chi tiết để thanh toán Bảo hiểm sức khỏe tư nhân.
          </span>
        </div>

      </div>
    </section>
  );
}

