import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdExplore, MdPerson, MdFeed } from "react-icons/md";

const SuggestionsBar = () => {
  return (
    <GridItem w="100%" minHeight="90vh" colSpan={1}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="sidebar"
      >
        <Text fontSize="2xl">Suggestions for you</Text>
        <Flex m="10px">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" m="5px">
            <Text fontSize="xl">Adarsh Balika</Text>
            <Text fontSize="xs">@adarshbalika</Text>
          </Flex>
          <Button bg="brand.200" size="md">
            Follow
          </Button>
        </Flex>
        <Flex m="10px">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" m="5px">
            <Text fontSize="xl">Adarsh Balika</Text>
            <Text fontSize="xs">@adarshbalika</Text>
          </Flex>
          <Button bg="brand.200" size="md">
            Follow
          </Button>
        </Flex>
        <Flex m="10px">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" m="5px">
            <Text fontSize="xl">Adarsh Balika</Text>
            <Text fontSize="xs">@adarshbalika</Text>
          </Flex>
          <Button bg="brand.200" size="md">
            Follow
          </Button>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export { SuggestionsBar };
