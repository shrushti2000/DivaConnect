import React, { useEffect, useState } from "react";
import "./PostCard.css";

import {
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite,
  MdBookmark,
  MdComment,
  MdEdit,
  MdDeleteOutline,
  MdOutlineCheck,
  MdBookmarkBorder,
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
  Image
} from "@chakra-ui/react";
import { EditPostModal } from "../EditPostModal/EditPostModal";
import {
  addAndRemoveBookmark,
  addComment,
  deleteComment,
  deleteUserPost,
  editComment,
  getAllPosts,
  getUserPost,
  likeAndDislikePost,
  setPostToBeEdited,
} from "../../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
const PostCard = ({ post, userDetails }) => {
  const { allPosts, bookmarkPosts } = useSelector((state) => state.post);
  const {allUsers} =useSelector((state)=>state.user)
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const [showEditCommentInput, setShowEditCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [commentTobBeEdited, setCommentTobBeEdited] = useState({});
  const [newComment, setNewComment] = useState(commentTobBeEdited?.text || "");
  useEffect(() => {
    if (commentTobBeEdited) {
      setNewComment(commentTobBeEdited?.text || "");
    }
  }, [commentTobBeEdited, allPosts]);
  const {
    username,
    likes: { likeCount, likedBy, dislikedBy },
    comments,
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
  const navigate = useNavigate();
  const openSuggestedUserProfile = (username) => {
    navigate(`/user-profile/${username}`);
  };
  const bookMarkPostHandler = (isPostToBeBookmark) => {
    isPostToBeBookmark
      ? dispatch(addAndRemoveBookmark({ postId: post._id, isBookmark: true }))
      : dispatch(addAndRemoveBookmark({ postId: post._id, isBookmark: false }));
  };
  const isPostBookmarked = bookmarkPosts?.some(
    (bookmarkpost) => bookmarkpost === post._id
  );
  return (
    <>
      <Flex flexDirection="column" w="650px" className="postContainer" p="20px">
        <Flex justifyContent="space-between" w="600px">
          <Flex>
            {" "}
            <Avatar
              m="5px"
              name="Dan Abrahmov"
              src={userDetails?.profilepic}
            />
            <Flex flexDirection="column">
              <Text fontSize="xl" cursor="pointer" onClick={()=>openSuggestedUserProfile(userDetails?.username)}>
                {userDetails?.firstName} {userDetails?.lastName}
              </Text>
              <Text fontSize="md">@{post?.username}</Text>
            </Flex>
            <Text fontSize="md" m="5px">
              {" "}
              {` ${new Date(post?.createdAt)
                .toDateString()
                .split(" ")
                .slice(1, 4)
                .join(" ")}`}
            </Text>
            <Text fontSize="md" m="5px">
              {" "}
              {` ${new Date(post?.createdAt)
                .toTimeString()
                .split(" ")
                .slice(0, 1)
                .join(" ")}`}
            </Text>
          </Flex>
         
          {user.username === username && (
            <>
              {" "}
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
            </>
          )}
        </Flex>
        <Text fontSize="3xl" className="post-title">
          {post.title}
        </Text>
        <Image
    boxSize='100%'
    maxBlockSize="600px"
    objectFit='100%'
    src={post.url}
    alt='Dan Abramov'
  />
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
            {isPostBookmarked ? (
              <>
                {" "}
                <Icon
                  as={MdBookmark}
                  m="5px"
                  fontSize="2xl"
                  cursor="pointer"
                  onClick={(e) => bookMarkPostHandler(false)}
                />
              </>
            ) : (
              <>
                {" "}
                <Icon
                  as={MdBookmarkBorder}
                  m="5px"
                  fontSize="2xl"
                  onClick={(e) => bookMarkPostHandler(true)}
                  cursor="pointer"
                />
              </>
            )}
          </Flex>
          <Flex m="5px">
            <Icon fontSize="2xl" as={MdComment} m="5px" />
            {post.comments.length!==0 ?<Text fontSize="2xl">{post.comments.length}</Text>:<></>}
          </Flex>
        </Flex>
        <Flex>
          <Flex flexDirection="row" w="100%">
            <Avatar
              name="Dan Abrahmov"
              size="sm"
              m="5px"
              src={user.profilepic}
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
                const profilepicofuser=allUsers.find(user=>user.username===comment.username)
                
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
                        alt="userprofile"
                        size="sm"
                        mx="5px"
                        my="auto"
                        src={profilepicofuser?.profilepic}
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
                    {comment.username === user.username && (
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
