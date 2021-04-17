import React from 'react';
import { Input, Flex, Button, Text } from '@chakra-ui/react';
import { RootContext } from '../../context';

import logo from '../../logo.png';
import axios from 'axios';
export const Form = ({ title }) => {
  const { dispatch } = React.useContext(RootContext);
  const [input, setInput] = React.useState({ login: '', password: '' });
  const [error, setError] = React.useState('');
  const handleLogin = async () => {
    if (input.login.length && input.password.length) {
      try {
        await axios.post(`${process.env.REACT_APP_URI}/auth/login`, input);
        const { data } = await axios(`${process.env.REACT_APP_URI}/api/sites`);
        dispatch({ type: 'LOAD_URLS', payload: data });
        dispatch({ type: 'LOG_IN' });
      } catch (e) {
        if (e.response?.status === 403) {
          setError('Wrong email or password');
        } else {
          setError('Something went wrong');
          console.log(e);
        }
      }
    }
  };

  const handleChange = (e) => {
    setError('');
    const field = e.target.name;
    const value = e.target.value;
    setInput((input) => ({ ...input, [field]: value }));
  };
  return (
    <>
      <Flex
        w="400px"
        h="400px"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        mb="40px"
      >
        <Flex w="100%" mb="32px" alignItems="center" justifyContent="center">
          <img src={logo} alt="Logo" width="200px" height="200px" />
        </Flex>
        <Flex
          w="80%"
          h="80%"
          alignItems="center"
          flexDir="column"
          justifyContent="space-around"
          position="relative"
        >
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            h="80%"
            w="100%"
            position="relative"
          >
            <form>
              <Input
                autoComplete="off"
                mb="20px"
                placeholder="Login"
                value={input.login}
                required
                name="login"
                onChange={handleChange}
              />
              <Input
                autoComplete="off"
                type="password"
                mb="20px"
                placeholder="Password"
                value={input.password}
                required
                name="password"
                onChange={handleChange}
              />
            </form>
          </Flex>
          <Button
            _hover={{ backgroundColor: 'green.300', boxShadow: 'lg' }}
            w="100%"
            backgroundColor="green.400"
            color="white"
            onClick={handleLogin}
          >
            {title}
          </Button>
          {error ? (
            <Text
              color="red.600"
              mb="5px"
              bottom="-10"
              right="0"
              position="absolute"
              w="100%"
              textAlign="center"
            >
              {error}
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};
