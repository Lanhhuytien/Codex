export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    id: 'review-iphone-15-pro',
    title: 'Đánh giá iPhone 15 Pro Max: hiệu năng A17 Pro và camera 5x',
    excerpt:
      'Trải nghiệm thực tế iPhone 15 Pro Max với khung titan siêu bền, camera tele 5x ấn tượng và cổng USB-C mới.',
    image:
      'https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&w=900&q=80',
    category: 'Đánh giá',
    date: '05/01/2025',
  },
  {
    id: 'so-sanh-s24-ultra',
    title: 'So sánh Galaxy S24 Ultra và iPhone 15 Pro Max',
    excerpt:
      'Hai flagship đình đám với camera đỉnh cao, S Pen và chip A17 Pro. Nên chọn máy nào trong tầm giá 30 triệu?',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    category: 'So sánh',
    date: '02/01/2025',
  },
  {
    id: 'meo-pin',
    title: '5 mẹo tiết kiệm pin cho smartphone Android',
    excerpt: 'Tối ưu màn hình, quản lý ứng dụng chạy nền và sử dụng sạc chuẩn để kéo dài tuổi thọ pin.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    category: 'Mẹo hay',
    date: '28/12/2024',
  },
];
