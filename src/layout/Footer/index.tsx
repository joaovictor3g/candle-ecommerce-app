import { Box, Divider, Image, Text } from "@chakra-ui/react";
import { Wrapper } from "..";

export function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      fontSize="sm"
      fontWeight="semibold"
      textAlign="center"
      py="24"
      flexGrow="2"
    >
      <Wrapper>
        <Divider orientation="horizontal" />

        <Box textAlign="left">
          <Image src="/footer.png" alt="Footer Logo" />

          <Text as="p" fontFamily="Poppins" fontWeight="normal">
            Your natural candle made for <br /> your home and for your wellness.
          </Text>
        </Box>
      </Wrapper>
    </Box>
  );
}
