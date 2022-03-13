import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { GreenButton, Page } from "@/components/layout";

export function SectionImage() {
  return (
    <Box
      as="section"
      pos="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="700px"
      p={[2, 4]}
    >
      <Image
        src="/bg-image.jpg"
        alt="imagem com plantas"
        w="100%"
        h="700px"
        objectFit="cover"
        pos="absolute"
        left="0"
        top="0"
      />
      <Flex
        maxW="1120px"
        bg="rgba(247, 248, 250, 0.8)"
        backdropFilter="blur(24px)"
        px="8"
        py="12"
        zIndex="1"
        align="center"
        flexDir="column"
        gap="20px"
        borderRadius="2px"
      >
        <VStack spacing="10px">
          <Text fontSize="40px">🌱</Text>
          <Heading color="#000" fontFamily="Poppins" fontWeight="medium">
            The nature candle
          </Heading>

          <Text as="p" fontFamily="Poppins" fontWeight="normal">
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </Text>
        </VStack>
        <GreenButton text="Discovery your collection" />
      </Flex>
    </Box>
  );
}
