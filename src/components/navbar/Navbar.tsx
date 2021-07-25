import { Heading, HStack, Button, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" boxShadow="dark-lg" zIndex="banner" padding="2">
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
