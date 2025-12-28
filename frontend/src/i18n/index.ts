import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        cart: 'Cart',
        orders: 'Orders',
        admin: 'Admin'
      },
      auth: {
        login: 'Login',
        logout: 'Logout',
        register: 'Register'
      },
      product: {
        addToCart: 'Add to cart',
        price: 'Price',
        salePrice: 'Sale price'
      },
      cart: {
        title: 'Your cart',
        checkout: 'Checkout',
        address: 'Shipping address'
      },
      admin: {
        dashboard: 'Dashboard',
        products: 'Products',
        orders: 'Orders',
        banners: 'Banners',
        finance: 'Finance'
      }
    }
  },
  vi: {
    translation: {
      nav: {
        home: 'Trang chủ',
        products: 'Sản phẩm',
        cart: 'Giỏ hàng',
        orders: 'Đơn hàng',
        admin: 'Quản trị'
      },
      auth: {
        login: 'Đăng nhập',
        logout: 'Đăng xuất',
        register: 'Đăng ký'
      },
      product: {
        addToCart: 'Thêm vào giỏ',
        price: 'Giá',
        salePrice: 'Giá khuyến mãi'
      },
      cart: {
        title: 'Giỏ hàng',
        checkout: 'Thanh toán',
        address: 'Địa chỉ giao hàng'
      },
      admin: {
        dashboard: 'Bảng điều khiển',
        products: 'Sản phẩm',
        orders: 'Đơn hàng',
        banners: 'Banner',
        finance: 'Tài chính'
      }
    }
  }
};

const storedLocale = localStorage.getItem('locale') || 'en';

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLocale,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
