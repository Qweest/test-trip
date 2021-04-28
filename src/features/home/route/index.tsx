import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Location } from '../../search/api/entities';
import { searchSelector, actions } from '../../search/slice';
import { Wrapper, SearchContainer, SearchBar, LocationInput } from './styles';
import { colors } from '../../../styles';

const Home: React.FC = () => {
  const { from, to } = useSelector(searchSelector);
  const dispatch = useDispatch();

  const handleFromSelect = (location: Location | null) => {
    dispatch(actions.setFromLocation(location));
  };

  const handleToSelect = (location: Location | null) => {
    dispatch(actions.setToLocation(location));
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
        </SearchBar>
      </SearchContainer>
    </Wrapper>
  );
};

export default Home;
