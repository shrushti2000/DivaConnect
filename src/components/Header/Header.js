import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Flex
        w="100%"
        alignItems="center"
        gap="2"
        p="10px"
        height="10vh"
        className="header-container"
      >
        <Box p="2">
          <Heading size="md">Diva Connect</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Link to="/signup">
            {" "}
            <Button bg="brand.100">Sign Up</Button>
          </Link>
          <Link to="/signin">
            {" "}
            <Button bg="brand.100">Sign in</Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export { Header };
