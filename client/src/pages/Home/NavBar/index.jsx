import React from 'react';
import { Box, Flex, Link as ChakLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../../logo.png';
export const NavBar = React.memo(() => {
  const dispatch = useDispatch();
  const logOut = () => dispatch({ type: 'LOG_OUT' });
  return (
    <Box boxShadow="sm" position="sticky" top="0px" zIndex="123456">
      <Flex
        py={4}
        px={20}
        justifyContent="space-between"
        alignItems="center"
        w="100vw"
        bg="white"
        h="70px"
      >
        <Box fontWeight="extrabold" color="gray.900">
          <Flex as={Link} to="/home/dashboard">
            <img src={logo} alt="Logo" width="32px" height="32px" />
          </Flex>
        </Box>
        <ChakLink _hover={{ color: 'green.300' }} onClick={logOut}>
          Log out
        </ChakLink>
      </Flex>
    </Box>
  );
});
