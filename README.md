# PHÒNG KHÁM YDVN - NEXT.JS LANDING PAGE & SEO HIGH-CONVERSION

Dự án Landing Page phòng khám đa khoa kỹ thuật cao xây dựng bằng **Next.js 14 App Router**, **Tailwind CSS**, **Framer Motion**, chuẩn hóa theo tài liệu hướng dẫn **"YDVN 2026: Tự tạo website bằng AI"**.

---

## 1. Cấu trúc Dự Án & Tệp Tin

- `src/app/page.tsx`: Trang chủ phòng khám đa khoa tổng thể (Chuẩn hóa thương hiệu, dịch vụ, bác sĩ, quy trình).
- `src/app/uu-dai/page.tsx`: Landing Page chuyên biệt chạy quảng cáo (Google Ads, Facebook Ads, Zalo Ads) cho gói khám ưu đãi 35%.
- `src/app/sitemap.ts`: Tự động sinh `sitemap.xml` chuẩn Google SEO.
- `src/app/robots.ts`: Tự động sinh `robots.txt` cho phép bọ tìm kiếm thu thập.
- `src/app/api/contact/route.ts`: API nhận dữ liệu đặt lịch hẹn (validate SĐT Việt Nam, chống spam).
- `public/images/`: Chứa ảnh thực tế `doctor.jpg` và `logo.jpg`.

---

## 2. Các Bước Đưa Lên Vercel & Gắn Domain Riêng

### Bước 1: Đẩy mã nguồn lên GitHub
1. Mở terminal tại thư mục `D:\phongkham`:
   ```bash
   git init
   git add .
   git commit -m "Khoi tao Landing Page Phong Kham YDVN"
   ```
2. Tạo 1 repository mới trên [github.com/new](https://github.com/new) (ví dụ: `phong-kham-landing-page`).
3. Đẩy code lên GitHub:
   ```bash
   git remote add origin https://github.com/<tai-khoan-cua-ban>/phong-kham-landing-page.git
   git branch -M main
   git push -u origin main
   ```

### Bước 2: Triển khai lên Vercel (1 Click Deploy)
1. Đăng nhập [vercel.com](https://vercel.com) bằng tài khoản GitHub.
2. Chọn **"Add New..."** -> **"Project"**.
3. Chọn kho `phong-kham-landing-page` vừa tải lên và nhấn **"Deploy"**.
4. Vercel sẽ tự động build và cấp cho bạn đường link xem thử: `https://phong-kham-xxx.vercel.app`.

### Bước 3: Gắn tên miền riêng (Domain)
1. Trong Vercel Dashboard của dự án, vào **Settings** -> **Domains**.
2. Nhập tên miền của bạn (ví dụ: `phongkhamydvn.vn` hoặc `www.phongkhamydvn.vn`) và bấm **Add**.
3. Cấu hình DNS tại nhà cung cấp tên miền theo hướng dẫn của Vercel:
   - Bản ghi `A`: Tên `@` trỏ về IP `76.76.21.21`
   - Bản ghi `CNAME`: Tên `www` trỏ về `cname.vercel-dns.com`
4. Vercel sẽ tự động cấp chứng chỉ bảo mật **SSL (HTTPS)** miễn phí trong 1-2 phút.

---

## 3. Quy Trình Khai Báo Google Search Console & Làm SEO

1. Truy cập [Google Search Console](https://search.google.com/search-console).
2. Thêm trang web với URL tên miền chính thức của bạn (ví dụ: `https://phongkhamydvn.vn`).
3. Xác minh quyền sở hữu: Thêm bản ghi DNS `TXT` vào trang quản lý tên miền.
4. Gửi sơ đồ trang web (Sitemap):
   - Nhập `sitemap.xml` và bấm **Gửi**.
5. Kiểm tra URL (URL Inspection): Nhập link Landing Page `/uu-dai` và bấm **Yêu cầu lập chỉ mục (Request Indexing)**.

---

## 4. Gắn Mã Theo Dõi Quảng Cáo (Tracking)

Trong file `src/components/AnalyticsTracker.tsx` và `src/app/layout.tsx`:
- **Google Ads:** Chèn ID chuyển đổi (GTAG) để đo lường cuộc gọi và lượt gửi form thành công.
- **Facebook / TikTok / Zalo Pixel:** Dán mã script vào thẻ `<head>` để tối ưu tệp đối tượng chuyển đổi.
