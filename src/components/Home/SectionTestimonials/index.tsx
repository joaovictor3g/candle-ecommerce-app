import { Wrapper, SectionSubtitle, SectionTitle } from "@/layout";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Quote } from "./Quote";

export function SectionTestimonials() {
  return (
    <Box bg="rgba(86, 178, 128, 0.1)">
      <Wrapper
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

        <SimpleGrid minChildWidth="200px" spacing={10} w="100%">
          <Quote />
          <Quote />
          <Quote />
        </SimpleGrid>
      </Wrapper>
    </Box>
  );
}
