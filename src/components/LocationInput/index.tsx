import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import { Location } from '../../features/search/api/entities';
import { searchSelector } from '../../features/search/slice';
import { getLocationsAction } from '../../features/search/thunks';
import { Wrapper, SwapButton, SearchInput } from './styles';

interface Props {
  className?: string;
  label: string;
  placeholder: string;
  location: Location | null;
  onLocationSelect: (location: Location | null) => void;
  onSwapClick?: () => void;
  cardColor?: string;
}

const LocationInput: React.FC<Props> = (props) => {
  const {
    className,
    label,
    placeholder,
    location,
    onLocationSelect,
    onSwapClick,
    cardColor,
  } = props;
  const { locations } = useSelector(searchSelector);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const searchData = useMemo(
    () =>
      locations.map((it) => {
        const { id, city, country, name } = it;
        const title = `${city.name}, ${country?.name || city.country?.name}`;

        return {
          id,
          title,
          info: name,
        };
      }),
    [locations],
  );

  const selectLocation = (id: string) => {
    const location = locations.find((it) => it.id === id)!;

    setSearch('');
    onLocationSelect(location);
  };

  const removeLocation = () => {
    onLocationSelect(null);
  };

  useEffect(() => {
    dispatch(getLocationsAction({ term: search }));
  }, [search]);

  return (
    <Wrapper className={className}>
      {location && onSwapClick && (
        <SwapButton onClick={onSwapClick}>
          <HiOutlineSwitchHorizontal />
        </SwapButton>
      )}
      <SearchInput
        data={searchData}
        onItemClick={selectLocation}
        onCardClick={removeLocation}
        onChangeText={setSearch}
        card={
          location
            ? {
                id: location.id,
                title: location.city.name,
                color: cardColor,
              }
            : undefined
        }
        value={search}
        label={label}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default LocationInput;
