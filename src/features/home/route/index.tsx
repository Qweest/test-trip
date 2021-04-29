import React, { useState } from 'react';

import { colors } from '../../../styles';
import { Location } from '../../search/api/entities';
import {
  Wrapper,
  SearchContainer,
  SearchBar,
  LocationInput,
  DatePicker,
} from './styles';

interface RangeDate {
  start: Date | null;
  end: Date | null;
}

const Home: React.FC = () => {
  const [from, setFrom] = useState<Location>();
  const [to, setTo] = useState<Location>();
  const [departure, setDeparture] = useState<RangeDate>({
    start: null,
    end: null,
  });
  const [returnDate, setReturnDate] = useState<RangeDate>({
    start: null,
    end: null,
  });

  const handleDepartureSelect = (range: RangeDate) => {
    setDeparture(range);
  };

  const handleReturnSelect = (range: RangeDate) => {
    setReturnDate(range);
  };

  const handleFromSelect = (location?: Location) => {
    setFrom(location);
  };

  const handleToSelect = (location?: Location) => {
    setTo(location);
  };

  const handleSwapClick = () => {
    handleToSelect(from);
    handleFromSelect(to);
  };

  return (
    <Wrapper>
      <SearchContainer>
        <SearchBar>
          <LocationInput
            label="From"
            placeholder="Please choose your airport"
            location={from}
            onLocationSelect={handleFromSelect}
          />
          <LocationInput
            label="To"
            placeholder={'Try "Paris"'}
            location={to}
            onLocationSelect={handleToSelect}
            onSwapClick={handleSwapClick}
            cardColor={colors.orange}
          />
          <DatePicker
            onDateSelect={handleDepartureSelect}
            start={departure.start}
            end={departure.end}
            label="Departure"
          />
          <DatePicker
            onDateSelect={handleReturnSelect}
            start={returnDate.start}
            end={returnDate.end}
            label="Return"
            activeFrom={departure.end || departure.start}
          />
        </SearchBar>
      </SearchContainer>
    </Wrapper>
  );
};

export default Home;
