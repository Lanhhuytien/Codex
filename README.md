# Huy Tiến Store

Giao diện website bán điện thoại phong cách thương mại điện tử, xây dựng bằng React + Vite + Tailwind CSS. Dữ liệu sản phẩm, bài viết và tài khoản đều là mock data phục vụ demo UI.

## Tính năng chính
- Trang chủ với hero banner, danh mục nổi bật, sản phẩm hot, lợi ích và blog công nghệ.
- Trang danh mục với bộ lọc hãng/giá/dung lượng, sắp xếp và lưới sản phẩm.
- Trang chi tiết sản phẩm: gallery, giá khuyến mãi, lựa chọn màu/dung lượng, ưu đãi, sản phẩm liên quan.
- Giỏ hàng dạng drawer nhanh và trang giỏ hàng riêng, cập nhật số lượng, tóm tắt tiền.
- Trang thanh toán với form thông tin, chọn phương thức thanh toán và màn hình cảm ơn.
- Trang tài khoản cơ bản: đăng nhập, đăng ký và hồ sơ/đơn hàng mẫu.

## Cấu trúc & công nghệ
- **React + Vite**: SPA, routing bằng `react-router-dom`.
- **Tailwind CSS** (+ `@tailwindcss/forms`): tùy biến màu chủ đạo cam - trắng - xám đen.
- **State giỏ hàng**: quản lý qua React Context.

## Chạy dự án
1. Cài đặt phụ thuộc (yêu cầu Node.js 18+):
   ```bash
   npm install
   ```
2. Chạy môi trường phát triển:
   ```bash
   npm run dev
   ```
3. Build sản phẩm:
   ```bash
   npm run build
   ```

> Lưu ý: nếu môi trường giới hạn mạng khiến việc tải gói thất bại, hãy cấu hình lại mirror/registry phù hợp rồi chạy `npm install`.
