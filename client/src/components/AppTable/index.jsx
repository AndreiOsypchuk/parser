import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Text } from '@chakra-ui/react';
import Pagination from '@material-ui/lab/Pagination';

const paginate = (arr, pagelen) => {
  const res = [];
  let page = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % pagelen === 0 && i !== 0) {
      res.push(page);
      page = [];
    }
    arr[i].order = i;
    page.push(arr[i]);
  }
  res.push(page);
  return { data: res, pages: res.length };
};

export const AppTable = ({ tableData }) => {
  const [page, setPage] = React.useState(0);

  const { data, pages } = React.useMemo(() => paginate(tableData, 10), [
    tableData,
  ]);
  const handlePageChange = (e, value) => {
    setPage(() => value - 1);
  };
  React.useEffect(() => setPage(() => 0), [tableData]);
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      px="40px"
      mt="50px"
      w="60%"
      minH="450px"
    >
      <Table variant="simple" size="sm" mb="40px">
        <Thead>
          <Tr>
            <Th w="5%">#</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data[page]
            ? data[page].map((item) => {
                return (
                  <Tr
                    key={item.id}
                    _hover={{ backgroundColor: 'rgba(73, 188, 120, 0.30)' }}
                  >
                    <Td w="5%">{item.order + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td isNumeric>{Number(item.price).toFixed(2)}</Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
      {!tableData.length ? (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
          <Text
            fontSize="60px"
            fontWeight="extrabold"
            color="gray.200"
            opacity="0.6"
          >
            ¯\_(ツ)_/¯
          </Text>
        </Flex>
      ) : null}
      <Pagination count={pages} page={page + 1} onChange={handlePageChange} />
    </Flex>
  );
};
