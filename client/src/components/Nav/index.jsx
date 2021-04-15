import React from 'react';
import { RootContext } from '../../context';
import { Box, Flex, Link } from '@chakra-ui/react';
import logo from '../../logo.png';
export const NavBar = () => {
  const { dispatch } = React.useContext(RootContext);
  return (
    <Box h="auto">
      <Flex py={4} px={6} justifyContent="space-between">
        <Box fontWeight="extrabold" color="gray.900">
          <img src={logo} alt="Logo" width="32px" height="32px" />
        </Box>
        <Link
          _hover={{ color: 'green.300' }}
          onClick={() => dispatch({ type: 'LOG_OUT' })}
        >
          Log out
        </Link>
      </Flex>
    </Box>
  );
};
