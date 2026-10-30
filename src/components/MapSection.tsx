"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  EnvironmentFilled,
  ClockCircleFilled,
  PhoneFilled,
  CarFilled,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

export default function MapSection() {
  return (
    <section id="dia-chi" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Clinic info & address details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5">
              <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
                <EnvironmentFilled /> Vị Trí & Hướng Dẫn Đường Đi
              </Tag>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              Trung Tâm Y Khoa Azalea <br />
              <span className="text-teal-700">Tọa Lạc Trung Tâm Quận 1</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Vị trí đắc địa ngay mặt tiền đại lộ Lê Lợi, đối diện khu thương mại sầm uất, thuận tiện cho việc di chuyển từ các quận huyện trong TP.HCM và các tỉnh lân cận.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <EnvironmentFilled className="text-xl text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Địa chỉ phòng khám</div>
                  <div className="text-sm font-bold text-slate-900">{CLINIC_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <ClockCircleFilled className="text-xl text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Thời gian làm việc</div>
                  <div className="text-sm font-bold text-slate-900">{CLINIC_INFO.workingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <CarFilled className="text-xl text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Bãi đỗ xe thông minh</div>
                  <div className="text-sm font-bold text-slate-900">Có chỗ đậu xe ô tô và xe máy rộng rãi, an ninh 24/7</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                type="primary"
                size="large"
                icon={<PhoneFilled />}
                href={`tel:${CLINIC_INFO.hotlineClean}`}
                className="bg-teal-700 hover:!bg-teal-800 font-bold rounded-xl"
              >
                Hotline Dẫn Đường: {CLINIC_INFO.hotline}
              </Button>
              <Button
                size="large"
                href="https://maps.google.com/?q=88+Le+Loi+Ben+Nghe+District+1+Ho+Chi+Minh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border-slate-300 rounded-xl"
              >
                Mở Trên Google Maps
              </Button>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7">
            <div className="w-full h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative">
              <iframe
                title="Bản đồ chỉ đường Phòng Khám Đa Khoa Quốc Tế Azalea"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.495034637775!2d106.69837947573595!3d10.773347559250005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x178749179f886f44!2zODggTMOqIEzhu6NpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1730279800000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

