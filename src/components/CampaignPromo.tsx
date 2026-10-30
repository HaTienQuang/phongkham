"use client";

import React, { useState, useEffect } from "react";
import { Button, Tag, Progress, Badge } from "antd";
import {
  FireFilled,
  ClockCircleOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  RightOutlined,
  GiftFilled,
  SafetyCertificateFilled,
} from "@ant-design/icons";

export default function CampaignPromo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="uu-dai" className="py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="error" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 m-0">
              <FireFilled className="animate-bounce" />
              <span>Chương Trình Trợ Giá Y Tế Tháng 10/2026 • Azalea Clinic</span>
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói Tầm Soát Sức Khỏe Toàn Diện <br />
            <span className="text-teal-700">Ưu Đãi Đặc Biệt 35%</span> Cho Khách Đặt Trước
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dành riêng cho 50 khách hàng đầu tiên đăng ký qua website hoặc Zalo chính thức của Phòng Khám Đa Khoa Quốc Tế Azalea.
          </p>
        </div>

        {/* Promo Main Card with Ant Design Ribbon styling */}
        <Badge.Ribbon text="GIẢM 35% HÔM NAY" color="#ef4444" className="text-xs font-bold px-3 py-1 -mr-2">
          <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-teal-700/40">
            {/* Background glowing sphere */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Package Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <Tag color="cyan" className="font-semibold text-xs border-teal-500/40">
                    <GiftFilled /> Gói Khám Chuyên Sâu 12 Hạng Mục Tiêu Chuẩn Quốc Tế
                  </Tag>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  Tầm Soát Bệnh Lý Tim Mạch, Gan Thận, Rối Loạn Chuyển Hóa & Phát Hiện Sớm Ung Thư
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Khám lâm sàng tổng quát cùng BSCK I</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Siêu âm màu Doppler 4D ổ bụng toàn diện</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Xét nghiệm chức năng Gan (AST, ALT, GGT)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Xét nghiệm Thận, Axit Uric (Gout), Mỡ máu</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Điện tâm đồ (ECG) 12 chuyển đạo kỹ thuật số</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircleFilled className="text-emerald-400 shrink-0 text-base" />
                    <span>Chụp X-quang tim phổi thẳng công nghệ AI</span>
                  </div>
                </div>

                {/* Transparency notice according to YDVN Document */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/10 text-xs text-slate-300 border border-white/10">
                  <InfoCircleOutlined className="text-amber-400 text-base shrink-0 mt-0.5" />
                  <span>
                    <strong>Cam kết minh bạch Azalea:</strong> Giá niêm yết trọn gói, tuyệt đối không phát sinh chi phí ngầm, không chỉ định xét nghiệm thừa, không chèo kéo bán thực phẩm chức năng.
                  </span>
                </div>
              </div>

              {/* Right Column: Pricing & Ant Design Progress / Countdown */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl space-y-6">
                
                {/* Price display */}
                <div className="text-center pb-4 border-b border-slate-100">
                  <div className="text-xs text-slate-400 line-through">Giá gốc tại viện: 2.500.000 VNĐ</div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-teal-700">
                      1.625.000 <span className="text-base font-bold">VNĐ</span>
                    </span>
                    <Tag color="red" className="font-bold text-xs uppercase">
                      TIẾT KIỆM 35%
                    </Tag>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Bao gồm hồ sơ bệnh án điện tử và kết quả trả sau 45–60 phút
                  </div>
                </div>

                {/* Countdown Timer */}
                <div>
                  <div className="text-xs font-bold text-slate-700 text-center mb-2.5 flex items-center justify-center gap-1.5">
                    <ClockCircleOutlined className="text-red-600" />
                    <span>Thời gian ưu đãi kết thúc sau:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="block text-lg font-black text-slate-900">{timeLeft.days}</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Ngày</span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="block text-lg font-black text-slate-900">{timeLeft.hours}</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Giờ</span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="block text-lg font-black text-slate-900">{timeLeft.minutes}</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Phút</span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-xl">
                      <span className="block text-lg font-black text-teal-700">{timeLeft.seconds}</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Giây</span>
                    </div>
                  </div>
                </div>

                {/* Ant Design Progress bar */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600">Đã đăng ký: 38/50 suất</span>
                    <span className="text-red-600 font-bold">Chỉ còn 12 suất!</span>
                  </div>
                  <Progress
                    percent={76}
                    strokeColor={{
                      "0%": "#0f766e",
                      "100%": "#ef4444",
                    }}
                    status="active"
                    showInfo={false}
                  />
                </div>

                {/* Direct Booking CTA */}
                <Button
                  type="primary"
                  block
                  size="large"
                  href="#dat-lich"
                  icon={<RightOutlined />}
                  className="bg-teal-700 hover:!bg-teal-800 h-13 text-base font-extrabold shadow-lg shadow-teal-700/30 rounded-xl flex items-center justify-center flex-row-reverse"
                >
                  GIỮ SUẤT ƯU ĐÃI NGAY
                </Button>

              </div>

            </div>
          </div>
        </Badge.Ribbon>

      </div>
    </section>
  );
}
