import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import UnstyledSearchInput from '../SearchInput';

export const Wrapper = styled.div`
  position: relative;
  align-items: center;
`;

export const SwapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 22px;
  height: 22px;
  left: -15px;
  background-color: ${colors.grey2};
  box-shadow: ${colors.blackA2} 0 0 3px 1px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease;
  z-index: ${metrics.layers.depth3};

  :hover {
    color: ${colors.white};
    transform: scale(1.5);
    background-color: ${colors.grass};
    box-shadow: none;
  }
  :active {
    transform: scale(1.4);
  }

  @media (max-width: ${metrics.breakpoints.tabletL}) {
    top: ${-metrics.spacing}px;
    left: ${metrics.spacing}px;
    transform: rotate(90deg);

    :hover {
      transform: rotate(90deg) scale(1.5);
    }
    :active {
      transform: rotate(90deg) scale(1.4);
    }
  }
`;

export const SearchInput = styled(UnstyledSearchInput)`
  display: flex;
  flex: 1;
`;
