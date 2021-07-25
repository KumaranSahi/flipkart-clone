import {
  Button,
  CheckboxGroup,
  VStack,
  Checkbox,
  Radio,
  RadioGroup,
  Heading,
  HStack,
} from "@chakra-ui/react";
import products from "../../data/products.json";

export const Filters = () => {
  const getBrands = () => {
    const brands = new Set(products.map(({ brand }) => brand));
    return Array.from(brands);
  };

  return (
    <VStack marginTop="1rem" padding="1" alignItems="flex-start">
      <Button color="teal" width="100%">
        Clear Filters
      </Button>
      <Radio alignSelf="center" colorScheme="teal">
        Fast Delivery
      </Radio>
      <Heading fontSize="xl" color="teal">
        Sort by price
      </Heading>
      <RadioGroup>
        <HStack justifyContent="space-between" padding="2">
          <Radio value="LOW_TO_HIGH">Low to High</Radio>
          <Radio value="HIGH_TO_LOW">High to Low</Radio>
        </HStack>
      </RadioGroup>
      <Heading fontSize="xl" color="teal">
        Ideal for
      </Heading>
      <RadioGroup>
        <HStack justifyContent="space-between" padding="2">
          <Radio value="MALE">Men</Radio>
          <Radio value="FEMALE">Women</Radio>
        </HStack>
      </RadioGroup>
      <Heading fontSize="xl" color="teal">
        Sizes
      </Heading>
      <CheckboxGroup>
        <Checkbox value="S">S</Checkbox>
        <Checkbox value="M">M</Checkbox>
        <Checkbox value="L">L</Checkbox>
        <Checkbox value="XL">XL</Checkbox>
      </CheckboxGroup>
      <Heading fontSize="xl" color="teal">
        Brands
      </Heading>
      <CheckboxGroup>
        {getBrands().map((brand: string) => (
          <Checkbox value={brand}>{brand}</Checkbox>
        ))}
      </CheckboxGroup>
    </VStack>
  );
};
