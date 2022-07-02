import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Sidebar, SuggestionsBar } from "../../components";
import { useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";

const BookmarkPage = () => {
  const { bookmarkPosts, allPosts } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  useEffect(() => {
    const bookmarkedPosts = allPosts.filter((post) =>
      bookmarkPosts.some((_id) => post._id === _id)
    );
    setBookmarkedPosts(bookmarkedPosts);
  }, [bookmarkPosts, allPosts]);
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
              {bookmarkedPosts.length !== 0 ? (
                bookmarkedPosts.map((post) => {
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
                <>
                  <Text fontSize="4xl" mt="40px">
                    You have not bookmarked any posts yet!
                  </Text>
                </>
              )}
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};

export { BookmarkPage };
