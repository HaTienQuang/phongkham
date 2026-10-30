"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Phòng khám có áp dụng Bảo Hiểm Y Tế (BHYT) và bảo hiểm bảo lãnh không?",
    a: "Có. Phòng khám hỗ trợ xuất hóa đơn điện tử chuẩn y tế, bệnh án chi tiết để thanh toán bảo lãnh trực tiếp với các đơn vị bảo hiểm tư nhân (Bảo Việt, PVI, Manulife, Prudential...) và hỗ trợ thủ tục chuyển tuyến BHYT theo đúng quy định."
  },
  {
    q: "Đi khám có cần nhịn ăn trước không?",
    a: "Đối với bệnh nhân đăng ký Gói tầm soát sức khỏe tổng quát, xét nghiệm đường huyết, mỡ máu hoặc nội soi tiêu hóa, quý khách nên nhịn ăn từ 6 - 8 tiếng trước khi đến khám. Có thể uống nước lọc thông thường."
  },
  {
    q: "Đặt lịch online trước thì khi đến có phải xếp hàng lấy số không?",
    a: "Bệnh nhân đặt hẹn trước qua website hoặc Hotline sẽ được cấp mã khám ưu tiên. Khi đến nơi, bạn chỉ cần báo mã số tại quầy lễ tân để được điều dưỡng hướng dẫn thẳng vào phòng khám của Bác sĩ chuyên khoa, không cần bốc số chờ đợi."
  },
  {
    q: "Bao lâu thì có kết quả khám và xét nghiệm?",
    a: "Các xét nghiệm sinh hóa cơ bản, siêu âm và điện tim sẽ có kết quả trong vòng 45 - 60 phút. Bác sĩ sẽ trực tiếp giải thích kết quả và gửi bản sao bệnh án điện tử qua Zalo/Email để quý khách tiện lưu trữ tra cứu trọn đời."
  },
  {
    q: "Chi phí khám có phát sinh thêm khoản nào ngoài bảng giá niêm yết không?",
    a: "Tuyệt đối không. Theo tiêu chí minh bạch y khoa của YDVN, mọi chi phí đều được công khai trước khi thực hiện. Bác sĩ chỉ chỉ định các hạng mục thực sự cần thiết theo phác đồ y khoa, không vẽ bệnh, không ép mua thuốc bổ."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Câu Hỏi Thường Gặp Của Bệnh Nhân
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Thông tin minh bạch giúp bạn hoàn toàn an tâm trước khi đến thăm khám.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700 transition"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
