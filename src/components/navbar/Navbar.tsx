import {
  Heading,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      justifyContent="space-between"
      boxShadow="dark-lg"
      position="fixed"
      zIndex="banner"
      padding="2"
      width="100%"
      height="4rem"
      top="0%"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Heading color="teal">Flipkart</Heading>
      <Button onClick={toggleColorMode} borderRadius="full">
        {colorMode === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </Button>
    </HStack>
  );
};
