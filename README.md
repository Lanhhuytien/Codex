# Huy Tiến Store - React + Vite + Tailwind

Giao diện thương mại điện tử lấy cảm hứng từ FPT Shop cho thương hiệu **Huy Tiến Store**. Dùng React, Vite, Tailwind CSS và mock data cho sản phẩm, blog.

## Tính năng chính
- Trang chủ với banner hero, danh mục nổi bật, sản phẩm gợi ý, blog công nghệ.
- Trang danh sách điện thoại có bộ lọc (hãng, dung lượng, giá, khuyến mãi) và sắp xếp.
- Trang chi tiết sản phẩm: gallery, chọn màu/dung lượng, ưu đãi, sản phẩm liên quan.
- Giỏ hàng dạng drawer + trang riêng, cập nhật số lượng, tóm tắt đơn hàng.
- Thanh toán giả lập: form thông tin, lựa chọn phương thức, màn hình cảm ơn.
- Trang đăng nhập/đăng ký đơn giản, trang hồ sơ với đơn hàng mock.
- Responsive đầy đủ cho desktop, tablet, mobile.

## Cấu trúc thư mục
- `src/components`: Header, banner, lưới danh mục, card sản phẩm, blog, footer, drawer giỏ hàng, bộ lọc.
- `src/pages`: Home, Category, ProductDetail, CartPage, Checkout, Auth, Account.
- `src/data`: Mock sản phẩm và bài viết.
- `src/context`: Context quản lý giỏ hàng.

## Chạy dự án
Môi trường hiện tại không thể truy cập registry npm nên chưa cài đặt dependencies. Khi có quyền cài đặt, chạy:

```bash
npm install
npm run dev
```

Sau đó mở `http://localhost:5173` để xem giao diện.
