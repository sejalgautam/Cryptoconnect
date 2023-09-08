import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import React from "react";
import { FaBars, FaUserTie } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box
      color="white"
      bg="#000626"
      pl={{ base: "0%", lg: "18%" }}
      boxShadow="sm"
    >
      <HStack maxW="70rem" h="16" justify="space-between" px="32px" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <a href="https://omlokhande.vercel.app/">
            <MenuButton
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="View my portfolio"
              as={Button}
            >
              <Icon as={FaUserTie} />
            </MenuButton>
          </a>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
