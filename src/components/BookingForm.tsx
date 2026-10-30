"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, CheckCircle2, AlertTriangle, Send, Phone, Lock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/utils";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "Khám Tổng Quát",
    date: "",
    note: "",
    agreeTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg("Vui lòng nhập họ và tên của quý khách.");
      return;
    }

    // VN Phone validation (10 digits starting with 0)
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      setErrorMsg("Số điện thoại không hợp lệ (Vui lòng nhập số điện thoại 10 chữ số).");
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMsg("Quý khách cần đồng ý với chính sách bảo mật dữ liệu y tế.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(resData.message || "Có lỗi xảy ra khi gửi thông tin. Vui lòng gọi trực tiếp Hotline.");
      }
    } catch {
      setErrorMsg("Không thể kết nối đến máy chủ. Vui lòng gọi Hotline để được hỗ trợ ngay.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dat-lich" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <CalendarCheck className="w-4 h-4 text-emerald-600" />
                <span>Đặt Lịch Khám Ưu Tiên</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Đăng Ký Khám Ngay <br />
                <span className="text-emerald-600">Không Cần Chờ Đợi</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Quý khách đặt hẹn trước sẽ được nhân viên y tế xác nhận trong 10 phút, sắp xếp bác sĩ chuyên khoa phụ trách và chuẩn bị sẵn hồ sơ khi đến nơi.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    1
                  </div>
                  <span>Miễn phí làm sổ & hồ sơ bệnh án điện tử</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    2
                  </div>
                  <span>Giữ nguyên ưu đãi gói khám trong 30 ngày</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    3
                  </div>
                  <span>Bác sĩ tư vấn chế độ ăn uống & theo dõi sau khám</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Cần hỗ trợ gấp hoặc tư vấn khẩn cấp?</p>
                <a
                  href={`tel:${CLINIC_INFO.hotlineClean}`}
                  className="inline-flex items-center gap-2 text-base font-black text-red-600 hover:text-red-700"
                >
                  <Phone className="w-4 h-4" /> Hotline: {CLINIC_INFO.hotline}
                </a>
              </div>
            </div>

            {/* Right form submission */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Đăng Ký Thành Công!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Hệ thống đã tiếp nhận lịch hẹn của <strong className="text-slate-800">{formData.fullName}</strong> ({formData.phone}). Nhân viên y tế sẽ gọi điện xác nhận trong ít phút.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        service: "Khám Tổng Quát",
                        date: "",
                        note: "",
                        agreeTerms: true,
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md"
                  >
                    Đăng Ký Thêm Lượt Mới
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="flex items-center gap-2 p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-xl">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên bệnh nhân <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn An"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số điện thoại nhận tin <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx xxx xxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Chuyên khoa / Dịch vụ
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white"
                      >
                        <option value="Khám Tổng Quát">Khám Nội Tổng Quát</option>
                        <option value="Gói Ưu Đãi 35%">Gói Tầm Soát Ưu Đãi 35%</option>
                        <option value="Tim Mạch">Tim Mạch & Huyết Áp</option>
                        <option value="Cơ Xương Khớp">Cơ Xương Khớp</option>
                        <option value="Tiêu Hóa - Nội Soi">Tiêu Hóa & Nội Soi Không Đau</option>
                        <option value="Xét Nghiệm">Xét Nghiệm Kỹ Thuật Cao</option>
                        <option value="Sản Phụ Khoa">Sản Phụ Khoa</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ngày dự kiến đến khám
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Triệu chứng hoặc yêu cầu thêm (nếu có)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mô tả ngắn triệu chứng bạn đang gặp..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white resize-none"
                    />
                  </div>

                  {/* Privacy compliance according to YDVN PDF */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-500 select-none">
                      Tôi đồng ý bảo mật và cho phép phòng khám liên hệ qua điện thoại/Zalo để xác nhận lịch hẹn theo Nghị định bảo vệ dữ liệu cá nhân.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-base active:scale-98 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>XÁC NHẬN ĐẶT HẸN KHÁM NGAY</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Cam kết bảo mật thông tin bệnh nhân 100%</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
