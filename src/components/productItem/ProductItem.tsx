import { ProductItemType } from "./productItem.types";
import {
  VStack,
  Image,
  Text,
  Tag,
  Avatar,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import logo from "../../data/images/Logo with background.png";

export const ProductItem = ({
  brand,
  fastDelivery,
  image,
  price,
  title,
}: ProductItemType) => {
  return (
    <VStack
      alignItems="flex-start"
      width="20rem"
      height="27rem"
      padding="2"
      shadow="dark-lg"
    >
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
      <Text color="teal" fontWeight="bold" fontSize="xl">
        Rs. {price}
      </Text>
    </VStack>
  );
};
