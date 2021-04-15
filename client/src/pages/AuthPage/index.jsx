import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Form } from '../../components';
export const AuthPage = () => {
  return (
    <Box>
      <Flex flexDir="column" height="100vh">
        <Box flex="1">
          <Flex justifyContent="center" alignItems="center" h="100%">
            <div>
              <Form title="Login" />
            </div>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
