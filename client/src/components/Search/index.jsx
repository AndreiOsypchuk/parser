import {
  Flex,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { RootContext } from '../../context';
import axios from 'axios';
export const Search = () => {
  const {
    state: { sites },
    dispatch,
  } = React.useContext(RootContext);
  const [site, setSite] = React.useState(sites[0].name.toLowerCase());
  const handleTableFetch = async () => {
    const { data } = await axios(`${process.env.REACT_APP_URI}/api?siteName=${site}`);
    dispatch({ type: 'LOAD_TABLE', payload: data });
  };
  React.useEffect(() => console.log(site), [site]);
  return (
    <Flex w="60%" justifyContent="space-around" alignItems="center">
      <InputGroup w="70%">
        <InputRightElement>
          <IconButton
            size="sm"
            color="gray.400"
            icon={<SearchIcon />}
            onClick={handleTableFetch}
          />
        </InputRightElement>
        <Input type="tel" placeholder="Search for item" />
      </InputGroup>
      <Select w="20%" onChange={(e) => setSite(() => e.target.value)}>
        {sites.map((site) => (
          <option key={site.url} value={site.name.toLowerCase()}>
            {site.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
};
