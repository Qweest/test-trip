import React, { useCallback, useRef, useState } from 'react';
import UnstyledDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useOutsideClick } from '../../utils/hooks';
import { getDayClass } from './helpers';
import { Wrapper, Input } from './styles';
import './styles.css';
import { getDateString } from '../../utils/helpers';

type PossibleDate = Date | null;

interface Props {
  className?: string;
  label?: string;
  start: PossibleDate;
  end: PossibleDate;
  onDateSelect: (dates: { start: PossibleDate; end: PossibleDate }) => void;
  activeFrom?: PossibleDate;
}

const DatePicker: React.FC<Props> = (props) => {
  const { className, label, start, end, onDateSelect, activeFrom } = props;
  const wrapperRef = useRef(null);
  const [opened, setOpened] = useState(false);

  const getDatesString = useCallback(() => {
    if (!start) {
      return 'Anytime';
    }

    const startString = getDateString(start);

    if (end) {
      const endString = getDateString(end);

      return `${startString} - ${endString}`;
    }

    return startString;
  }, [start, end]);

  const handlePickerChange = (dates: Date[] | PossibleDate) => {
    const [start, end] = dates as Date[];

    onDateSelect({ start, end });
  };

  const handleClearDate = () => {
    onDateSelect({ start: null, end: null });
  };

  const handleFocus = () => {
    setOpened(true);
  };

  const handleOutsideClick = () => {
    setOpened(false);
  };

  useOutsideClick(wrapperRef, handleOutsideClick, opened);

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <Input
        opened={opened}
        label={opened ? '' : label}
        onFocus={handleFocus}
        value={getDatesString()}
        onClearClick={handleClearDate}
      />
      {opened && (
        <UnstyledDatePicker
          inline
          selectsRange
          selected={start}
          startDate={start}
          endDate={end}
          onChange={handlePickerChange}
          minDate={new Date()}
          monthsShown={2}
          showDisabledMonthNavigation
          dateFormat="dd/MM/yyyy"
          calendarClassName="calendar-wrapper"
          weekDayClassName={() => 'calendar-weekday'}
          disabledKeyboardNavigation
          dayClassName={getDayClass(start, end, activeFrom)}
        />
      )}
    </Wrapper>
  );
};

export default DatePicker;
