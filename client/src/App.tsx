import "./App.css";
import { Flex, Heading } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreInterface } from "./store";
import { LogIn, LogOut } from "./store/user/actions";
import { LoadTable } from "./store/data/actions";
import { Button } from "@chakra-ui/button";
import React from "react";
function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector<RootStoreInterface, boolean>(
    ({ user }) => user.loggedIn
  );
  return (
    <Flex>
      <Heading>{loggedIn ? "in" : "out"}</Heading>
      <Button
        onClick={() =>
          dispatch(LogIn({ username: "asdf", _id: "asf", modules: ["asf"] }))
        }
      >
        In
      </Button>
      <Button onClick={() => dispatch(LogOut())}>Out</Button>
      <Button
        onClick={() =>
          dispatch(LoadTable([{ name: "ad", id: "asdf", price: 1 }]))
        }
      >
        Load
      </Button>
    </Flex>
  );
}

export default App;
