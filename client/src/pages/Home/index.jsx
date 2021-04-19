import React from 'react';
import { NavBar, AppTable, Search } from '../../components';
import { Flex } from '@chakra-ui/react';
import { useApiParserData } from '../../hooks/useApiParserData';
import { RootContext } from '../../context';
const search = (arr, str) => {
  return str.length
    ? arr.filter((item) => item.name.toLowerCase().includes(str.toLowerCase()))
    : arr;
};
export const Home = () => {
  const [input, setInput] = React.useState('');

  const {
    state: { table },
  } = React.useContext(RootContext);
  const filtered = React.useMemo(() => search(table, input), [table, input]);
  useApiParserData();
  const handleSearchChange = (value) => {
    setInput(() => value);
  };
  return (
    <Flex h="100vh" flexDir="column" px="40px">
      <NavBar />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Search onSearch={handleSearchChange} />
        <AppTable tableData={filtered} />
      </Flex>
    </Flex>
  );
};
