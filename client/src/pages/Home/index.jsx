import React from 'react';
import { NavBar, AppTable, Search } from '../../components';
import { Flex } from '@chakra-ui/react';
export const Home = () => {
  return (
    <Flex h="100vh" flexDir="column" px="40px">
      <NavBar />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Search />
        <AppTable />
      </Flex>
    </Flex>
  );
};
