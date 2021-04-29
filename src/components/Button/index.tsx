import React, { ButtonHTMLAttributes } from 'react';

import { Wrapper } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { className, children, disabled, onClick, ...buttonProps } = props;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Wrapper
      className={className}
      disabledButton={disabled}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
