import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdExplore, MdPerson, MdFeed, MdImage } from "react-icons/md";
import {
  EditPostModal,
  Sidebar,
  SuggestionsBar,
  Toast,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserPost,
  getAllPosts,
  getUserPost,
} from "../../features/postSlice";
import { PostCard } from "../../components/PostCard/PostCard";
const ExplorePage = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);
  return (
    <>
      <Grid templateColumns="repeat(5,1fr)" gap={1}>
        <Sidebar />
        <GridItem w="100%" colSpan={3}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex flexDirection="column">
              {allPosts.length !== 0 ? (
                allPosts.map((post) => {
                  const userDetails = allUsers?.find(
                    (user) => user?.username === post?.username
                  );
                  return <PostCard post={post} userDetails={userDetails} />;
                })
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};
export default ExplorePage ;
