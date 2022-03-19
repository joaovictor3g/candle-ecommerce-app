import { ProductProps } from "@/@types/product";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import { Wrapper, SectionTitle, SectionSubtitle } from "@/layout";
import { Product } from "./Product";

interface SectionMostSoldProps {
  products: ProductProps[];
}

export function SectionMostSold({ products }: SectionMostSoldProps) {
  return (
    <Wrapper px="4" py="24">
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
          <Product key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Wrapper>
  );
}
