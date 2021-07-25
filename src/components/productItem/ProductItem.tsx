import { ProductItemType } from "../../reducer/product.types";
import {
  VStack,
  Image,
  Text,
  Tag,
  Avatar,
  TagLabel,
  HStack,
  Select,
} from "@chakra-ui/react";
import logo from "../../data/images/Logo with background.png";

export const ProductItem = ({
  brand,
  fastDelivery,
  image,
  price,
  title,
  size,
}: ProductItemType) => {
  return (
    <VStack alignItems="flex-start" width="20rem" height="30rem" padding="2">
      <Image src={image} width="100%" height="75%" />
      <HStack justifyContent="space-between">
        <Text color="teal" fontWeight="bold">
          {brand}
        </Text>
        {fastDelivery && (
          <Tag size="lg" colorScheme="teal" borderRadius="full">
            <Avatar src={logo} size="xs" name="Fast Delivery" ml={-1} mr={2} />
            <TagLabel>Fast Delivery</TagLabel>
          </Tag>
        )}
      </HStack>
      <Text>{title.slice(0, 20)}...</Text>
      <HStack justifyContent="space-between" width="100%">
        <Text
          color="teal"
          fontWeight="bold"
          fontSize="xl"
          flex="4"
          textAlign="left"
        >
          Rs. {price}
        </Text>
        <Select placeholder="Size" flex="1.5">
          {size.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </Select>
      </HStack>
    </VStack>
  );
};
