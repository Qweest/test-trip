import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  position: relative;
`;

const pulse = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 144px;
    height: 144px;
    opacity: 0;
  }
`;

export const Element = styled.div`
  position: absolute;
  border: 4px solid #cef;
  opacity: 1;
  border-radius: 50%;
  &:nth-child(2) {
    animation-delay: -0.5s;
  }
  animation: ${pulse} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
