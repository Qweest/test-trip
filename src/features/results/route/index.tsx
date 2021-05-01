import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineGlobe } from 'react-icons/all';

import { searchSelector } from '../../search/slice';
import Result from '../components/Result';
import { RESULTS_PER_PAGE } from '../constants';
import {
  Wrapper,
  SearchPanel,
  ResultsWrapper,
  EmptyInfo,
  Loader,
  ShowMoreButton,
} from './styles';

const Results: React.FC = () => {
  const { flights } = useSelector(searchSelector);
  const { data, pending } = flights;
  const [page, setPage] = useState(1);
  const renderDataCount = useMemo(() => page * RESULTS_PER_PAGE, [page]);

  const handleShowMoreClick = () => {
    setPage(page + 1);
  };

  const renderResults = () => {
    if (pending) {
      return <Loader />;
    }

    if (!data.length) {
      return (
        <EmptyInfo>
          <HiOutlineGlobe size={64} />
          <span>Wow, such empty :(</span>
        </EmptyInfo>
      );
    }

    const dataToRender = data.slice(0, renderDataCount);

    return dataToRender.map((it) => {
      return <Result key={it.id} data={it} />;
    });
  };

  return (
    <Wrapper>
      <SearchPanel onSubmitClick={() => {}} />
      <ResultsWrapper>
        {renderResults()}
        {renderDataCount < data.length && !pending && (
          <ShowMoreButton onClick={handleShowMoreClick}>
            Show more
          </ShowMoreButton>
        )}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default Results;
