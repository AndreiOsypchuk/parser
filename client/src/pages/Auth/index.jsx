import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { withFade } from '../../utils';
import { AuthForm } from './Form';

export const Auth = withFade(() => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
        <AuthForm />
      </Flex>
    </>
  );
});
