import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Layout() {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <nav>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/products">{t('nav.products')}</Link>
          <Link to="/cart">{t('nav.cart')}</Link>
          <Link to="/orders">{t('nav.orders')}</Link>
          <Link to="/admin/login">{t('nav.admin')}</Link>
          <LanguageSwitcher />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
