import React from 'react';
import { Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Box, Flex, Stack } from '@chakra-ui/react';

import { withFade } from '../../utils';
import { RoutingTree } from '../../components';
import { NavBar } from './NavBar';
import { Drawer } from './Drawer';
import { Dashboard } from './Dashboard';
import { PriceParser } from '../../modules';
export const Home = withFade(() => {
  const match = useRouteMatch();
  return (
    <Stack h="100vh" w="100vw" overflowX="hidden">
      <NavBar />

      <Flex h="100%" w="100vw">
        <Box width="20%" position="fixed" bg="white">
          <Drawer />
        </Box>
        <Flex justifyContent="flex-end" w="100vw" pr="50px">
          <RoutingTree>
            <Redirect exact from="/home" to="/home/dashboard" />
            <Route
              exact
              path={`${match.path}/parser`}
              component={PriceParser}
            />
            <Route
              exact
              path={`${match.path}/dashboard`}
              component={Dashboard}
            />
          </RoutingTree>
        </Flex>
      </Flex>
    </Stack>
  );
});
