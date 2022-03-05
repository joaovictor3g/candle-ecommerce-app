import { SectionSubtitle } from "@/components/layout/SectionSubtitle";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Quote } from "./Quote";

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
          <SectionTitle>Testimonials</SectionTitle>

          <SectionSubtitle>
            Some quotes from our happy customers
          </SectionSubtitle>
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
