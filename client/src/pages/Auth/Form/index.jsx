import React from 'react';
import {
  Input,
  Flex,
  IconButton,
  Button,
  Stack,
  Image,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip,
  Spinner,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from '../../../logo.png';
import { Login } from '../../../store/thunks';
import { useDispatch, useSelector } from 'react-redux';
export const AuthForm = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [input, setInput] = React.useState({ username: '', password: '' });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const error = useSelector((store) => store.error);
  const handleSubmit = (e) => {
    setLoading(() => true);
    e.preventDefault();
    dispatch(Login(input));
    setLoading(() => false);
  };
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setInput((input) => ({ ...input, [field]: value }));
  };
  const handleShow = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  React.useEffect(() => {
    if (error.code === 'AUTH') {
      setOpen(() => true);
    }
  }, [error]);
  return (
    <Flex
      bg="white"
      p="30px"
      borderRadius={{ md: '20px' }}
      w="450px"
      boxShadow={{ md: 'xl' }}
    >
      <Stack justifyContent="center" w="100%" alignItems="center">
        <Image src={logo} w={{ md: '250px' }} mb="50px" />

        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <Tooltip
              label="Wrong email or password"
              hasArrow
              bg="red.300"
              isOpen={isOpen}
              placement="top"
              mb="10px"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<AtSignIcon />}
                  />
                  <Input
                    placeholder="Username"
                    required
                    bg="gray.50"
                    autoComplete="off"
                    name="username"
                    onChange={handleChange}
                    onFocus={() => setOpen(() => false)}
                  />
                </InputGroup>
              </FormControl>
            </Tooltip>

            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<LockIcon />}
                />
                <Input
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  bg="gray.50"
                  autoComplete="off"
                  name="password"
                  onChange={handleChange}
                  onFocus={() => setOpen(() => false)}
                />
                <InputRightElement>
                  <IconButton
                    size="sm"
                    color="gray.400"
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handleShow}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              bg="green.400"
              color="white"
              _hover={{ backgroundColor: 'green.300', boxShadow: 'lg' }}
              disabled={loading}
            >
              {loading ? <Spinner size="xs" /> : 'Login'}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};
