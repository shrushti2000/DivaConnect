import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../features/authenticationSlice";

const Signin = () => {
  const {  token } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const testUserSigninHandler = () => {
    dispatch(
      loginUser({
        username: "adarshbalika",
        password: "adarshBalika123",
      })
    );
  };
  console.log(location);
  const from = location.state?.from?.pathname || "/feedpage";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  const signinHandler = () => {
    if (userCredentials.username && userCredentials.password !== "") {
      dispatch(loginUser(userCredentials));
    }
  };

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          w="500px"
          h="500px"
        >
          <Heading color="brand.100">Signin</Heading>
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
            type="password"
            size="md"
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
            onClick={testUserSigninHandler}
          >
            Sign in with Test Credentials
          </Button>
          <Button
            m="10px"
            size="lg"
            bg="brand.100"
            color="brand.20"
            onClick={signinHandler}
          >
            Signin
          </Button>
          <Link to="/signup">
            <Text fontSize="xl">Don't have an account?</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export { Signin };
