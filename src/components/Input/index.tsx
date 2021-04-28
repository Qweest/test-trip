import React, { InputHTMLAttributes, useRef, useState } from 'react';

import { Wrapper, Label, InputElement, InputCard } from './styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  onChangeText?: (value: string) => void;
  card?: { id: string; title: string; color?: string };
  onCardClick?: (id: string) => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    className,
    label,
    onChangeText,
    onChange,
    onFocus,
    card,
    onCardClick,
    ...inputProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeText) {
      onChangeText(e.target.value);
      return;
    }

    if (onChange) {
      onChange(e);
      return;
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const handleCardClick = (id: string) => () => {
    if (onCardClick) {
      onCardClick(id);
    }
  };

  return (
    <Wrapper
      className={className}
      focused={focused}
      onClick={handleWrapperClick}
    >
      {label && <Label>{label}</Label>}
      {card && (
        <InputCard bgColor={card.color} onClick={handleCardClick(card.id)}>
          {card.title}
        </InputCard>
      )}
      <InputElement
        ref={inputRef}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
    </Wrapper>
  );
};

export default Input;
