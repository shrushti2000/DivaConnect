import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-img.jpg";
const Landingpage = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="600px"
        p={3}
        color="brand.100"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Heading>Diva Connect</Heading>
          <Text fontSize="3xl" color="brand.200" w="60%">
            Connect with amazing women around and share beauty,lifestyle,makeup
            tips!
          </Text>
          <Link to="/signin">
            <Button bg="brand.100" color="brand.20">
              Join now
            </Button>
          </Link>
        </Flex>
        <Image
          src={HeroImage}
          alt="Dan Abramov"
          mr="20px"
          w="500px"
          h="500px"
        />
      </Flex>
    </>
  );
};

export default Landingpage ;
