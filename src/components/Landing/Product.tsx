import NextLink from "next/link";
import { formatPrice } from "@/utils";
import { ProductProps } from "@/@types/product";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

interface IProductProps {
  product: ProductProps;
}

export function Product({ product }: IProductProps) {
  return (
    <Box
      boxShadow="0 1px 1px rgba(0,0,0,0.03), 0 2px 2px rgba(0,0,0,0.03), 0 4px 4px rgba(0,0,0,0.03), 0 8px 8px rgba(0,0,0,0.03), 0 2px 2px rgba(0,0,0,0.03)"
      borderRadius="2px"
      p={4}
      maxW="220px"
      minW="200px"
      w="100%"
      h="200px"
    >
      <Image src={product.img} alt={`candle ${product.name}`} />
      <Flex align="center" justify="space-between">
        <NextLink href={`/product/${product.id}`} passHref>
          <Link>
            <Text as="h1" fontFamily="Poppins" fontWeight="500">
              {product.name}
            </Text>
          </Link>
        </NextLink>

        <Text
          color="#56B280"
          fontSize="xl"
          fontFamily="Roboto"
          fontWeight="medium"
        >
          {formatPrice(product.price)}
        </Text>
      </Flex>
    </Box>
  );
}
