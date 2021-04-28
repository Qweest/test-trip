import styled, { keyframes, css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 180px;
  height: 180px;
`;

export const Element = styled.div`
  position: absolute;
  border: 4px solid #cef;
  opacity: 1;
  border-radius: 50%;
  &:nth-child(2) {
    animation-delay: -0.5s;
  }
  ${() =>
    css`
      animation: ${pulse} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    `}
`;

const pulse = keyframes`
  0% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 144px;
    height: 144px;
    opacity: 0;
  }
`;
