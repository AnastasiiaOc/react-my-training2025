import { useEffect, useState } from 'react';

export default function ActivityTracker() {
  // Стан, який зберігає інформацію про неактивність користувача
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    // Запускаємо таймер: якщо користувач не буде активний 3 секунди, встановлюємо стан isInactive у true
    let timer = setTimeout(() => setIsInactive(true), 10000);

    // Функція для скидання таймера при активності користувача
    const resetTimer = () => {
      clearTimeout(timer); // Видаляємо поточний таймер, щоб запобігти його виконанню
      setIsInactive(false); // Встановлюємо, що користувач активний
      timer = setTimeout(() => setIsInactive(true), 10000); // Запускаємо новий таймер
    };

    // Додаємо слухачі подій для відстеження активності користувача
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    // Функція очищення, яка виконується при розмонтуванні компонента
    return () => {
      clearTimeout(timer); // Видаляємо таймер, щоб уникнути помилок
      window.removeEventListener('mousemove', resetTimer); // Видаляємо слухача руху миші
      window.removeEventListener('keydown', resetTimer); // Видаляємо слухача натискання клавіш
    };
  }, []); // Порожній масив залежностей означає, що ефект виконується лише один раз при монтуванні компонента

  return (
    <div>
      {/* Якщо користувач неактивний, відображаємо повідомлення */}
      {isInactive && (
        <p style={{ color: 'red' }}>
          Ви були неактивні протягом деякого часу...
        </p>
      )}
    </div>
  );
}