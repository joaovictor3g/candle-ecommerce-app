import { Avatar, Box, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import { StarIcon } from "./StarIcon";

export function Quote() {
  return (
    <VStack
      bg="#FFFFFF"
      p="6"
      align="center"
      spacing={6}
      borderRadius="6px"
      boxShadow="0px 4px 24px rgba(139, 167, 178, 0.16)"
    >
      <Avatar name="João Victor" size="lg" />
      <HStack>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Icon key={i} as={StarIcon} w={6} h={6} color="#56B280" />
          ))}
      </HStack>

      <Box as="blockquote" textAlign="center" fontFamily="Poppins">
        <Text as="p" fontWeight="500" fontSize="xl">
          “I love it! No more air fresheners”
        </Text>

        <Text as="span" color="#7C8087">
          João Victor
        </Text>
      </Box>
    </VStack>
  );
}
