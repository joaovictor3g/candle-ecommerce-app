import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Cart } from "./Cart";
import { Links } from "./Links";
import { Profile } from "./Profile";

export function Header() {
  return (
    <Flex
      as="header"
      maxW="1120px"
      m="0 auto"
      p={4}
      align="center"
      justify="space-between"
    >
      <HStack align="center" spacing="10px">
        <Image src="/icon.svg" alt="Candle App" />
        <Text as="strong" color="#56B280" fontSize="xl" fontWeight="bold">
          Candleaf
        </Text>
      </HStack>

      <Links />

      <HStack align="center" spacing="10px">
        <Profile />
        <Cart />
      </HStack>
    </Flex>
  );
}
