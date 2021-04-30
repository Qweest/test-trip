import styled from 'styled-components';

import Card from '../../../../components/Card';
import { colors, metrics } from '../../../../styles';

export const Wrapper = styled(Card)`
  flex-direction: column;
  box-shadow: 0 0 4px ${colors.blackA2};
  cursor: pointer;
  transition: all 0.1s linear;

  :hover {
    transform: scale(1.001);
    box-shadow: 0 0 12px ${colors.blackA2};
  }
  :active {
    transform: scale(0.999);
    box-shadow: 0 0 4px ${colors.blackA2};
  }
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 100px;
  padding: ${metrics.spacing}px;

  @media (max-width: ${metrics.breakpoints.tablet}) {
    height: auto;
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div<{ alignEnd?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignEnd }) => (alignEnd ? 'flex-end' : 'auto')};
`;

export const DurationWrapper = styled(InfoWrapper)`
  flex: 1;
`;

export const Duration = styled.div`
  display: flex;
  flex: 0 1;
  justify-content: center;
  box-sizing: border-box;
  border-top: 1px dashed ${colors.grey};
  margin: 0 ${metrics.spacing * 2}px;
  margin-top: ${metrics.spacing}px;

  span {
    background-color: ${colors.greenA};
    border-radius: 15px;
    padding: ${metrics.spacing * 0.25}px ${metrics.spacing * 0.5}px;
    margin-top: ${metrics.spacing * 0.5}px;
    font-size: ${metrics.fontSize.small}px;
    color: ${colors.black4};
    font-weight: 500;
  }
`;

export const City = styled.span`
  font-weight: bold;
`;

export const Code = styled.span`
  color: ${colors.grey};
`;

export const Date = styled.span`
  margin-top: ${metrics.spacing * 0.25}px;
  font-size: ${metrics.fontSize.medium}px;
  color: ${colors.black4};
`;

export const Separator = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.grey2};
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  padding: 0 ${metrics.spacing}px;
  background-color: ${colors.grey2};
  font-size: ${metrics.fontSize.large}px;
  font-weight: 500;
`;
