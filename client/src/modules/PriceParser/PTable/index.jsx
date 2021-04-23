import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Flex, Text } from '@chakra-ui/react';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { Search } from './Search';
import { filterTable } from './filterTable';
import { paginate } from './paginate';
import { TableItem } from './TableItem';
export const PTable = () => {
  const table = useSelector((store) => store.table);
  const [input, setInput] = React.useState('');
  const filtered = React.useMemo(() => filterTable(table, input), [
    table,
    input,
  ]);
  const [page, setPage] = React.useState(0);
  const { data, pages } = React.useMemo(() => paginate(filtered, 10), [
    filtered,
  ]);
  const handlePageChange = (e, value) => {
    setPage(() => value - 1);
  };
  const handleSearch = (val) => {
    setPage(() => 0);
    setInput(() => val);
  };

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      w="800px"
    >
      <Search onSearch={handleSearch} />
      <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        px="40px"
        w="800px"
        minH="470px"
      >
        <Table variant="simple" size="sm" my="40px">
          <Thead>
            <Tr>
              <Th w="5%">#</Th>
              <Th>Name</Th>
              <Th isNumeric cursor="pointer" _hover={{ color: 'gray.700' }}>
                Price
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data[page]?.length
              ? data[page].map((item) => {
                  return <TableItem key={item.id} item={item} />;
                })
              : null}
          </Tbody>
        </Table>
        {!data[page].length ? (
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
    </Flex>
  );
};
