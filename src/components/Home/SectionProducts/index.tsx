import { ProductProps } from "@/@types/product";
import { SectionSubtitle } from "@/components/layout/SectionSubtitle";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { VStack, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Product } from "../Product";

interface SectionProductsProps {
  products: ProductProps[];
}

export function SectionProducts({ products }: SectionProductsProps) {
  return (
    <VStack align="center" maxW="1120px" m="90px auto" p="4">
      <Box display="flex" flexDir="column" alignItems="center">
        <SectionTitle>Products</SectionTitle>
        <SectionSubtitle>
          Order it for you or for your beloved ones
        </SectionSubtitle>

        <SimpleGrid mt="60px" columns={4} spacing="10">
          {products.map((product) => (
            <Product key={product.key} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
