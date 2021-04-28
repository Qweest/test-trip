import React from 'react';

import { Wrapper } from './styles';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = (props) => {
  const { className, children } = props;

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Card;
