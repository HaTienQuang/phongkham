import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, service, date, note, agreeTerms } = body;

    // Validation
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, message: "Họ tên và số điện thoại là thông tin bắt buộc." },
        { status: 400 }
      );
    }

    if (!agreeTerms) {
      return NextResponse.json(
        { success: false, message: "Chưa chấp thuận điều khoản bảo mật thông tin." },
        { status: 400 }
      );
    }

    // Server-side logging for verification
    const leadData = {
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      service: service || "Khám Tổng Quát",
      date: date || new Date().toISOString().split("T")[0],
      note: note ? String(note).trim() : "",
      createdAt: new Date().toISOString(),
    };

    console.log("[YDVN Lead Received]:", leadData);

    // In production on Vercel, you can send this data to Google Sheets, Telegram Bot, or CRM Webhook:
    // e.g.: await fetch(process.env.CRM_WEBHOOK_URL, { method: "POST", body: JSON.stringify(leadData) });

    return NextResponse.json({
      success: true,
      message: "Tiếp nhận lịch hẹn thành công. Bác sĩ sẽ liên hệ quý khách trong ít phút.",
      data: leadData,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi hệ thống khi xử lý yêu cầu." },
      { status: 500 }
    );
  }
}
