import styled, { css } from 'styled-components';

import { metrics } from '../../styles';
import UnstyledLocationInput from '../LocationInput';
import UnstyledDatePicker from '../DatePicker';
import UnstyledButton from '../Button';
import Card from '../Card';

export const Wrapper = styled(Card)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: ${metrics.spacing * 2}px;
  padding: 0 ${metrics.spacing * 2}px;
  min-height: 150px;

  @media (max-width: ${metrics.breakpoints.tabletL}) {
    min-height: fit-content;
    flex-direction: column;
    padding: ${metrics.spacing}px;
  }
`;

const inputStyle = css`
  display: flex;
  flex: 1;
  margin-right: ${metrics.spacing * 0.5}px;

  @media (max-width: ${metrics.breakpoints.tabletL}) {
    margin: 0;
    margin-bottom: ${metrics.spacing * 0.5}px;
    width: 100%;
  }
`;

export const LocationInput = styled(UnstyledLocationInput)`
  ${inputStyle}
`;

export const DatePicker = styled(UnstyledDatePicker)`
  ${inputStyle}
`;

export const Button = styled(UnstyledButton)`
  @media (max-width: ${metrics.breakpoints.tabletL}) {
    width: 100%;
  }
`;
