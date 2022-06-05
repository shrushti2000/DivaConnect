import React, { useState } from "react";
import "./PostCard.css";
import {
  MdMoreHoriz,
  MdFavoriteBorder,
  MdBookmark,
  MdComment,
} from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  Text,
  Avatar,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { EditPostModal } from "../EditPostModal/EditPostModal";
import { deleteUserPost, setPostToBeEdited } from "../../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
const PostCard = ({ post, userDetails }) => {
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [showmodal, setShowModal] = useState("");
  const deletePostHandler = () => {
    dispatch(deleteUserPost(post._id));
  };
  const setPostToEdit = () => {
    dispatch(setPostToBeEdited(post));
  };
  return (
    <>
      <Flex flexDirection="column" w="650px" className="postContainer" p="20px">
        <Flex justifyContent="space-between" w="600px">
          <Flex>
            {" "}
            <Avatar
              m="5px"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Flex flexDirection="column">
              <Text fontSize="xl">
                {userDetails.firstName} {userDetails.lastName}
              </Text>
              <Text fontSize="md">@{post.username}</Text>
            </Flex>
            <Text fontSize="md" m="5px">
              {" "}
              {` ${new Date(post.createdAt)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}`}
            </Text>
          </Flex>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<MdMoreHoriz />}
              onClick={setPostToEdit}
            />
            <MenuList>
              <EditPostModal post={post} />
              <MenuItem onClick={deletePostHandler}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text fontSize="3xl" className="post-title">
          {post.title}
        </Text>
        <Flex>{post.content}</Flex>
        <Flex>
          <Flex m="5px">
            <Icon fontSize="2xl" as={MdFavoriteBorder} m="5px" />
            <Text fontSize="2xl">2</Text>
          </Flex>
          <Flex m="5px">
            <Icon as={MdBookmark} m="5px" fontSize="2xl" />
          </Flex>
          <Flex m="5px">
            <Icon fontSize="2xl" as={MdComment} m="5px" />
            <Text fontSize="2xl">2</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export { PostCard };
