import React from 'react';
import {
  Flex,
  List,
  ListItem,
  Icon,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdDashboard } from 'react-icons/md';
export const Drawer = React.memo(() => {
  const modules = useSelector((store) => store.modules);
  const menues = [...modules, 'some other module', 'another one'];
  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="start"
      pt="40px"
      overflow="hidden"
    >
      <List
        pl="60px"
        pr="10px"
        pt="20px"
        w="100%"
        h="80vh"
        maxH="80vh"
        overflowY="scroll"
        mr="10px"
      >
        <HStack w="100%" py="4px">
          <Icon as={MdDashboard} w="24px" h="24px" color="green.200" />
          <Text
            py="3"
            as={NavLink}
            to="/home/dashboard"
            exact={true}
            activeClassName="is-active-menu"
            fontWeight="bold"
            fontSize="sm"
            color="gray.500"
            textTransform="capitalize"
            w="100%"
          >
            dahsboard
          </Text>
        </HStack>

        <ListItem py="15px" my="10px" userSelect="none">
          <Heading
            fontWeight="bold"
            fontSize="0.75rem"
            color="gray.500"
            letterSpacing="wider"
          >
            YOUR MODULES
          </Heading>
        </ListItem>
        {menues.map((item, i) => {
          return (
            <HStack w="100%" key={i}>
              <Text
                py="3"
                as={NavLink}
                to={`/home/${item.replace(/\s/g, '-')}`}
                exact={true}
                activeClassName="is-active"
                fontWeight="500"
                color="gray.700"
                fontSize="sm"
                textTransform="capitalize"
                w="100%"
              >
                {item}
              </Text>
            </HStack>
          );
        })}
      </List>
    </Flex>
  );
});
