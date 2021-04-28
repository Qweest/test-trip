import styled from 'styled-components';

import Card from '../Card';
import UnstyledInput from '../Input';
import { metrics, colors } from '../../styles';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(UnstyledInput)<{ opened: boolean }>`
  position: relative;
  z-index: ${({ opened }) =>
    opened ? metrics.layers.depth5 : metrics.layers.depth2};
`;

export const Dropdown = styled(Card)<{ opened: boolean }>`
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  position: absolute;
  top: ${-metrics.spacing}px;
  right: ${-metrics.spacing}px;
  left: ${-metrics.spacing}px;
  padding-top: ${metrics.spacing * 5}px;
  z-index: ${({ opened }) =>
    opened ? metrics.layers.depth4 : metrics.layers.depth1};
  transition: all 0.2s ease;
`;

export const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  color: ${colors.black1};
`;

export const SearchItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: ${metrics.spacing * 0.75}px;
  cursor: pointer;
  font-size: ${metrics.fontSize.medium}px;
  font-weight: 500;
  transition: all 0.2s ease;

  :hover {
    background-color: ${colors.grey3};
  }
  :active {
    background-color: ${colors.grey2};
  }
`;

export const Info = styled.span`
  font-weight: normal;
  font-size: ${metrics.fontSize.small}px;
  line-height: ${metrics.fontSize.regular}px;
  color: ${colors.grey};
`;
