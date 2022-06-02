import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          w="500px"
          h="fitContent"
          m="0px"
        >
          <Heading color="brand.100">Signup</Heading>
          <Text m="10px" fontSize="2xl">
            First Name
          </Text>
          <Input m="10px" placeholder="enter  first name..." size="md" />
          <Text m="10px" fontSize="2xl">
            Last Name
          </Text>
          <Input m="10px" placeholder="enter last name..." size="md" />

          <Text m="10px" fontSize="2xl">
            Email
          </Text>
          <Input m="10px" placeholder="enter email..." size="md" />
          <Text m="10px" fontSize="2xl">
            Password
          </Text>
          <Input m="10px" placeholder="enter password..." size="md" />
          <Button m="10px" size="lg" bg="brand.100" color="brand.20">
            Submit
          </Button>
          <Link to="/signin">
            <Text fontSize="xl">Already have an account?</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { Signup };
