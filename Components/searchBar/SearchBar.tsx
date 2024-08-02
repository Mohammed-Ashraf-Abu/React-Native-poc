
import React from 'react'
import { Searchbar } from 'react-native-paper'
import { SearchBoxStyle } from './SearchBoxStyle';

type placeHolderProps = {
  placeholder: string;
  boxStyle?: 'customSearchBox' | 'default';
};

export default function SearchBar({placeholder="search",boxStyle='default'}:placeHolderProps) {
  return (
    <Searchbar
      placeholder={placeholder}
      value=''
      style={SearchBoxStyle[boxStyle]}
    />
  );
}
