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
const Sidebar = () => {
  return (
    <>
      <GridItem w="100%" minHeight="90vh" colSpan={1}>
        <Flex
          flexDirection="column"
          w="60%"
          justifyContent="center"
          m="40px"
          className="sidebar"
        >
          <Link to="/feedpage">
            <Flex m="10px" p="5px">
              <Icon fontSize="3xl" as={MdHome} m="5px" />
              <Text fontSize="2xl">Feed</Text>
            </Flex>
          </Link>
          <Link to="/explore">
            <Flex m="10px" p="5px">
              <Icon fontSize="3xl" as={MdExplore} m="5px" />
              <Text fontSize="2xl">Explore</Text>
            </Flex>
          </Link>
          <Link to="/bookmark">
            <Flex m="10px" p="5px">
              <Icon fontSize="3xl" as={MdFeed} m="5px" />
              <Text fontSize="2xl">Feed</Text>
            </Flex>
          </Link>
          <Link to="/profile">
            <Flex m="10px" p="5px">
              <Icon fontSize="3xl" as={MdPerson} m="5px" />
              <Text fontSize="2xl">Profile</Text>
            </Flex>
          </Link>
          <Button w="300px" bg="brand.200" color="brand.20">
            Post
          </Button>
        </Flex>
      </GridItem>
    </>
  );
};

export { Sidebar };
