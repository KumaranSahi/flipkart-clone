import { Box } from "@chakra-ui/react";
import { ProductItem, Filters } from "../../components";
import products from "../../data/products.json";
import {
  UnorderedList,
  ListItem,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";

export const ProductsaPage = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <Box>
      <Box
        display={isLargerThan700 ? "block" : "none"}
        position="fixed"
        width="20rem"
        bg={useColorModeValue("lightgray", "gray.800")}
        height="100vh"
      >
        <Filters />
      </Box>
      <Box marginLeft={isLargerThan700 ? "20rem" : "0"}>
        <UnorderedList
          listStyleType="none"
          display="flex"
          flexWrap="wrap"
          padding="2"
        >
          {products.map((product) => (
            <ListItem key={product.id} margin="1">
              <ProductItem {...product} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};
