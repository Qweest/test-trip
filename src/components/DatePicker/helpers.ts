import { isToday, sameDate } from '../../utils/helpers';

export const getDayClass = (
  start: Date | null,
  end: Date | null,
  activeFrom?: Date | null,
) => (date: Date): string => {
  const classNames = ['calendar-day'];

  if (isToday(date)) {
    classNames.push('calendar-day-today');
  }

  if ((start && sameDate(start, date)) || (end && sameDate(end, date))) {
    classNames.push('calendar-day-selected');
  }

  if (activeFrom && date.getTime() <= activeFrom.getTime()) {
    classNames.push('react-datepicker__day--disabled');
    classNames.push('calendar-day-disabled');
  }

  return classNames.join(' ');
};
