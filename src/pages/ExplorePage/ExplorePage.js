import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Sidebar, SuggestionsBar } from "../../components";
import { useSelector } from "react-redux";
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
                  return (
                    <PostCard
                      key={post._id}
                      post={post}
                      userDetails={userDetails}
                    />
                  );
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

export { ExplorePage };
