import {
    Flex,
    Grid,
    Text,
    GridItem,
    Link,
    Avatar,
    Button,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
  import {
    SuggestionsBar,
    Sidebar,
    EditUserProfileModal,
    PostCard,
  } from "../../components";
import { getUserPost } from "../../features/postSlice";
  
  const SuggestedUserProfile = () => {
    
    const { allPosts ,userPosts} = useSelector((state) => state.post);
    const { allUsers } = useSelector((state) => state.user);
    const { user } = useSelector((state) => state.authentication);
    const {username}=useParams()
    const findUser=allUsers.find(user=>user.username===username)
    const [suggestedUserPosts,setSuggestedUserPosts]=useState([])
    const [suggestedUser,setSuggestedUser]=useState({})
    useEffect(()=>{
        setSuggestedUser([...allUsers]?.find((user) => user?.username === username));
    },[user,allUsers, username,allPosts])
  // const suggestedUserPosts=allPosts.filter(post=>post.username===findUser.username)
  // console.log(suggestedUserPosts)
  
  //  useEffect(()=>{
  //     if(allPosts){
  //       setSuggestedUserPosts(allPosts?.filter(post=>post?.username===findUser?.username))
  //     }
  //  },[user,allPosts,username,findUser])
   const dispatch=useDispatch()
   useEffect(() => {
    dispatch(getUserPost(username));
  }, [username, allPosts]);
   
    console.log(suggestedUser)
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
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />{" "}
                  <Flex flexDirection="column" mx="20px">
                    <Text fontSize="lg" fontWeight="bold" color="Background.200">
                      {suggestedUser.firstName} {suggestedUser.lastName}
                    </Text>
                    <Text fontSize="md">@{suggestedUser.username}</Text>
                    <Text fontSize="md" my="5px">
                      {suggestedUser.bio}
                    </Text>
                    <Flex>
                      {/* <Text mx="10px">{suggestedUser.post.length} Posts</Text>  */}
                      {/* <Text mx="10px">{suggestedUser.followers.length} Followers</Text>
                      <Text mx="10px">{suggestedUser.following.length} Following</Text> */}
                    </Flex>
                    <Link to="#">
                      <Text color="brand.100">{suggestedUser.sociallink}</Text>
                    </Link>
                  </Flex>
                </Flex>
                <EditUserProfileModal />
              </Flex>
              <Flex flexDirection="column">
                {userPosts.map((post) => {
                  return <PostCard post={post} userDetails={suggestedUser} />;
                })}
              </Flex>
            </Flex>
          </GridItem>
          <SuggestionsBar />
        </Grid>
      </>
    );
  };
  
  export { SuggestedUserProfile };
  