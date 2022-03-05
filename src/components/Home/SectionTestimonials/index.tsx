import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Quote } from "./Quote";
import { StarIcon } from "./StarIcon";

export function SectionTestimonials() {
  return (
    <Box bg="rgba(86, 178, 128, 0.1)">
      <VStack
        maxW="1120px"
        px="4"
        py="24"
        m="0 auto"
        w="100%"
        align="center"
        justify="center"
        spacing="28px"
      >
        <Box textAlign="center">
          <Heading fontFamily="Poppins" fontWeight="500">
            Testimonials
          </Heading>

          <Text as="span" color="#5E6E89" fontFamily="Poppins" fontWeight="500">
            Some quotes from our happy customers
          </Text>
        </Box>

        <SimpleGrid columns={3} spacing={10}>
          <Quote />
          <Quote />
          <Quote />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
