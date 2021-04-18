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
  const [site, setSite] = React.useState(sites[0].name?.toLowerCase() || '');
  const handleTableFetch = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_URI}/api?siteName=${site}`
      );
      if (!data.success || !data.payload) {
        throw new Error(`Unexpected response recieved ${data}`);
      } else if (!Array.isArray(data.payload)) {
        throw new Error(
          `Unexpected payload type: ${typeof data.payload} ${data.payload}`
        );
      }
      dispatch({ type: 'LOAD_TABLE', payload: data.payload });
    } catch (e) {
      console.error(e.message);
    }
  };
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
        {sites
          ? sites.map((site) => (
              <option key={site.url} value={site.name.toLowerCase()}>
                {site.name}
              </option>
            ))
          : null}
      </Select>
    </Flex>
  );
};
