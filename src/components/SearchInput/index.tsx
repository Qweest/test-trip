import React, { useRef, useState } from 'react';

import { Props as InputProps } from '../Input';
import { useOutsideClick } from '../../utils/hooks';
import { Wrapper, Input, Dropdown, List, SearchItem, Info } from './styles';

interface Props extends InputProps {
  className?: string;
  data: { id: string; title: string; info?: string }[];
  onItemClick: (id: string) => void;
}

const SearchInput: React.FC<Props> = (props) => {
  const { className, data, onItemClick, ...inputProps } = props;
  const wrapperRef = useRef(null);
  const [opened, setOpened] = useState(false);

  const handleFocus = () => {
    setOpened(true);
  };

  const handleOutsideClick = () => {
    setOpened(false);
  };

  const handleItemClick = (id: string) => () => {
    onItemClick(id);

    setOpened(false);
  };

  useOutsideClick(wrapperRef, handleOutsideClick, opened);

  const renderData = () => {
    return data.map((it) => {
      const { id, title, info } = it;

      return (
        <SearchItem onClick={handleItemClick(id)} key={id}>
          {title}
          {info && <Info>({info})</Info>}
        </SearchItem>
      );
    });
  };

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <Input onFocus={handleFocus} {...inputProps} />
      <Dropdown opened={opened && !!data.length}>
        <List>{renderData()}</List>
      </Dropdown>
    </Wrapper>
  );
};

export default SearchInput;
