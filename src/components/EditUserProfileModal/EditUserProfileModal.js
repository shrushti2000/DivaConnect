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
  Image,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdCameraAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/authenticationSlice";
import "./EditUserProfileModal.css";

const EditUserProfileModal = () => {
  const { user } = useSelector((state) => state.authentication);
  const { postToBeEdited } = useSelector((state) => state.post);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  const [newUserDetails, setNewUserDetails] = useState({
    bio: user?.bio || "",
    sociallink: user?.sociallink || "",
    profilepic: user?.profilepic || "",
    ...user,
  });
  useEffect(() => {
    if (user) {
      setNewUserDetails({
        bio: user?.bio || "",
        sociallink: user?.sociallink || "",
        profilepic: user?.profilepic || "https://bit.ly/broken-link",
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
  const [disableSubmit, setDisableSubmit] = useState(false);
  const uploadImage = async (image) => {
    setDisableSubmit(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "n5g5eby4");
    data.append("cloud_name", "shrushti23");
    await fetch("https://api.cloudinary.com/v1_1/shrushti23/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setNewUserDetails({ ...newUserDetails, profilepic: data.url });
        console.log(data.url);
      })

      .catch((err) => {
        console.log(err);
      });

    setDisableSubmit(false);
  };
  const dummyImage = "https://bit.ly/broken-link";
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
            <Avatar
              boxSize="150px"
              borderRadius="50%"
              objectFit="cover"
              src={newUserDetails.profilepic}
              alt="userprofile pic"
              className="profilepic"
            />

            <label>
              {" "}
              <Icon
                as={MdCameraAlt}
                className="camera-icon"
                fontSize="3xl"
              ></Icon>
              <Input
                type="file"
                visibility="hidden"
                onChange={(e) => uploadImage(e.target.files[0])}
              ></Input>
            </label>
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
            {disableSubmit ? (
              <>
                {" "}
                <Button
                  disabled
                  bg="brand.200"
                  color="brand.20"
                  mr={3}
                  w="100px"
                  m="5px"
                  onClick={saveNewUserDetails}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                {" "}
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
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export { EditUserProfileModal };
