import { ProductProps } from "@/@types/product";
import { GreenButton } from "@/components/layout";
import { api } from "@/services";
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

export default function Product() {
  const { query } = useRouter();
  const id = query.id as string;

  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    api
      .get<ProductProps[]>(`/products?key=${id}`)
      .then((response) => setProduct(response.data[0]));
  }, [id]);

  if (!product) return null;

  return (
    <Box maxW="1120px" p="4" m="50px auto">
      <Stack
        direction="row"
        w="100%"
        spacing="6"
        // flexWrap="wrap"
        justify="center"
      >
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
              <Input name="quantity" type="number" min="0" w="100px" />
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
            <GreenButton text="+Add to cart" w="100%" />

            <Box
              display="flex"
              flexDir="column"
              borderRadius="7px"
              border="1px solid #E6E6E6"
              mt="50px"
              p="4"
              fontFamily={"Poppins"}
              fontSize="sm"
              color="#1D252C"
              lineHeight="30px"
            >
              <Text>
                <Text as="strong">Wax: </Text>
                Top grade Soy wax that delivers a smoke less, consistent burn
              </Text>
              <Text>
                <Text as="strong">Fragrance: </Text>
                Premium quality ingredients with natural essential oils
              </Text>
              <HStack>
                <Text>
                  <Text as="strong">Burning Time: </Text>
                  70-75 hours
                </Text>
                <Text>
                  <Text as="strong">Dimension: </Text>
                  10cm x 5cm
                </Text>
                <Text>
                  <Text as="strong">Weight: </Text>
                  400g
                </Text>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
}
