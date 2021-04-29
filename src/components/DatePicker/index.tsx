import React, { useCallback, useRef, useState } from 'react';
import UnstyledDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useOutsideClick } from '../../utils/hooks';
import { getDayClass } from './helpers';
import { Wrapper, Input } from './styles';
import './styles.css';
import { getDateString } from '../../utils/helpers';

interface Props {
  className?: string;
}

const DatePicker: React.FC<Props> = (props) => {
  const { className } = props;
  const wrapperRef = useRef(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [opened, setOpened] = useState(false);

  const getDatesString = useCallback(() => {
    if (!startDate) {
      return 'Anytime';
    }

    const startString = getDateString(startDate);

    if (endDate) {
      const endString = getDateString(endDate);

      return `${startString} - ${endString}`;
    }

    return startString;
  }, [startDate, endDate]);

  const handleClearDate = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleFocus = () => {
    setOpened(true);
  };

  const handleOutsideClick = () => {
    setOpened(false);
  };

  const handlePickerChange = (dates: Date[] | Date | null) => {
    const [start, end] = dates as Date[];

    setStartDate(start);
    setEndDate(end);
  };

  useOutsideClick(wrapperRef, handleOutsideClick, opened);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <Input
        opened={opened}
        label={opened ? '' : 'Departure'}
        onFocus={handleFocus}
        value={getDatesString()}
        onClearClick={handleClearDate}
      />
      {opened && (
        <UnstyledDatePicker
          inline
          selectsRange
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={handlePickerChange}
          minDate={new Date()}
          monthsShown={2}
          showDisabledMonthNavigation
          dateFormat="dd/MM/yyyy"
          calendarClassName="calendar-wrapper"
          weekDayClassName={() => 'calendar-weekday'}
          disabledKeyboardNavigation
          dayClassName={getDayClass(startDate, endDate)}
        />
      )}
    </Wrapper>
  );
};

export default DatePicker;
