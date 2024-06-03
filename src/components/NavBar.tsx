import { Box, Flex, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface NavItems {
  navLink: string;
  menuName: string;
}

interface NavData {
  navs: NavItems[];
}

const colorCodeInActive = "#12203F";
const colorCodeActive = "#09276A";

const Navbar = ({ navs }: NavData) => {
  const location = useLocation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={colorCodeInActive} px={4}>
      <Flex direction={isMobile ? "column" : "row"} align="center" wrap="wrap">
        {/* Logo */}
        <Flex
          justifyContent={isMobile ? "center" : "flex-start"}
          width={isMobile ? "100%" : "auto"}
        >
          <Link to="/">
            <Image p={2} src="/react.svg" boxSize="80px" alt="Logo" />
          </Link>
        </Flex>
        {/* Menu */}
        <Spacer />
        <Flex
          justifyContent={isMobile ? "center" : "flex-end"}
          alignItems={"center"}
          direction="row"
          wrap="nowrap"
          width={isMobile ? "100%" : "auto"}
        >
          {navs.map((nav: NavItems) => (
            <div key={nav.menuName}>
              <Link to={nav.navLink}>
                <Box
                  as="button"
                  color="white"
                  fontSize="xl"
                  w="100%"
                  bg={
                    location.pathname === nav.navLink
                      ? colorCodeActive
                      : colorCodeInActive
                  }
                  ml={isMobile ? 0 : 10}
                  h="100%"
                  p={4}
                >
                  {nav.menuName}
                </Box>
              </Link>
            </div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
