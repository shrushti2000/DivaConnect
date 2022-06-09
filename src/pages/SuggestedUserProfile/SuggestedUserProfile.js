import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserPost } from '../../features/postSlice'
import {
    Flex,
    Grid,
    Text,
    GridItem,
    Link,
    Avatar,
    Button,
  } from "@chakra-ui/react";
  import {
    SuggestionsBar,
    Sidebar,
    EditUserProfileModal,
    PostCard,
  } from "../../components";
const SuggestedUserProfile = () => {
    const {userId}=useParams()
    const {user}=useSelector(state=>state.authentication)
    const {allUsers}=useSelector(state=>state.user)
    const {allPosts,userPosts}=useSelector(state=>state.post)
    const [singleUser,setSingleUser]=useState({})
   const dispatch=useDispatch()
    useEffect(()=>{
        setSingleUser(allUsers.find((user)=>user._id===userId))
    },[allUsers,userId])
    useEffect(()=>{
        dispatch(getUserPost(singleUser?.username))
    },[singleUser,allPosts])
  return (
    singleUser?.username ? (
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
                    {singleUser.firstName} {singleUser.lastName}
                  </Text>
                  <Text fontSize="md">@{singleUser.username}</Text>
                  <Text fontSize="md" my="5px">
                    {user.bio}
                  </Text>
                  <Flex>
                    <Text mx="10px">{userPosts.length} Posts</Text>
                    <Text mx="10px">{singleUser.followers.length} Followers</Text>
                    <Text mx="10px">{singleUser.following.length} Following</Text>
                  </Flex>
                  <Link to="#">
                    <Text color="brand.100">{singleUser.sociallink}</Text>
                  </Link>
                </Flex>
              </Flex>
             
            </Flex>
            <Flex flexDirection="column">
              {userPosts.length!=0 ? (userPosts.map((post) => 
                <PostCard post={post}/>)) :<><Text>No posts</Text></> }
              
            </Flex>
          </Flex>
        </GridItem>
        <SuggestionsBar />
      </Grid>
        </>
    ):<></>
  )
}

export { SuggestedUserProfile}