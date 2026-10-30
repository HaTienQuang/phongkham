"use client";

import React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Zalo Button */}
      <a
        href={CLINIC_INFO.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        aria-label="Nhắn tin qua Zalo"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
          Chat Bác Sĩ Zalo
        </span>
        <div className="w-6 h-6 flex items-center justify-center font-black text-sm bg-white text-blue-600 rounded-full">
          Z
        </div>
      </a>

      {/* Booking Quick CTA */}
      <a
        href="#dat-lich"
        className="group relative flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        aria-label="Đặt lịch hẹn khám"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
          Đặt Lịch Khám Ngay
        </span>
        <CalendarCheck className="w-6 h-6" />
      </a>

      {/* Calling button with pulse ring animation */}
      <a
        href={`tel:${CLINIC_INFO.hotlineClean}`}
        className="relative flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white animate-pulse-glow"
        aria-label="Gọi ngay Hotline"
      >
        <Phone className="w-7 h-7 animate-call-ring" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-black items-center justify-center text-white">
            1
          </span>
        </span>
      </a>
    </div>
  );
}
