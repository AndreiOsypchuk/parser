import { chakra, Stack } from "@chakra-ui/react";
import React from "react";
import { AppForm } from "../../components";
import { ReactComponent as Icon } from "./Logo.svg";
const Logo = chakra(Icon);
export const Auth: React.FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center" h="100vh">
      <Stack
        justifyContent="center"
        alignItems="center"
        bg="white"
        p="30px"
        pt="60px"
        borderRadius={{ md: "20px" }}
        // w="450px"
        w={{ md: "450px" }}
        boxShadow={{ md: "xl" }}
      >
        <Logo w="250px" h="250px" />
        <AppForm />
      </Stack>
    </Stack>
  );
};
