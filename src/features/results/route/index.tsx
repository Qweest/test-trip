import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineGlobe } from 'react-icons/all';

import { searchSelector } from '../../search/slice';
import Result from '../components/Result';
import {
  Wrapper,
  SearchPanel,
  ResultsWrapper,
  EmptyInfo,
  Loader,
} from './styles';

const Results: React.FC = () => {
  const { flights } = useSelector(searchSelector);
  const { data, pending } = flights;

  const renderResults = () => {
    if (pending) {
      return <Loader />;
    }

    if (!data.length) {
      return (
        <EmptyInfo>
          <HiOutlineGlobe size={64} />
          <span>Wow, such empty</span>
        </EmptyInfo>
      );
    }

    return data.map((it) => {
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
