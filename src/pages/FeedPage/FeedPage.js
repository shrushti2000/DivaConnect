import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
  useToast,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./FeedPage.css";
import { Sidebar, SuggestionsBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addUserPost } from "../../features/postSlice";
import { PostCard } from "../../components/PostCard/PostCard";

const FeedPage = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [feedPosts, setFeedPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState({
    istrending: false,
    posts: [],
  });
  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
    username: user?.username || "",
    url: "",
    comments: [],
  });

  useEffect(() => {
    if (allPosts) {
      setFeedPosts(
        allPosts
          .filter(
            (post) =>
              post?.username === user?.username ||
              user?.following?.find((ele) => post?.username === ele?.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);
  const trendingHandler = () => {
    setTrendingPosts((prev) => ({ ...prev, istrending: true }));
    setTrendingPosts((prev) => ({
      ...prev,
      posts: [...feedPosts]
        ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        ?.filter((post) => post.likes.likeCount > 0),
    }));
  };

  const latestHandler = () => {
    setTrendingPosts((prev) => ({ ...prev, istrending: false }));
  };

  const [disableSubmit, setDisableSubmit] = useState(false);
  const uploadImage = async (image) => {
    setDisableSubmit(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "n5g5eby4");
    data.append("cloud_name", "shrushti23");
    await fetch("https://api.cloudinary.com/v1_1/shrushti23/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPostContent({ ...postContent, url: data.url });
      })
      .catch((err) => {
        console.log(err);
      });

    setDisableSubmit(false);
  };
  const toast = useToast();
  const submitPost = async () => {
    if (postContent.textContent !== "" && postContent.title !== "") {
      dispatch(addUserPost(postContent));
      toast({
        title: `Post added succesfully`,
        status: "success",
        position: "top",
        isClosable: true,
      });
      setPostContent({ ...postContent, title: "", content: "" });
    } else {
      toast({
        title: `Please enter all the content`,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
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
              flexDirection="column"
              w="70%"
              p="10px"
              className="text-editor"
              m="10px"
            >
              <Flex>
                <Avatar src={user.profilepic} />
                <Text fontSize="xl" m="5px">
                  What's new to share?
                </Text>
              </Flex>
              <Textarea
                placeholder="Enter title for your post.."
                h="30px"
                m="5px"
                value={postContent.title}
                onChange={(e) =>
                  setPostContent({ ...postContent, title: e.target.value })
                }
              />
              <Textarea
                value={postContent.content}
                placeholder="Enter content.."
                h="150px"
                m="5px"
                onChange={(e) =>
                  setPostContent({ ...postContent, content: e.target.value })
                }
              />
              <Flex justifyContent="space-between">
                <Input
                  type="file"
                  padding="5px"
                  cursor="pointer"
                  onChange={(e) => uploadImage(e.target.files[0])}
                ></Input>{" "}
                {disableSubmit ? (
                  <>
                    {" "}
                    <Button
                      disabled
                      bg="brand.100"
                      m="10px"
                      onClick={submitPost}
                    >
                      Post
                    </Button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Button bg="brand.100" m="10px" onClick={submitPost}>
                      Post
                    </Button>
                  </>
                )}
              </Flex>
            </Flex>
            <Flex my="10px">
              <Text
                cursor="pointer"
                borderRadius="20px 0px 0px 20px"
                px="70px"
                onClick={() => trendingHandler()}
                fontSize="3xl"
                fontWeight="500"
                className="trending-text"
                textDecoration={trendingPosts.istrending ? "underline" : "none"}
                backgroundColor={
                  trendingPosts.istrending
                    ? "var(--secondary-bg-color)"
                    : "var(--primary-bg-color)"
                }
                color={
                  trendingPosts.istrending
                    ? "var(--primary-bg-color)"
                    : "var(--secondary-bg-color)"
                }
              >
                Trending{" "}
              </Text>

              <Text
                cursor="pointer"
                borderRadius="0px 20px 20px 0px"
                px="70px"
                onClick={() => latestHandler()}
                fontSize="3xl"
                fontWeight="500"
                className="trending-text"
                textDecoration={trendingPosts.istrending ? "none" : "underline"}
                backgroundColor={
                  trendingPosts.istrending
                    ? "var(--primary-bg-color)"
                    : "var(--secondary-bg-color)"
                }
                color={
                  trendingPosts.istrending
                    ? "var(--secondary-bg-color)"
                    : "var(--primary-bg-color)"
                }
              >
                {" "}
                Latest{" "}
              </Text>
            </Flex>
            {feedPosts.length === 0 ? (
              <>
                <Text fontSize="3xl">You have not created any posts yet!</Text>
              </>
            ) : (
              <>
                {" "}
                <Flex flexDirection="column">
                  {trendingPosts.istrending ? (
                    <>
                      {trendingPosts.posts.length !== 0 ? (
                        trendingPosts.posts.map((post) => {
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
                          <Text>
                            Start liking posts to see what's trending!
                          </Text>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {feedPosts.length !== 0 ? (
                        feedPosts.map((post) => {
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
                    </>
                  )}
                </Flex>
              </>
            )}
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};

export { FeedPage };
