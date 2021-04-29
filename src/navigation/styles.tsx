import styled from 'styled-components';

import background from '../assets/images/background.jpeg';

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
`;
