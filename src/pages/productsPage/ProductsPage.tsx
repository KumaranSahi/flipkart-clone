import { Box } from "@chakra-ui/react";
import { ProductItem } from "../../components";
import products from "../../data/products.json";
import { UnorderedList, ListItem } from "@chakra-ui/react";

export const ProductsaPage = () => {
  return (
    <Box>
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
  );
};
