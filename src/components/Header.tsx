"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Drawer } from "antd";
import {
  PhoneOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  SafetyCertificateFilled,
  MenuOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <SafetyCertificateFilled className="text-amber-400" />
              Sở Y Tế Cấp Phép Số 09288/SYT-GPHĐ
            </span>
            <span className="flex items-center gap-1.5">
              <ClockCircleOutlined className="text-slate-400" />
              {CLINIC_INFO.workingHours}
            </span>
            <span className="flex items-center gap-1.5">
              <EnvironmentOutlined className="text-slate-400" />
              88 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${CLINIC_INFO.hotlineClean}`}
              className="text-white hover:text-amber-400 font-bold flex items-center gap-1.5 transition"
            >
              <PhoneOutlined className="text-amber-400" />
              Hotline 24/7: <span className="text-amber-400">{CLINIC_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-md py-2.5"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Azalea (shrink-0 so never squeezed) */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-amber-500/40 shadow-sm bg-black shrink-0 transition-transform group-hover:scale-105">
              <Image
                src={CLINIC_INFO.images.logo}
                alt="Logo Azalea Clinic"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 block leading-tight">
                  AZALEA <span className="text-teal-700">CLINIC</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-md uppercase tracking-wider">
                  QUỐC TẾ
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Viện Y Khoa Kỹ Thuật Cao & Đa Khoa
              </span>
            </div>
          </Link>

          {/* Desktop Menu links (Clean spacing, nowrap, NO overlap) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[14px] font-bold text-slate-700">
            <Link
              href="#hero"
              className="hover:text-teal-700 transition whitespace-nowrap"
            >
              Trang Chủ
            </Link>
            <Link
              href="#dich-vu"
              className="hover:text-teal-700 transition whitespace-nowrap"
            >
              Chuyên Khoa
            </Link>
            <Link
              href="#uu-dai"
              className="hover:text-teal-700 transition flex items-center gap-1.5 whitespace-nowrap group"
            >
              <span>Gói Tầm Soát</span>
              <span className="px-1.5 py-0.5 text-[10px] font-black bg-red-600 text-white rounded-full leading-none group-hover:bg-red-700">
                -35%
              </span>
            </Link>
            <Link
              href="#bac-si"
              className="hover:text-teal-700 transition whitespace-nowrap"
            >
              Bác Sĩ Trưởng Khoa
            </Link>
            <Link
              href="#quy-trinh"
              className="hover:text-teal-700 transition whitespace-nowrap"
            >
              Quy Trình Khám
            </Link>
            <Link
              href="#faq"
              className="hover:text-teal-700 transition whitespace-nowrap"
            >
              Hỏi Đáp
            </Link>
          </div>

          {/* Header Action Buttons (shrink-0) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              type="default"
              shape="round"
              icon={<PhoneOutlined className="text-teal-700" />}
              href={`tel:${CLINIC_INFO.hotlineClean}`}
              className="border-slate-300 font-bold hover:!text-teal-700 hover:!border-teal-700"
            >
              {CLINIC_INFO.hotline}
            </Button>
            <Button
              type="primary"
              shape="round"
              icon={<CalendarOutlined />}
              href="#dat-lich"
              className="bg-teal-700 hover:!bg-teal-800 shadow-md shadow-teal-700/20 font-bold"
            >
              Đặt Lịch Khám
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>

        {/* Ant Design Drawer for Mobile Navigation */}
        <Drawer
          title={
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden bg-black shrink-0 border border-amber-400/40">
                <Image src={CLINIC_INFO.images.logo} alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-slate-900 text-base">Azalea Medical Clinic</span>
            </div>
          }
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          size="default"
        >
          <div className="flex flex-col space-y-4 text-base font-semibold text-slate-800">
            <Link href="#hero" onClick={() => setDrawerOpen(false)} className="hover:text-teal-700 py-1">
              Trang Chủ
            </Link>
            <Link href="#dich-vu" onClick={() => setDrawerOpen(false)} className="hover:text-teal-700 py-1">
              Chuyên Khoa & Dịch Vụ
            </Link>
            <Link href="#uu-dai" onClick={() => setDrawerOpen(false)} className="text-teal-700 font-bold py-1 flex items-center justify-between">
              <span>Gói Tầm Soát Ưu Đãi</span>
              <span className="px-2 py-0.5 text-xs bg-red-600 text-white rounded-full font-bold">GIẢM 35%</span>
            </Link>
            <Link href="#bac-si" onClick={() => setDrawerOpen(false)} className="hover:text-teal-700 py-1">
              Bác Sĩ Trưởng Khoa Azalea
            </Link>
            <Link href="#quy-trinh" onClick={() => setDrawerOpen(false)} className="hover:text-teal-700 py-1">
              Quy Trình Khám Nhanh 1:1
            </Link>
            <Link href="#faq" onClick={() => setDrawerOpen(false)} className="hover:text-teal-700 py-1">
              Hỏi Đáp Chuyên Môn
            </Link>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Button
                type="primary"
                block
                size="large"
                icon={<CalendarOutlined />}
                href="#dat-lich"
                onClick={() => setDrawerOpen(false)}
                className="bg-teal-700 font-bold"
              >
                Đặt Lịch Khám Ưu Tiên
              </Button>
              <Button
                block
                size="large"
                icon={<PhoneOutlined className="text-teal-700" />}
                href={`tel:${CLINIC_INFO.hotlineClean}`}
                className="font-bold"
              >
                Hotline: {CLINIC_INFO.hotline}
              </Button>
            </div>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
