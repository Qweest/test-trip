import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTE_PATHS } from '../../../navigation/constants';
import SearchPanel from '../../../components/SearchPanel';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push(ROUTE_PATHS.RESULTS);
  };

  return (
    <Wrapper>
      <SearchPanel onSubmitClick={handleSubmit} />
    </Wrapper>
  );
};

export default Home;
