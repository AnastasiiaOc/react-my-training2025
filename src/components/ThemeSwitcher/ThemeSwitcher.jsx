import { useEffect, useState } from 'react';
import css from "../ThemeSwitcher/ThemeSwitcher.module.css"

export default function ThemeSwitcher() {
  // Визначаємо початковий стан теми на основі налаштувань системи користувача
  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches  // returns true or false
  );

  useEffect(() => {
    // Отримуємо об'єкт media query для перевірки системної теми
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Функція, яка оновлює стан теми при зміні системних налаштувань
    const handleChange = () => setIsDark(mediaQuery.matches);

    // Додаємо слухач подій, який відстежує зміну теми користувачем у системі
    mediaQuery.addEventListener('change', handleChange);

    // Функція очищення: видаляємо слухача подій при розмонтуванні компонента
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Порожній масив залежностей означає, що ефект виконується лише при монтуванні компонента

  return <div className={css.theme}>{isDark ? 'Темна тема' : 'Світла тема'}</div>;
}