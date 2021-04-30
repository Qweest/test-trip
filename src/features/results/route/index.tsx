import React from 'react';
import { useSelector } from 'react-redux';

import { searchSelector } from '../../search/slice';
import Result from '../components/Result';
import { Wrapper, SearchPanel, ResultsWrapper } from './styles';

const Results: React.FC = () => {
  const { flights } = useSelector(searchSelector);

  const renderResults = () => {
    return flights.map((it) => {
      return <Result key={it.id} data={it} />;
    });
  };

  return (
    <Wrapper>
      <SearchPanel onSubmitClick={() => {}} />
      <ResultsWrapper>{renderResults()}</ResultsWrapper>
    </Wrapper>
  );
};

export default Results;
