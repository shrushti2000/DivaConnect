import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          w="500px"
          h="500px"
        >
          <Heading color="brand.100">Signin</Heading>
          <Text m="10px" fontSize="2xl">
            Email
          </Text>
          <Input m="10px" placeholder="enter email..." size="md" />
          <Text m="10px" fontSize="2xl">
            Password
          </Text>
          <Input m="10px" placeholder="enter password..." size="md" />
          <Button m="10px" size="lg" bg="brand.100" color="brand.20">
            Sign in with Test Credentials
          </Button>
          <Button m="10px" size="lg" bg="brand.100" color="brand.20">
            Signin
          </Button>
          <Link to="/signup">
            <Text fontSize="xl">Don't have an account?</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { Signin };
