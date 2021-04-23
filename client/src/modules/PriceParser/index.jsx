import React from 'react';
import { Flex, Heading, Divider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LoadTable } from '../../store/thunks.js';
import { PTable } from './PTable/index';

export const PriceParser = () => {
  const dispatch = useDispatch();

  React.useEffect(() => dispatch(LoadTable('knauf')), [dispatch]);
  return (
    <Flex flexDir="column" px="40px" pt="20px" w="75vw">
      <Heading color="gray.700">Price Parser</Heading>
      <Divider />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        pt="30px"
      >
        <PTable />
      </Flex>
    </Flex>
  );
};
