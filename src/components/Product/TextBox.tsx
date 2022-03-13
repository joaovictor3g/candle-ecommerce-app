import { Box, HStack, Text } from "@chakra-ui/react";

export function TextBox() {
  return (
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
  );
}
