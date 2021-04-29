import styled, { css } from 'styled-components';

import { metrics, colors } from '../../styles';

const disabledStyle = css`
  opacity: 0.5;
  cursor: not-allowed;

  :hover,
  :active {
    background-color: ${colors.greenA1};
    color: ${colors.green1};
  }
`;

export const Wrapper = styled.button<{ disabledButton?: boolean }>`
  height: 50px;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 0 ${metrics.spacing}px;
  background-color: ${colors.greenA1};
  box-shadow: inset 0 0 0 2px ${colors.green1};
  box-sizing: border-box;
  transition: all 0.1s linear;
  font-size: ${metrics.fontSize.medium}px;
  font-weight: bold;
  color: ${colors.green1};
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: ${colors.green1};
    color: ${colors.white};
  }
  :active {
    background-color: ${colors.green};
  }

  ${({ disabledButton }) => (disabledButton ? disabledStyle : '')}
`;
