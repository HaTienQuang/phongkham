"use client";

import React from "react";
import { Collapse, Tag } from "antd";
import { QuestionCircleFilled, CaretRightOutlined } from "@ant-design/icons";

const FAQS = [
  {
    key: "1",
    label: "Phòng khám Azalea có thanh toán Bảo Hiểm Y Tế và Bảo Hiểm Tư Nhân không?",
    children: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Có. Phòng khám hỗ trợ xuất hóa đơn điện tử chuẩn y tế, bản trích sao bệnh án chi tiết để thanh toán bảo lãnh trực tiếp với các đơn vị bảo hiểm tư nhân (Bảo Việt, PVI, Manulife, Prudential, Dai-ichi Life...) và hướng dẫn thủ tục liên tuyến BHYT theo quy định của Sở Y Tế.
      </p>
    ),
  },
  {
    key: "2",
    label: "Đi khám gói tầm soát sức khỏe tổng quát có cần nhịn ăn trước không?",
    children: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Đối với bệnh nhân đăng ký Gói tầm soát sức khỏe tổng quát, xét nghiệm đường huyết, mỡ máu, chức năng gan thận hoặc nội soi dạ dày, quý khách nên nhịn ăn sáng từ 6 - 8 tiếng trước khi đến khám. Bạn vẫn có thể uống nước lọc thông thường.
      </p>
    ),
  },
  {
    key: "3",
    label: "Đặt lịch online trước tại Azalea thì khi đến có phải bốc số chờ đợi không?",
    children: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Không. Bệnh nhân đặt lịch trước qua website hoặc Hotline Azalea sẽ được cấp mã khám ưu tiên VIP. Khi đến nơi, bạn chỉ cần báo mã số tại quầy lễ tân để được điều dưỡng hướng dẫn thẳng vào phòng khám của Bác sĩ Chuyên khoa, không cần bốc số chờ đợi.
      </p>
    ),
  },
  {
    key: "4",
    label: "Sau bao lâu thì có đầy đủ kết quả xét nghiệm và siêu âm?",
    children: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Nhờ hệ thống máy xét nghiệm tự động hóa thế hệ mới 2026, các kết quả sinh hóa cơ bản, siêu âm Doppler 4D và điện tâm đồ sẽ có trong vòng 45 - 60 phút. Bác sĩ Trưởng khoa sẽ trực tiếp đọc, tư vấn kết quả và gửi bản sao bệnh án điện tử qua Zalo/Email cho bạn.
      </p>
    ),
  },
  {
    key: "5",
    label: "Chi phí khám tại Azalea Clinic có phát sinh thêm khoản nào ngoài bảng giá không?",
    children: (
      <p className="text-slate-600 text-sm leading-relaxed">
        Tuyệt đối không. Theo tiêu chí minh bạch y khoa của Azalea Clinic, mọi chi phí đều được công khai trước khi thực hiện. Bác sĩ chỉ chỉ định các xét nghiệm thực sự cần thiết, nói không với việc chèo kéo hoặc ép buộc làm thêm dịch vụ ngoài nhu cầu.
      </p>
    ),
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Tag color="cyan" className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider m-0">
              <QuestionCircleFilled className="text-teal-700" />
              <span>Giải Đáp Thắc Mắc Bệnh Nhân</span>
            </Tag>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Câu Hỏi Thường Gặp Về Dịch Vụ Khám
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Thông tin minh bạch giúp quý khách hoàn toàn yên tâm trước khi đến thăm khám tại Azalea Clinic.
          </p>
        </div>

        {/* Ant Design Collapse with smooth chevron */}
        <Collapse
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} className="text-teal-700 text-sm" />
          )}
          items={FAQS}
          className="bg-slate-50/70 border-slate-200 rounded-2xl overflow-hidden shadow-sm"
        />

      </div>
    </section>
  );
}
