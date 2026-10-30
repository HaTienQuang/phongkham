"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin, CalendarCheck, Menu, X, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top bar info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> Đạt chuẩn Bộ Y Tế & Sở Y Tế cấp phép
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {CLINIC_INFO.workingHours}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" /> Quận 1, TP. Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.hotlineClean}`}
              className="text-white hover:text-emerald-400 font-bold flex items-center gap-1 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Hotline cấp cứu & tư vấn: {CLINIC_INFO.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-emerald-100 shadow-sm bg-white p-1 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Logo Phòng Khám YDVN"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                PHÒNG KHÁM <span className="text-emerald-600">YDVN</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium block">
                Trung Tâm Y Khoa Kỹ Thuật Cao
              </span>
            </div>
          </Link>

          {/* Desktop Menu links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <Link href="#hero" className="hover:text-emerald-600 transition">
              Trang Chủ
            </Link>
            <Link href="#dich-vu" className="hover:text-emerald-600 transition">
              Chuyên Khoa
            </Link>
            <Link href="#uu-dai" className="hover:text-emerald-600 transition relative">
              Gói Khám Ưu Đãi
              <span className="absolute -top-2.5 -right-6 px-1.5 py-0.5 text-[9px] bg-red-500 text-white rounded-full font-bold uppercase tracking-wider animate-pulse">
                Hot
              </span>
            </Link>
            <Link href="#doi-ngu" className="hover:text-emerald-600 transition">
              Bác Sĩ Chuyên Khoa
            </Link>
            <Link href="#quy-trinh" className="hover:text-emerald-600 transition">
              Quy Trình Khám
            </Link>
            <Link href="#faq" className="hover:text-emerald-600 transition">
              Hỏi Đáp
            </Link>
          </div>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.hotlineClean}`}
              className="px-4 py-2 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{CLINIC_INFO.hotline}</span>
            </a>
            <Link
              href="#dat-lich"
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Đặt Lịch Ngay</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <Link
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-emerald-600"
            >
              Trang Chủ
            </Link>
            <Link
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-emerald-600"
            >
              Chuyên Khoa & Dịch Vụ
            </Link>
            <Link
              href="#uu-dai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-emerald-600 font-bold"
            >
              Gói Khám Ưu Đãi Tháng Này 🔥
            </Link>
            <Link
              href="#doi-ngu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-emerald-600"
            >
              Đội Ngũ Bác Sĩ Chuyên Khoa
            </Link>
            <Link
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-emerald-600"
            >
              Quy Trình Khám Nhanh 1:1
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-medium hover:text-emerald-600"
            >
              Hỏi Đáp Chuyên Môn
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="#dat-lich"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-md"
              >
                Đặt Lịch Khám Ưu Tiên
              </Link>
              <a
                href={`tel:${CLINIC_INFO.hotlineClean}`}
                className="w-full text-center py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" /> Gọi Hotline: {CLINIC_INFO.hotline}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
