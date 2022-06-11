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
import "./FeedPage.css";
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

const FeedPage = () => {
  const { allPosts } = useSelector((state) => state.post);
  console.log(allPosts)
  const { allUsers } = useSelector((state) => state.user);
  const { userPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.authentication);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const [feedPosts,setFeedPosts]=useState([])
  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
    username: user.username,
    comments: [],
  });
 
  
  useEffect(() => {
    
      setFeedPosts(
        allPosts.filter(
            (post) =>
                post?.username === user?.username ||
                user?.following?.find((ele) => post?.username === ele?.username)
             
              
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    
  }, [user, allPosts]);

  useEffect(() => {
    if (allPosts) {
      setFeedPosts( 
        allPosts.filter(
            (post) =>
              post?.username === user?.username ||
              user?.following?.find((ele) => post?.username === ele?.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, allPosts]);
  
  // useEffect(() => {
  //   dispatch(getUserPost(user.username));
  // }, [allPosts]);
  const toast = useToast();
  const submitPost = () => {
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
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
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
                <Icon fontSize="3xl" as={MdImage} m="5px" />
                <Button bg="brand.100" m="10px" onClick={submitPost}>
                  Post
                </Button>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              {feedPosts.length !==0 ?feedPosts.map((post) => {
                const userDetails=allUsers?.find(user=>user?.username===post?.username)
                return (<PostCard post={post} userDetails={userDetails} />);
              }) : <></>}
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
    </>
  );
};

export { FeedPage };
