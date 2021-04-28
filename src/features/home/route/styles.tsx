import styled from 'styled-components';

import background from '../../../assets/images/background.jpeg';
import UnstyledSearchInput from '../../../components/SearchInput';
import { colors, metrics } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 10%;
  background-image: url(${background});
  background-size: cover;
`;

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: ${colors.blackA2} 0 4px 15px 4px;
  padding: ${metrics.spacing}px;
`;

export const SearchInput = styled(UnstyledSearchInput)`
  margin-right: ${metrics.spacing * 0.5}px;
`;
