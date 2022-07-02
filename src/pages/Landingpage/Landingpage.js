import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-img.png";

const Landingpage = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="90%"
        h="700px"
        m="auto"
        p={3}
        color="brand.100"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Heading
            fontSize="70px"
            fontFamily="Gentium Book Plus"
            color="var(--primary-text-color)"
          >
            Diva Connect
          </Heading>
          <Text fontSize="3xl" color="brand.200" w="80%">
            Connect with amazing women around and share beauty,lifestyle,makeup
            ,styling ideas and tips!
          </Text>
          <Link to="/signin">
            <Button bg="brand.100" color="brand.20">
              Join now
            </Button>
          </Link>
        </Flex>
        <Image src={HeroImage} alt="heroimage" w="700px" h="700px" m="10px" />
      </Flex>
    </>
  );
};

export { Landingpage };
