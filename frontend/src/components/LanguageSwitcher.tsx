import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (locale: 'en' | 'vi') => {
    i18n.changeLanguage(locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <select
      value={i18n.language}
      onChange={(event) => changeLanguage(event.target.value as 'en' | 'vi')}
    >
      <option value="en">EN</option>
      <option value="vi">VI</option>
    </select>
  );
}
