import React, { InputHTMLAttributes, useRef, useState } from 'react';

import { Wrapper, Label, InputElement, InputCard, ClearButton } from './styles';
import { useOutsideClick } from '../../utils/hooks';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  onChangeText?: (value: string) => void;
  card?: { id: string; title: string; color?: string };
  onCardClick?: (id: string) => void;
  onClearClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    className,
    label,
    onChangeText,
    onChange,
    onFocus,
    onBlur,
    card,
    onCardClick,
    onClearClick,
    ...inputProps
  } = props;
  const wrapperRef = useRef(null);
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

  const handleFocus = () => {
    setFocused(true);

    if (onFocus) {
      onFocus();
    }
  };

  const handleOutsideClick = () => {
    setFocused(false);

    if (onBlur) {
      onBlur();
    }
  };

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const handleCardClick = (id: string) => () => {
    if (onCardClick) {
      onCardClick(id);
    }
  };

  useOutsideClick(wrapperRef, handleOutsideClick, focused);

  return (
    <Wrapper
      ref={wrapperRef}
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
        {...inputProps}
      />
      {onClearClick && focused && <ClearButton onClick={onClearClick} />}
    </Wrapper>
  );
};

export default Input;
