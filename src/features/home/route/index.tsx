import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Location } from '../../search/api/entities';
import { searchSelector } from '../../search/slice';
import { getLocationsAction } from '../../search/thunks';
import { Wrapper, SearchContainer, SearchBar, SearchInput } from './styles';

const Home: React.FC = () => {
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
    <Wrapper>
      <SearchContainer>
        <SearchBar>
          <SearchInput
            onItemClick={selectLocation}
            onCardClick={removeLocation}
            onChangeText={setSearch}
            data={searchData}
            selectedItem={
              selectedLocation && {
                id: selectedLocation.id,
                title: selectedLocation.city.name,
              }
            }
            value={search}
            label="From"
            placeholder="Select your airport"
          />
          <SearchInput
            onItemClick={selectLocation}
            onCardClick={removeLocation}
            onChangeText={setSearch}
            data={searchData}
            selectedItem={
              selectedLocation && {
                id: selectedLocation.id,
                title: selectedLocation.city.name,
              }
            }
            value={search}
            label="To"
            placeholder={'Try "Paris"'}
          />
        </SearchBar>
      </SearchContainer>
    </Wrapper>
  );
};

export default Home;
