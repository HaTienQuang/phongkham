"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

export default function CampaignPromo() {
  // Countdown simulation
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
      {/* Decorative background glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-4 h-4 text-red-600 animate-bounce" />
            <span>Chương Trình Trợ Giá Y Tế Tháng 10/2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói Tầm Soát Sức Khỏe Toàn Diện <br />
            <span className="text-emerald-600">Trợ Giá Đặc Biệt 35%</span> Cho Khách Đặt Trước
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Áp dụng cho 50 khách hàng đăng ký online sớm nhất trong tuần. Giúp phát hiện sớm 95% nguy cơ bệnh lý tiềm ẩn.
          </p>
        </div>

        {/* Promo Main Card */}
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-emerald-700/50">
          {/* Background sparkles overlay */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details of package */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                <Sparkles className="w-4 h-4" /> Gói Khám Chuyên Sâu 12 Hạng Mục
              </div>

              <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                Tầm Soát Tim Mạch, Gan Mật, Tiểu Đường & Tầm Soát Ung Thư Sớm
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Khám Nội khoa tổng quát cùng BSCK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Siêu âm màu Doppler 4D ổ bụng</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Xét nghiệm chức năng Gan, Thận, Đường huyết</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Điện tim kỹ thuật số 12 chuyển đạo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chụp X-Quang lồng ngực thẳng kỹ thuật số</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tư vấn chế độ dinh dưỡng cá nhân 1:1</span>
                </div>
              </div>

              {/* Notice & Transparency according to YDVN PDF */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/10 text-xs text-slate-300 border border-white/10">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Quy định minh bạch YDVN:</strong> Giá đã bao gồm toàn bộ phí khám và vật tư. Bác sĩ tư vấn theo tình trạng thực tế, tuyệt đối không chèo kéo làm thêm dịch vụ khi không cần thiết.
                </span>
              </div>
            </div>

            {/* Right Column: Pricing & Countdown */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl space-y-6">
              
              {/* Price comparison */}
              <div className="text-center pb-4 border-b border-slate-100">
                <div className="text-xs text-slate-500 line-through">Giá niêm yết tại quầy: 2.500.000 VNĐ</div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                    1.625.000 <span className="text-base font-bold">VNĐ</span>
                  </span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-black rounded-md">
                    TIẾT KIỆM 35%
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Đã bao gồm hồ sơ bệnh án điện tử và kết quả trong ngày
                </div>
              </div>

              {/* Countdown timer */}
              <div>
                <div className="text-xs font-bold text-slate-700 text-center mb-2 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-600" /> Thời gian ưu đãi kết thúc sau:
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
                    <span className="block text-lg font-black text-emerald-600">{timeLeft.seconds}</span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Giây</span>
                  </div>
                </div>
              </div>

              {/* Progress bar of available spots */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-600">Đã đăng ký: 38/50 suất</span>
                  <span className="text-red-600 font-bold">Chỉ còn 12 suất!</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-red-500 h-full w-[76%] rounded-full animate-pulse" />
                </div>
              </div>

              {/* Direct Booking CTA */}
              <a
                href="#dat-lich"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-center rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group block"
              >
                <span>GIỮ SUẤT ƯU ĐÃI NGAY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
