"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Select, Checkbox, Tag, Alert, message } from "antd";
import {
  CalendarOutlined,
  PhoneOutlined,
  SendOutlined,
  CheckCircleFilled,
  LockFilled,
  SafetyCertificateFilled,
  UserOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { CLINIC_INFO } from "@/lib/utils";

const { TextArea } = Input;
const { Option } = Select;

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Khám Nội Tổng Quát");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim()) {
      setErrorMsg("Vui lòng nhập họ và tên của quý khách.");
      return;
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
      setErrorMsg("Số điện thoại không hợp lệ (Vui lòng nhập đúng 10 số di động).");
      return;
    }

    if (!agreeTerms) {
      setErrorMsg("Quý khách cần đồng ý với chính sách bảo mật dữ liệu y tế.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          service,
          date,
          note,
          agreeTerms,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        message.success("Đặt lịch khám thành công! Nhân viên y tế Azelea sẽ liên hệ quý khách.");
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
    <section id="dat-lich" className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-teal-100 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
          {/* Top colored border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-700" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5">
                <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
                  <CalendarOutlined /> Đặt Lịch Khám Ưu Tiên • Azalea Clinic
                </Tag>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Đăng Ký Khám Ngay <br />
                <span className="text-teal-700">Khám 1:1 Cùng Bác Sĩ</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Quý khách đặt hẹn trước sẽ được ưu tiên vào phòng khám ngay, điều dưỡng chuẩn bị sẵn bệnh án điện tử và giữ nguyên quyền lợi ưu đãi gói khám.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    1
                  </div>
                  <span>Miễn phí hồ sơ bệnh án điện tử lưu trữ trọn đời</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    2
                  </div>
                  <span>Giữ trọn vẹn ưu đãi 35% trong 30 ngày đăng ký</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                    3
                  </div>
                  <span>Bác sĩ chuyên khoa theo dõi và tư vấn kết quả sau khám</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-1">Cần hỗ trợ tư vấn gấp hoặc đặt hẹn khẩn?</p>
                <a
                  href={`tel:${CLINIC_INFO.hotlineClean}`}
                  className="inline-flex items-center gap-2 text-base font-black text-red-600 hover:text-red-700"
                >
                  <PhoneOutlined /> Hotline: {CLINIC_INFO.hotline}
                </a>
              </div>
            </div>

            {/* Right Column Form with Ant Design */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto text-3xl">
                    <CheckCircleFilled />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Đặt Lịch Thành Công!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Hệ thống Azalea đã ghi nhận lịch hẹn của <strong className="text-slate-800">{fullName}</strong> ({phone}). Bác sĩ / Điều dưỡng sẽ gọi điện xác nhận trong 10 phút.
                  </p>
                  <Button
                    type="primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName("");
                      setPhone("");
                      setNote("");
                    }}
                    className="bg-teal-700 font-bold"
                  >
                    Đăng Ký Thêm Lượt Khám Mới
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <Alert message={errorMsg} type="error" showIcon closable onClose={() => setErrorMsg("")} />
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên bệnh nhân <span className="text-red-500">*</span>
                    </label>
                    <Input
                      size="large"
                      prefix={<UserOutlined className="text-slate-400" />}
                      placeholder="Ví dụ: Trần Quốc Bảo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <Input
                        size="large"
                        prefix={<PhoneOutlined className="text-slate-400" />}
                        placeholder="09xx xxx xxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Chuyên khoa / Dịch vụ
                      </label>
                      <Select
                        size="large"
                        value={service}
                        onChange={(val) => setService(val)}
                        className="w-full"
                      >
                        <Option value="Khám Nội Tổng Quát">Khám Nội Tổng Quát</Option>
                        <Option value="Gói Ưu Đãi 35%">Gói Tầm Soát Ưu Đãi 35%</Option>
                        <Option value="Tim Mạch & Huyết Áp">Tim Mạch & Huyết Áp</Option>
                        <Option value="Cơ Xương Khớp">Cơ Xương Khớp</Option>
                        <Option value="Nội Soi Tiêu Hóa">Nội Soi Tiêu Hóa (NBI)</Option>
                        <Option value="Xét Nghiệm Nhanh">Xét Nghiệm Kỹ Thuật Cao</Option>
                        <Option value="Sản Phụ Khoa">Sản Phụ Khoa</Option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ngày dự kiến đến khám
                    </label>
                    <Input
                      size="large"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mô tả triệu chứng sức khỏe (nếu có)
                    </label>
                    <TextArea
                      rows={2}
                      placeholder="Mô tả ngắn triệu chứng bạn đang gặp..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </div>

                  {/* Privacy compliance checkbox */}
                  <div className="pt-1">
                    <Checkbox
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="text-xs text-slate-500"
                    >
                      Tôi đồng ý bảo mật và cho phép phòng khám Azalea liên hệ tư vấn xác nhận theo quy định bảo vệ dữ liệu cá nhân.
                    </Checkbox>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loading}
                    size="large"
                    icon={<SendOutlined />}
                    className="bg-teal-700 hover:!bg-teal-800 h-13 text-base font-extrabold shadow-lg shadow-teal-700/30 rounded-xl"
                  >
                    XÁC NHẬN ĐẶT LỊCH KHÁM NGAY
                  </Button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <LockFilled />
                    <span>Cam kết bảo mật thông tin hồ sơ y tế 100%</span>
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
