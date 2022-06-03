import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdExplore, MdPerson, MdFeed, MdImage } from "react-icons/md";
import "./FeedPage.css";
import { Sidebar, SuggestionsBar } from "../../components";

const FeedPage = () => {
  return (
    <>
      <Grid templateColumns="repeat(4,1fr)" gap={3}>
        <Sidebar />
        <GridItem w="100%" colSpan={2}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              flexDirection="column"
              w="70%"
              p="10px"
              className="text-editor"
              m="10px"
            >
              <Flex>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Text fontSize="xl" m="5px">
                  What's new to share?
                </Text>
              </Flex>
              <Textarea
                placeholder="Here is a sample placeholder"
                h="150px"
                m="5px"
              />
              <Flex justifyContent="space-between">
                <Icon fontSize="3xl" as={MdImage} m="5px" />
                <Button bg="brand.100" m="10px">
                  Post
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};

export { FeedPage };
