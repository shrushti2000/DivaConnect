import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signupUser } from "../../features/authenticationSlice";

const Signup = () => {
  const { token } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const signupHandler = () => {
    if (
      userCredentials.username !== "" &&
      userCredentials.password !== "" &&
      userCredentials.firstName !== "" &&
      userCredentials.lastName !== ""
    ) {
      dispatch(signupUser(userCredentials));
    }
  };
  const from = location.state?.from?.pathname || "/feedpage";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          w="500px"
          h="fitContent"
          m="0px"
        >
          <Heading color="brand.100">Signup</Heading>
          <Text m="10px" fontSize="2xl">
            First Name
          </Text>
          <Input
            m="10px"
            placeholder="enter  first name..."
            size="md"
            value={userCredentials.firstName}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                firstName: e.target.value,
              })
            }
          />
          <Text m="10px" fontSize="2xl">
            Last Name
          </Text>
          <Input
            m="10px"
            placeholder="enter last name..."
            size="md"
            value={userCredentials.lastName}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                lastName: e.target.value,
              })
            }
          />

          <Text m="10px" fontSize="2xl">
            Username
          </Text>
          <Input
            m="10px"
            placeholder="enter username..."
            size="md"
            value={userCredentials.username}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                username: e.target.value,
              })
            }
          />
          <Text m="10px" fontSize="2xl">
            Password
          </Text>
          <Input
            m="10px"
            placeholder="enter password..."
            size="md"
            type="password"
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
          />
          <Button
            m="10px"
            size="lg"
            bg="brand.100"
            color="brand.20"
            onClick={() => signupHandler()}
          >
            Submit
          </Button>
          <Link to="/signin">
            <Text fontSize="xl">Already have an account?</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { Signup };
