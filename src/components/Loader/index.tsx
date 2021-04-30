import React, { FC } from 'react';

import { Wrapper, Element } from './styles';

interface Props {
  className?: string;
}

const Loader: FC<Props> = (props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      <Element />
      <Element />
    </Wrapper>
  );
};

export default Loader;
