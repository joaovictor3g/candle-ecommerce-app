import { Box, Divider, Image, Text } from "@chakra-ui/react";

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
    >
      <Box maxW="1120px" p="4" m="0 auto">
        <Divider orientation="horizontal" />

        <Box textAlign="left">
          <Image src="/footer.png" alt="Footer Logo" />

          <Text as="p" fontFamily="Poppins" fontWeight="normal">
            Your natural candle made for <br /> your home and for your wellness.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
