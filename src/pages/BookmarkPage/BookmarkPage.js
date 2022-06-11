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
  
  const BookmarkPage = () => {
    const { bookmarkPosts,allPosts } = useSelector((state) => state.post);
    const {allUsers} =useSelector(state=>state.user)
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

    useEffect(() => {
      const bookmarkedPosts = allPosts.filter((post) =>
        bookmarkPosts.some((_id) => post._id === _id)
      );
      setBookmarkedPosts(bookmarkedPosts);
    }, [bookmarkPosts, allPosts]);
    // console.log(bookmarkedPosts)
   
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
              
                {bookmarkedPosts.length!==0 ? bookmarkedPosts.map((post) => {
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
  
  export { BookmarkPage };
  