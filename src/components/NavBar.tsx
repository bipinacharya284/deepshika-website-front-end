import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const MenuItems = ({ children, isActive }: any) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    bg={isActive ? "blue.500" : "transparent"}
  >
    {children}
  </Text>
);

export default function Navbar() {
  const [activeItem, setActiveItem] = React.useState("Home");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#12203F"
      color="white"
    >
      <Flex gap="2" align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Flex>

      <Box
        gap="2"
        display={{ base: "block", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {["Home", "About", "Contact"].map((item) => (
          <MenuItems
            key={item}
            isActive={activeItem === item}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </MenuItems>
        ))}
      </Box>
    </Flex>
  );
}
