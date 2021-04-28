import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Location } from '../../features/search/api/entities';
import { searchSelector } from '../../features/search/slice';
import { getLocationsAction } from '../../features/search/thunks';
import SearchInput from '../SearchInput';

interface Props {
  label: string;
  placeholder: string;
}

const LocationInput: React.FC<Props> = (props) => {
  const { label, placeholder } = props;
  const { locations } = useSelector(searchSelector);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >();
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
    setSelectedLocation(location);
  };

  const removeLocation = () => {
    setSelectedLocation(undefined);
  };

  useEffect(() => {
    dispatch(getLocationsAction({ term: search }));
  }, [search]);

  return (
    <SearchInput
      data={searchData}
      onItemClick={selectLocation}
      onCardClick={removeLocation}
      onChangeText={setSearch}
      selectedItem={
        selectedLocation && {
          id: selectedLocation.id,
          title: selectedLocation.city.name,
        }
      }
      value={search}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default LocationInput;
