import React, { useState } from "react";
import "./PostCard.css";
import {
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite,
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
import {
  deleteUserPost,
  likeAndDislikePost,
  setPostToBeEdited,
} from "../../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
const PostCard = ({ post, userDetails }) => {
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [showmodal, setShowModal] = useState("");
  const {
    _id,
    content,
    username,
    likes: { likeCount, likedBy, dislikedBy },
    bookmark,
    comments,
    createdAt,
  } = post;
  const isPostLiked = likedBy?.some((like) => like.username === user.username);
  const deletePostHandler = () => {
    dispatch(deleteUserPost(post._id));
  };
  const setPostToEdit = () => {
    dispatch(setPostToBeEdited(post));
  };
  const likePostHandler = () => {
    dispatch(
      likeAndDislikePost({
        postId: post._id,
        isLike: isPostLiked ? false : true,
      })
    );
    console.log("like clisked");
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
            {isPostLiked ? (
              <>
                <Icon
                  fontSize="2xl"
                  color="brand.200"
                  as={MdFavorite}
                  m="5px"
                  onClick={likePostHandler}
                  cursor="pointer"
                />
              </>
            ) : (
              <>
                <Icon
                  fontSize="2xl"
                  as={MdFavoriteBorder}
                  m="5px"
                  onClick={likePostHandler}
                  cursor="pointer"
                />
              </>
            )}
            {likeCount !== 0 && <Text fontSize="2xl">{likeCount}</Text>}
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
