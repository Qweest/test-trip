import styled from 'styled-components';

import { metrics } from '../../styles';
import UnstyledInput from '../Input';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(UnstyledInput)<{ opened?: boolean }>`
  z-index: ${({ opened }) =>
    opened ? metrics.layers.depth4 : metrics.layers.depth2};
`;
