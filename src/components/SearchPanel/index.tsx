import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getFlightsAction,
  getRadiusLocationsAction,
} from '../../features/search/thunks';
import { Location } from '../../features/search/api/entities';
import { RangeDate } from '../../features/search/entities';
import { searchSelector, actions } from '../../features/search/slice';
import { formatDate } from '../../utils/helpers';
import { colors } from '../../styles';
import { Wrapper, LocationInput, DatePicker, Button } from './styles';

interface Props {
  className?: string;
  onSubmitClick: () => void;
}

const SearchPanel: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { className, onSubmitClick } = props;
  const {
    from,
    to,
    departureDates,
    returnDates,
    currentLocation,
  } = useSelector(searchSelector);

  const handleFromSelect = (location?: Location) => {
    dispatch(actions.setFromLocation(location));
  };

  const handleToSelect = (location?: Location) => {
    dispatch(actions.setToLocation(location));
  };

  const handleSwapClick = () => {
    handleToSelect(from);
    handleFromSelect(to);
  };

  const handleDepartureSelect = (range: RangeDate) => {
    dispatch(actions.setDepartureDates(range));
  };

  const handleReturnSelect = (range: RangeDate) => {
    dispatch(actions.setReturnDates(range));
  };

  const handleSubmit = () => {
    const date_from = formatDate(departureDates.start);
    const date_to = formatDate(departureDates.end || departureDates.start);
    const return_from = returnDates.start
      ? formatDate(returnDates.start)
      : undefined;
    const return_to = returnDates.end
      ? formatDate(returnDates.end)
      : return_from;

    dispatch(
      getFlightsAction({
        fly_from: from?.code || '',
        fly_to: to?.code,
        date_from,
        date_to,
        return_from,
        return_to,
      }),
    );

    onSubmitClick();
  };

  useEffect(() => {
    if (currentLocation) {
      dispatch(getRadiusLocationsAction(currentLocation));
    }
  }, [currentLocation]);

  return (
    <Wrapper className={className}>
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
        start={departureDates.start}
        end={departureDates.end}
        label="Departure"
        placeholder="Select departure date"
      />
      <DatePicker
        onDateSelect={handleReturnSelect}
        start={returnDates.start}
        end={returnDates.end}
        label="Return"
        placeholder="Select return date"
        activeFrom={departureDates.end || departureDates.start}
      />
      <Button onClick={handleSubmit} disabled={!from}>
        Explore
      </Button>
    </Wrapper>
  );
};

export default SearchPanel;
