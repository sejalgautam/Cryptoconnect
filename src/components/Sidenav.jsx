import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import React from "react";
import {  useNavigate } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();
  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Cryptocurrencies",
      link: "/cryptocurrencies",
    },
    {
      icon: BsArrowDownUp,
      text: "News",
      link: "/news",
    },
  ];
  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "18%",
      }}
      h={{
        base: "96vh",
        lg: "100vh",
      }}
      bg="#000626"
      color="white"
      position={{
        base: "none",
        lg: "fixed",
      }}
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          CryptoConnect
        </Heading>
        <Box mt="6" mx="3">
          {navlinks.map((nav) => (
            <HStack
              onClick={() => {
                console.log(nav.link);
                navigate(nav.link);
              }}
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
                fontWeight: "bold",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text mt="1rem" fontSize="14px">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3">
        <HStack
          onClick={() => {
            navigate("/support");
          }}
          key="support"
          py="3"
          px="4"
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
            fontWeight: "bold",
          }}
          color="#797E82"
        >
          <Icon />
          <Text mt="1rem" fontSize="14px">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
