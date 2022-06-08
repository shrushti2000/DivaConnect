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
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/authenticationSlice";

const EditUserProfileModal = () => {
  const { user } = useSelector((state) => state.authentication);
  const { postToBeEdited } = useSelector((state) => state.post);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const [newUserDetails, setNewUserDetails] = useState({
    bio: user?.bio || "",
    sociallink: user?.sociallink || "",
    ...user,
  });
  useEffect(() => {
    if (user) {
      setNewUserDetails({
        bio: user?.bio || "",
        link: user?.link || "",
        ...user,
      });
    }
  }, [user]);

  const saveNewUserDetails = () => {
    if (newUserDetails.bio !== "" && newUserDetails.sociallink !== "") {
      dispatch(updateUser(newUserDetails));
      toast({
        title: `Profile edited succesfully.`,
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
      <Button bg="brand.100" onClick={onOpen}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md" m="2">
        <ModalOverlay />
        <ModalContent w={{ base: "90vw", md: "30rem" }}>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton
            bg="transparent"
            color={useColorModeValue("gray.700", "white.900")}
            _focus={{
              boxShadow: "transparent",
              border: "none",
            }}
          />
          <ModalBody>
            <FormLabel>Bio</FormLabel>
            <Textarea
              placeholder="Enter bio..."
              h="fitContent"
              minHeight="30px"
              m="5px"
              value={newUserDetails.bio}
              onChange={(e) =>
                setNewUserDetails({ ...newUserDetails, bio: e.target.value })
              }
            />
            <FormLabel>Social Media Link</FormLabel>
            <Input
              h="fitContent"
              minHeight="50px"
              value={newUserDetails.sociallink}
              onChange={(e) =>
                setNewUserDetails({
                  ...newUserDetails,
                  sociallink: e.target.value,
                })
              }
            />
            <Button
              bg="brand.200"
              color="brand.20"
              mr={3}
              w="100px"
              m="5px"
              onClick={saveNewUserDetails}
            >
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export { EditUserProfileModal };
