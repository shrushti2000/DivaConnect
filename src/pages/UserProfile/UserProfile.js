import { Flex, Grid, Text, GridItem, Link, Avatar } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {
  SuggestionsBar,
  Sidebar,
  EditUserProfileModal,
  PostCard,
} from "../../components";

const UserProfile = () => {
  const { userPosts,allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.authentication);
  const getSortedPosts = () => {
    return [...allPosts].filter(post=>post.username===user.username).sort(function (a, b) {
      return new Date(b["createdAt"]) - new Date(a["createdAt"]);
    });
  };
  const sortedPosts = getSortedPosts();

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
            <Flex
              w="70%"
              m="30px"
              justifyContent="space-between"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p="30px"
            >
              <Flex>
                <Avatar size="2xl" src={user.profilepic} />{" "}
                <Flex flexDirection="column" mx="20px">
                  <Text fontSize="lg" fontWeight="bold" color="Background.200">
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text fontSize="md">@{user.username}</Text>
                  <Text fontSize="md" my="5px">
                    {user.bio}
                  </Text>
                  <Flex>
                    <Text mx="10px">{userPosts.length} Posts</Text>
                    <Text mx="10px">{user.followers.length} Followers</Text>
                    <Text mx="10px">{user.following.length} Following</Text>
                  </Flex>
                  <Link to="#">
                    <Text color="brand.100">{user.sociallink}</Text>
                  </Link>
                </Flex>
              </Flex>
              <EditUserProfileModal />
            </Flex>
            <Flex flexDirection="column">
              {sortedPosts.map((post) => {
                return (
                  <PostCard key={post._id} post={post} userDetails={user} />
                );
              })}
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};

export { UserProfile };
