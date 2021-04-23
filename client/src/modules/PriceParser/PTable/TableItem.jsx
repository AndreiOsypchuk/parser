import React from 'react';
import { Tr, Td } from '@chakra-ui/react';

export const TableItem = ({ item }) => {
  return (
    <Tr key={item.id} _hover={{ backgroundColor: 'rgba(73, 188, 120, 0.30)' }}>
      <Td w="5%">{item.order + 1}</Td>
      <Td>{item.name}</Td>
      <Td isNumeric>{Number(item.price).toFixed(2)}</Td>
    </Tr>
  );
};
