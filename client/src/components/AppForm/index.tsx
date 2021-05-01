import { Stack, IconButton } from "@chakra-ui/react";
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import { AppInput, AppButton } from "../";
export const AppForm: React.FC = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <form>
        <Stack mt="20px" h="170px" justifyContent="space-evenly">
          <AppInput left={<AtSignIcon />} placeholder="Username" />
          <AppInput
            placeholder="Password"
            left={<LockIcon />}
            type={show ? "text" : "password"}
            right={
              <IconButton
                aria-label="show password"
                size="sm"
                color="gray.400"
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShow((show) => !show)}
              />
            }
          />
          <AppButton label="Login" />
        </Stack>
      </form>
    </>
  );
};
