import { ProductProps } from "@/@types/product";
import { GreenButton, Section } from "@/components/layout";
import { TextBox } from "@/components/Product";
import { api } from "@/services";
import { quantityState } from "@/stores/atoms";
import { formatPrice } from "@/utils";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Product() {
  const { query } = useRouter();
  const id = query.id as string;

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [quantity, setQuantity] = useRecoilState(quantityState);

  useEffect(() => {
    api
      .get<ProductProps[]>(`/products?key=${id}`)
      .then((response) => setProduct(response.data[0]));
  }, [id]);

  function handleAddToCart(product: ProductProps) {
    const productsInStorage = JSON.parse(
      localStorage.getItem("@candleapp:cart") || "[]"
    );

    const productsWithQuantity = {
      ...product,
      quantity,
    };

    const newProductsInStorage = [...productsInStorage, productsWithQuantity];

    localStorage.setItem(
      "@candleapp:cart",
      JSON.stringify(newProductsInStorage)
    );
  }

  if (!product) return null;

  return (
    <Section>
      <Stack direction="row" w="100%" spacing="6" justify="center">
        <VStack w="50%" align="center" minW="300px">
          <Image
            src={product.img}
            alt={`candle ${product.name}`}
            boxSize="300px"
            objectFit="cover"
          />

          <Box as="article" fontFamily="Poppins" textAlign="center">
            <Text color="#56B280" as="p" fontWeight="medium">
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.{" "}
            </Text>
            <Text color="#56B280" fontWeight="bold">
              🚚 FREE SHIPPING
            </Text>
          </Box>
        </VStack>
        <VStack w="50%" spacing="50px" minW="300px">
          <Heading fontFamily="Poppins" fontWeight="medium">
            {product.name}
          </Heading>

          <Flex justify="space-between" w="100%" align="center">
            <FormControl w="100%">
              <FormLabel htmlFor="quantity">Quantity:</FormLabel>
              <Input
                name="quantity"
                type="number"
                min="0"
                w="100px"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </FormControl>
            <Text
              color="#56B280"
              fontFamily="Poppins"
              fontWeight="bold"
              fontSize="2xl"
            >
              {formatPrice(product.price)}
            </Text>
          </Flex>
          <Box w="100%">
            <GreenButton
              text="+Add to cart"
              w="100%"
              onClick={() => handleAddToCart(product)}
            />

            <TextBox />
          </Box>
        </VStack>
      </Stack>
    </Section>
  );
}
