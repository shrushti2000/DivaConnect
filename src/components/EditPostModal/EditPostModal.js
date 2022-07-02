import {
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  MenuItem,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserPost } from "../../features/postSlice";

const EditPostModal = () => {
  const { postToBeEdited } = useSelector((state) => state.post);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const [editedPost, setEditedPost] = useState({
    title: postToBeEdited?.title || "",
    content: postToBeEdited?.content || "",
    ...postToBeEdited,
  });
  useEffect(() => {
    if (postToBeEdited) {
      setEditedPost({
        title: postToBeEdited?.title || "",
        content: postToBeEdited?.content || "",
        ...postToBeEdited,
      });
    }
  }, [postToBeEdited]);

  const saveEditedPost = () => {
    if (editedPost.title !== "" && editedPost.content !== "") {
      dispatch(editUserPost(editedPost));
      toast({
        title: `Post edited succesfully.`,
        status: "success",
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `Please enter all fields`,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <MenuItem
        _hover={{ bg: "gray.300" }}
        bg="inherit"
        fontSize="md"
        onClick={onOpen}
      >
        Edit
      </MenuItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
              border: "none",
            }}
          />
          <ModalBody>
            <Textarea
              placeholder="Enter title for your post.."
              h="fitContent"
              minHeight="30px"
              m="5px"
              value={editedPost.title}
              onChange={(e) =>
                setEditedPost({ ...editedPost, title: e.target.value })
              }
            />
            <Textarea
              h="fitContent"
              minHeight="300px"
              value={editedPost.content}
              onChange={(e) =>
                setEditedPost({ ...editedPost, content: e.target.value })
              }
            />
            <Button
              bg="brand.200"
              color="brand.20"
              mr={3}
              w="100px"
              m="5px"
              onClick={saveEditedPost}
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export { EditPostModal };
