import React, { useEffect, useState } from "react";
import "./PostCard.css";
import { v4 as uuid } from "uuid";
import {
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite,
  MdBookmark,
  MdComment,
  MdEdit,
  MdDeleteOutline,
  MdOutlineCheck,
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
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { EditPostModal } from "../EditPostModal/EditPostModal";
import {
  addComment,
  deleteComment,
  deleteUserPost,
  editComment,
  likeAndDislikePost,
  setPostToBeEdited,
} from "../../features/postSlice";
import { useDispatch, useSelector } from "react-redux";

const PostCard = ({ post ,userDetails}) => {
  const { allUsers } = useSelector((state) => state.user);
  // const userDetails=allUsers?.find(user=>user?.username===post?.username)
  // console.log(userDetails)
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [showEditCommentInput, setShowEditCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [commentTobBeEdited, setCommentTobBeEdited] = useState({});
  const [newComment, setNewComment] = useState(commentTobBeEdited?.text || "");
  const [newEditedComment, setNewEditedComment] = useState();
  console.log(newComment);
  useEffect(() => {
    if (commentTobBeEdited) {
      setNewComment(commentTobBeEdited?.text || "");
    }
  }, [commentTobBeEdited]);
  
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
  const addCommentHandler = () => {
    dispatch(addComment({ postId: post._id, commentData: comment }));
    setComment("");
  };
  const editCommentHandler = (comment) => {
    setShowEditCommentInput(!showEditCommentInput);
    setCommentTobBeEdited(comment);
  };
  const postEditedCommenthandler = () => {
    dispatch(
      editComment({
        postId: post._id,
        commentId: commentTobBeEdited._id,
        commentData: newComment,
      })
    );
    setShowEditCommentInput(!showEditCommentInput);
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
        <Flex>
          <Flex flexDirection="row" w="100%">
            <Avatar
              name="Dan Abrahmov"
              size="sm"
              m="5px"
              src="https://bit.ly/dan-abramov"
            />
            <InputGroup size="md" w="100%" mx="10px">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Enter your comment..."
                w="100%"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  bg="brand.100"
                  onClick={addCommentHandler}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          {comments.length !== 0 && (
            <>
              {comments.map((comment) => {
                return (
                  <Flex
                    flexDirection="row"
                    borderRadius="15px"
                    p="5px"
                    m="5px"
                    justifyContent="space-between"
                    w="auto"
                    bg="brand.100"
                    alignItems="center"
                  >
                    <Flex>
                      {" "}
                      <Avatar
                        name="Dan Abrahmov"
                        size="sm"
                        mx="5px"
                        my="auto"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Flex flexDirection="column" width="100%">
                        <Text fontSize="sm" fontWeight="bold" mx="7px">
                          {comment.username}
                        </Text>
                        {showEditCommentInput &&
                        commentTobBeEdited._id === comment._id ? (
                          <Flex flexDirection="row">
                            <Input
                              borderTop="none"
                              borderLeft="none"
                              borderRight="none"
                              borderRadius="none"
                              focusBorderColor="none"
                              width="100%"
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                            />
                            <Icon
                              fontSize="lg"
                              as={MdOutlineCheck}
                              m="5px"
                              cursor="pointer"
                              onClick={() => postEditedCommenthandler()}
                            />
                          </Flex>
                        ) : (
                          <>
                            <Text fontSize="sm" mx="7px">
                              {comment.text}
                            </Text>
                          </>
                        )}
                      </Flex>
                    </Flex>{" "}
                    {comment.username === userDetails.username && (
                      <Menu>
                        <MenuButton
                          bg="Background.200"
                          as={IconButton}
                          aria-label="Options"
                          icon={<MdMoreHoriz />}
                          onClick={setPostToEdit}
                          size="sm"
                        />
                        <MenuList>
                          <MenuItem
                            onClick={(e) => editCommentHandler(comment)}
                            size="sm"
                          >
                            <Icon fontSize="sm" as={MdEdit} m="5px" />
                            <Text fontSize="xs">Edit comment</Text>
                          </MenuItem>
                          <MenuItem
                            onClick={(e) =>
                              dispatch(
                                deleteComment({
                                  postId: post._id,
                                  commentId: comment._id,
                                })
                              )
                            }
                            size="sm"
                          >
                            <Icon fontSize="sm" as={MdDeleteOutline} m="5px" />
                            <Text fontSize="xs">Delete comment</Text>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    )}
                  </Flex>
                );
              })}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
export { PostCard };
