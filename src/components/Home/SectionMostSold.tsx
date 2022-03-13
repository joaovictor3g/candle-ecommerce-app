import { ProductProps } from "@/@types/product";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { Wrapper } from "../layout";
import { SectionSubtitle } from "../layout/SectionSubtitle";
import { SectionTitle } from "../layout/SectionTitle";
import { Product } from "./Product";

interface SectionMostSoldProps {
  products: ProductProps[];
}

export function SectionMostSold({ products }: SectionMostSoldProps) {
  return (
    <Wrapper px="4" py="24" >
      <VStack fontFamily="Poppins" w="100%">
        <SectionTitle>Popular</SectionTitle>
        <SectionSubtitle>Some quotes from our happy customers</SectionSubtitle>
      </VStack>
      <SimpleGrid
        minChildWidth="200px"
        spacing="10"
        w="100%"
        placeItems="center"
      >
        {products.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
}
