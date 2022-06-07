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
                    <Flex m="10px">
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Flex flexDirection="column" m="5px">
                        <Text fontSize="xl">{newuser.firstName} {newuser.lastName}</Text>
                        <Text fontSize="xs">@{newuser.username}</Text>
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
