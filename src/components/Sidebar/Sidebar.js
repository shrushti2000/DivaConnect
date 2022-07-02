import React from "react";
import { Button, Flex, GridItem, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdExplore, MdPerson, MdFeed, MdLogout } from "react-icons/md";
import { logoutUser } from "../../features/authenticationSlice";
import { useDispatch } from "react-redux";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser());
    toast({
      title: `Logged Out Successfully`,
      status: "success",
      position: "top",
      isClosable: true,
    });
    navigate("/signin");
  };
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
            <Flex
              m="10px"
              px="50px"
              py="5px"
              w="fit-content"
              minWidth="250px"
              className="sidebar-item"
            >
              <Icon fontSize="3xl" as={MdHome} m="5px" />
              <Text fontSize="2xl">Feed</Text>
            </Flex>
          </Link>
          <Link to="/explore">
            <Flex
              m="10px"
              px="50px"
              py="5px"
              minWidth="250px"
              w="fit-content"
              className="sidebar-item"
            >
              <Icon fontSize="3xl" as={MdExplore} m="5px" />
              <Text fontSize="2xl">Explore</Text>
            </Flex>
          </Link>
          <Link to="/bookmark">
            <Flex
              m="10px"
              px="50px"
              py="5px"
              w="fit-content"
              minWidth="250px"
              className="sidebar-item"
            >
              <Icon fontSize="3xl" as={MdFeed} m="5px" />
              <Text fontSize="2xl">Bookmark</Text>
            </Flex>
          </Link>
          <Link to="/profile">
            <Flex
              m="10px"
              px="50px"
              py="5px"
              w="fit-content"
              minWidth="250px"
              className="sidebar-item"
            >
              <Icon fontSize="3xl" as={MdPerson} m="5px" />
              <Text fontSize="2xl">Profile</Text>
            </Flex>
          </Link>
          <Flex
            m="10px"
            px="50px"
            py="5px"
            w="fit-content"
            onClick={logoutHandler}
            minWidth="250px"
            cursor="pointer"
            className="sidebar-item"
          >
            <Icon fontSize="3xl" as={MdLogout} m="5px" />
            <Text fontSize="2xl">Logout</Text>
          </Flex>
        </Flex>
      </GridItem>
    </>
  );
};
export { Sidebar };
