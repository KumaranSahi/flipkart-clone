import {
  Button,
  CheckboxGroup,
  VStack,
  Checkbox,
  Radio,
  RadioGroup,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import products from "../../data/products.json";
import { useProductContext } from "../../reducer/ProductContext";

export const Filters = () => {
  const getBrands = () => {
    const brands = new Set(products.map(({ brand }) => brand));
    return Array.from(brands);
  };

  const { dispatch, sortBy, fastDelivery, idealFor, size, brands } =
    useProductContext();

  return (
    <VStack marginTop="2rem" padding="1" alignItems="flex-start">
      <Button
        color="teal"
        width="100%"
        onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Fast Delivery
        </FormLabel>
        <Switch
          id="email-alerts"
          colorScheme="teal"
          isChecked={fastDelivery}
          onChange={() => dispatch({ type: "TOGGLE_FAST_DELIVERY" })}
        />
      </FormControl>

      <Heading fontSize="xl" color="teal">
        Sort by price
      </Heading>
      <RadioGroup
        value={sortBy}
        
        onChange={(event) =>
          dispatch({
            type: "SORT_BY_PRICE",
            payload: event as "LOW_TO_HIGH" | "HIGH_TO_LOW",
          })
        }
      >
        <HStack justifyContent="space-between" padding="2">
          <Radio value="LOW_TO_HIGH">Low to High</Radio>
          <Radio value="HIGH_TO_LOW">High to Low</Radio>
        </HStack>
      </RadioGroup>
      <Heading fontSize="xl" color="teal">
        Ideal for
      </Heading>
      <RadioGroup
        value={idealFor}
        onChange={(event) =>
          dispatch({
            type: "FILTER_BY_IDEAL_FOR",
            payload: event as "MALE" | "FEMALE",
          })
        }
      >
        <HStack justifyContent="space-between" padding="2">
          <Radio value="MALE">Men</Radio>
          <Radio value="FEMALE">Women</Radio>
        </HStack>
      </RadioGroup>
      <Heading fontSize="xl" color="teal">
        Sizes
      </Heading>
      <CheckboxGroup
        value={size}
        onChange={(event) =>
          dispatch({
            type: "FILTER_BY_SIZE",
            payload: event as string[],
          })
        }
      >
        <Checkbox value="S">S</Checkbox>
        <Checkbox value="M">M</Checkbox>
        <Checkbox value="L">L</Checkbox>
        <Checkbox value="XL">XL</Checkbox>
      </CheckboxGroup>
      <Heading fontSize="xl" color="teal">
        Brands
      </Heading>
      <CheckboxGroup
        value={brands}
        onChange={(event) =>
          dispatch({
            type: "FILTER_BY_BRANDS",
            payload: event as string[],
          })
        }
      >
        {getBrands().map((brand: string) => (
          <Checkbox value={brand} key={brand}>
            {brand}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </VStack>
  );
};
