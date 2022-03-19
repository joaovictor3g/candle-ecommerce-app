import { ProductProps } from "@/@types/product";
import { Wrapper, SectionTitle, SectionSubtitle } from "@/layout";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Product } from "../Product";

interface SectionProductsProps {
  products: ProductProps[];
}

export function SectionProducts({ products }: SectionProductsProps) {
  return (
    <Wrapper>
      <Box display="flex" flexDir="column" alignItems="center" w="100%">
        <SectionTitle>Products</SectionTitle>
        <SectionSubtitle>
          Order it for you or for your beloved ones
        </SectionSubtitle>

        <SimpleGrid
          mt="60px"
          spacing={8}
          minChildWidth="200px"
          w="100%"
          placeItems="center"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Wrapper>
  );
}
