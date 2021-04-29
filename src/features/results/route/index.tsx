import React from 'react';
import { useSelector } from 'react-redux';

import SearchPanel from '../../../components/SearchPanel';
import { searchSelector } from '../../search/slice';
import { Wrapper, ResultsWrapper } from './styles';

const Results: React.FC = () => {
  const { flights } = useSelector(searchSelector);

  return (
    <Wrapper>
      <SearchPanel onSubmitClick={() => {}} />
      <ResultsWrapper></ResultsWrapper>
    </Wrapper>
  );
};

export default Results;
