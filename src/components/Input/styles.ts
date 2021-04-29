import styled, { css } from 'styled-components';
import { HiOutlineXCircle } from 'react-icons/all';

import { metrics, colors } from '../../styles';

const focusedStyle = css`
  box-shadow: inset 0 0 0 2px ${colors.blueberry};
`;

export const Wrapper = styled.div<{ focused: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  font-size: ${metrics.fontSize.regular}px;
  background-color: ${colors.white};
  box-shadow: inset 0 0 0 1px ${colors.grey1};
  border-radius: 3px;
  box-sizing: border-box;
  padding: ${metrics.spacing * 0.5}px ${metrics.spacing}px;
  transition: all 0.2s ease;
  cursor: pointer;

  ${({ focused }) => (focused ? focusedStyle : '')};
`;

export const Label = styled.span`
  color: ${colors.grey};
  margin-right: ${metrics.spacing * 0.5}px;
  user-select: none;
`;

export const InputElement = styled.input`
  flex: 1;
  outline: none;
  border: none;
  color: ${colors.black1};
  font-size: ${metrics.fontSize.medium}px;
  font-weight: bold;
  padding: 0;
  padding-top: 2px;
  height: 32px;

  ::placeholder {
    color: ${colors.grey1};
    font-weight: normal;
  }
`;

export const InputCard = styled.div<{ bgColor?: string }>`
  border-radius: 3px;
  padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
  margin-right: ${metrics.spacing * 0.5}px;
  font-size: ${metrics.fontSize.medium}px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${({ bgColor }) => bgColor || colors.green};
  cursor: pointer;

  :hover {
    opacity: 0.9;
    text-decoration: line-through;
  }
`;

export const ClearButton = styled(HiOutlineXCircle)`
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  color: ${colors.danger};

  :hover {
    transform: scale(1.2);
  }
  :active {
    transform: scale(1.1);
  }
`;
