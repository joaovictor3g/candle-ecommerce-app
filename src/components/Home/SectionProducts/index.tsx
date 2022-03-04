import { ProductProps } from "@/@types/product";
import { VStack, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Product } from "./Product";

interface SectionProductsProps {
  products: ProductProps[];
}

export function SectionProducts({ products }: SectionProductsProps) {
  return (
    <VStack align="center" mt="90px" p="4">
      <Box display="flex" flexDir="column" alignItems="center">
        <Heading textAlign="center" fontFamily="Poppins" fontWeight="500">
          Products
        </Heading>
        <Text as="span" textAlign="center">
          Order it for you or for your beloved ones
        </Text>

        <SimpleGrid mt="60px" columns={4} spacing="10">
          {products.map((product) => (
            <Product key={product.key} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
