import styled from 'styled-components';

import UnstyledSearchPanel from '../../../components/SearchPanel';
import Card from '../../../components/Card';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

export const SearchPanel = styled(UnstyledSearchPanel)`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: ${metrics.layers.depth5};
  margin: ${metrics.spacing * 2}px 0;
  border-radius: 0;
`;

export const ResultsWrapper = styled(Card)`
  flex: 1;
  flex-direction: column;
  border-radius: 3px 3px 0 0;
  background-color: ${colors.grey3};
  padding: ${metrics.spacing * 2}px;
  margin: 0 ${metrics.spacing * 5}px;

  & > div {
    margin-bottom: ${metrics.spacing}px;
  }

  @media (max-width: ${metrics.breakpoints.tabletL}) {
    margin: 0 ${metrics.spacing * 0.5}px;
    padding: ${metrics.spacing}px;
  }
`;
