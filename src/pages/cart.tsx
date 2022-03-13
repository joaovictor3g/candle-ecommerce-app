import { ProductProps } from "@/@types/product";
import { Section, Wrapper } from "@/layout";
import { quantityState } from "@/stores/atoms";
import { formatPrice } from "@/utils";
import {
  Flex,
  Heading,
  Input,
  Link,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface ProductPropsWithQuantity extends ProductProps {
  quantity: number;
}

export default function Cart() {
  const [productsInStorage, setProductsInStorage] = useState<
    ProductPropsWithQuantity[]
  >([]);

  const [quantity, setQuantity] = useRecoilState(quantityState);

  useEffect(() => {
    setProductsInStorage(
      JSON.parse(localStorage.getItem("@candleapp:cart") || "[]")
    );
  }, []);

  return (
    <Section>
      <Wrapper mt="90px">
        <VStack>
          <Heading fontFamily="Poppins" fontWeight="500">
            Your cart items
          </Heading>

          <NextLink href="/" passHref>
            <Link fontFamily="Poppins" textDecor="underline" color="#56B280">
              Back to shopping
            </Link>
          </NextLink>
        </VStack>

        {productsInStorage.length > 0 ? (
          <Table mt="90px">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {productsInStorage.map((product) => (
                <Tr key={product.key}>
                  <Td>
                    <Flex align="center">
                      <Image src={product.img} alt={`candle ${product.name}`} />

                      <VStack
                        spacing="10px"
                        align="flex-start"
                        fontFamily="Poppins"
                      >
                        <Heading>{product.name}</Heading>

                        <Button
                          type="button"
                          variant="unstyled"
                          textDecor="underline"
                          color="#56B280"
                        >
                          Remove
                        </Button>
                      </VStack>
                    </Flex>
                  </Td>
                  <Td fontWeight="bold">{formatPrice(product.price)}</Td>
                  <Td>
                    <Input
                      type="number"
                      minW="150px"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                  </Td>
                  <Td>
                    <Text fontWeight="bold">
                      {/* {formatPrice(product.quantity * product.price)} */}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Flex mt="26vh" align="center" justify="center">
            <Text>Não há produtos no carrinho</Text>
          </Flex>
        )}
      </Wrapper>
    </Section>
  );
}
