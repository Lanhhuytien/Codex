export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  discount?: number;
  tags?: string[];
  image: string;
  capacities?: string[];
  colors?: string[];
  category?: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    price: 34990000,
    salePrice: 30990000,
    discount: 11,
    tags: ['Trả góp 0%', 'Độc quyền'],
    image:
      'https://images.unsplash.com/photo-1695048133051-6a39aea66e47?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB', '512GB', '1TB'],
    colors: ['Titan tự nhiên', 'Titan xanh', 'Titan trắng'],
    category: 'Điện thoại',
    description:
      'Chip A17 Pro, khung titan siêu bền, camera tele 5x, sạc USB-C, màn hình ProMotion 120Hz.',
  },
  {
    id: 's24-ultra',
    name: 'Samsung Galaxy S24 Ultra 256GB',
    brand: 'Samsung',
    price: 32990000,
    salePrice: 28990000,
    discount: 12,
    tags: ['Trả góp 0%', 'Giảm sốc'],
    image:
      'https://images.unsplash.com/photo-1705267504643-d746e7d4fd99?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB', '512GB'],
    colors: ['Titan xám', 'Titan đen', 'Titan tím'],
    category: 'Điện thoại',
    description: 'Camera 200MP, S Pen đi kèm, màn hình Dynamic AMOLED 2X 120Hz, Snapdragon 8 Gen 3.',
  },
  {
    id: 'xiaomi-14',
    name: 'Xiaomi 14 256GB',
    brand: 'Xiaomi',
    price: 20990000,
    salePrice: 17990000,
    discount: 14,
    tags: ['Giảm sốc'],
    image:
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB'],
    colors: ['Đen', 'Trắng'],
    category: 'Điện thoại',
    description: 'Hệ thống camera Leica, Snapdragon 8 Gen 3, sạc 90W HyperCharge.',
  },
  {
    id: 'oppo-reno12',
    name: 'OPPO Reno12 Pro 5G',
    brand: 'OPPO',
    price: 14990000,
    salePrice: 12990000,
    discount: 13,
    tags: ['Trả góp 0%'],
    image:
      'https://images.unsplash.com/photo-1529336953128-a85760f58f40?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB'],
    colors: ['Xanh bạc hà', 'Bạc'],
    category: 'Điện thoại',
    description: 'Thiết kế thời trang, camera chân dung AI, sạc siêu nhanh 80W.',
  },
  {
    id: 'realme-gt',
    name: 'realme GT 6',
    brand: 'Realme',
    price: 12990000,
    salePrice: 9990000,
    discount: 23,
    tags: ['Giảm sốc'],
    image:
      'https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB'],
    colors: ['Xanh lá', 'Bạc'],
    category: 'Điện thoại',
    description: 'Hiệu năng mạnh mẽ, màn hình 144Hz, sạc 120W, pin 5500mAh.',
  },
  {
    id: 'ipad-air',
    name: 'iPad Air M2 11 inch Wi-Fi',
    brand: 'Apple',
    price: 19990000,
    salePrice: 17490000,
    discount: 12,
    tags: ['Trả góp 0%'],
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    capacities: ['128GB', '256GB'],
    colors: ['Xanh dương', 'Tím', 'Bạc'],
    category: 'Tablet',
    description: 'Chip M2 mạnh mẽ, hỗ trợ Apple Pencil Pro, màn hình Liquid Retina sắc nét.',
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air M3 13 inch',
    brand: 'Apple',
    price: 29990000,
    salePrice: 25990000,
    discount: 13,
    tags: ['Độc quyền'],
    image:
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80',
    capacities: ['256GB', '512GB'],
    colors: ['Midnight', 'Bạc', 'Starlight'],
    category: 'Laptop',
    description: 'Siêu mỏng nhẹ, pin 18 giờ, màn hình Liquid Retina sắc nét, quạtless yên tĩnh.',
  },
  {
    id: 'airpods-pro',
    name: 'AirPods Pro 2 USB-C',
    brand: 'Apple',
    price: 6990000,
    salePrice: 5990000,
    discount: 14,
    tags: ['Giảm sốc'],
    image:
      'https://images.unsplash.com/photo-1588423771130-554e2b58f0b7?auto=format&fit=crop&w=900&q=80',
    capacities: ['Mặc định'],
    colors: ['Trắng'],
    category: 'Phụ kiện',
    description: 'Khử ồn chủ động thích ứng, âm thanh cá nhân hóa, chống bụi chuẩn IP54.',
  },
];

export const brands = ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Realme'];

export const priceRanges = [
  { label: 'Dưới 10 triệu', value: 'under-10', min: 0, max: 10000000 },
  { label: '10 - 15 triệu', value: '10-15', min: 10000000, max: 15000000 },
  { label: '15 - 20 triệu', value: '15-20', min: 15000000, max: 20000000 },
  { label: 'Trên 20 triệu', value: 'above-20', min: 20000000, max: Number.MAX_SAFE_INTEGER },
];
