import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser, getAllUser } from "../../features/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const SuggestionsBar = () => {
  const { user } = useSelector((state) => state.authentication);
  const { allUsers } = useSelector((state) => state.user);
  const [userSuggestions, setUserSuggestions] = useState([]);
  const dispatch = useDispatch();
  useEffect(
    () =>
      setUserSuggestions(
        allUsers
          .filter((ele) => ele.username !== user.username)
          .filter((ele) => !user.following.find((ele2) => ele2._id === ele._id))
          .slice(0, 4)
      ),
    [user, allUsers]
  );
  const followUserHandler = (newuser) => {
    dispatch(
      followUnfollowUser({
        userId: newuser._id,
        dispatch: dispatch,
        isFollow: true,
      })
    );
  };
  const navigate=useNavigate()
  const openSuggestedUserProfile=(username)=>{
    navigate(`/user-profile/${username}`)
  }
  return (
    allUsers.length > 0 && (
      <>
        {" "}
        <GridItem w="100%" minHeight="90vh" colSpan={1}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="sidebar"
          >
            <Text fontSize="2xl">Suggestions for you</Text>
            {userSuggestions.length > 0 &&
              userSuggestions.map((newuser) => {
                return (
                  <>
                    <Flex m="10px" w="250px" justifyContent="space-between">
                     <Flex>
                     <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        size="md"
                        my="auto"
                      />
                      <Flex flexDirection="column" m="5px">
                        <Text fontSize="lg" cursor="pointer" onClick={()=>openSuggestedUserProfile(newuser.username)}>{newuser.firstName} {newuser.lastName}</Text>
                        <Text fontSize="xs">@{newuser.username}</Text>
                      </Flex>
                     </Flex>
                      <Button
                        bg="brand.100"
                        size="sm"
                        onClick={(e) => followUserHandler(newuser)}
                        borderRadius="20px"
                        my="auto"
                      >
                        + Follow
                      </Button>
                    </Flex>
                  </>
                );
              })}
          </Flex>
        </GridItem>
      </>
    )
  );
};
export { SuggestionsBar };
