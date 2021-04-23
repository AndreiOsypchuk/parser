import {
  Flex,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { LoadTable } from '../../../store/thunks.js';
const sites = ['knauf', 'atribud', 'grico'];
export const Search = ({ onSearch }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  const handleChoice = async (e) => {
    dispatch(LoadTable(e.target.value));
  };
  return (
    <Flex w="80%" justifyContent="space-around" alignItems="center">
      <InputGroup w="70%">
        <InputLeftElement color="gray.500" children={<SearchIcon />} />
        <Input
          type="tel"
          placeholder="Search for an item"
          onChange={handleChange}
        />
      </InputGroup>

      <Select w="20%" onChange={handleChoice} textTransform="capitalize">
        {sites
          ? sites.map((site, i) => (
              <option key={i} value={site.toLowerCase()}>
                {site}
              </option>
            ))
          : null}
      </Select>
    </Flex>
  );
};
