export const sameDate = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

export const isToday = (date: Date): boolean => {
  const today = new Date();

  return sameDate(date, today);
};

export const getDateString = (date: Date): string => {
  return date.toLocaleString('en-Us', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDate = (date: Date | null): string => {
  if (!date) {
    const nowDate = new Date();

    return nowDate.toLocaleDateString('fr');
  }

  return date.toLocaleDateString('fr');
};
