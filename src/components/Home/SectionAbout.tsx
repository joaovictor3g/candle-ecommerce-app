import {
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  List,
  ListItem,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GreenButton } from "@/components/layout";
import { AiOutlineCheckCircle } from "react-icons/ai";

export function SectionAbout() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      maxW="1120px"
      m="0 auto"
      p="4"
      align="center"
      justify="space-between"
      flexWrap="wrap"
      justifyContent="center"
    >
      <VStack align="flex-start" spacing="28px">
        <Box>
          <Heading
            fontFamily="Poppins"
            fontWeight="medium"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Clean and <br />
            fragrant soy wax
          </Heading>

          <Text color="#56B280" fontFamily="Poppins">
            Made for your home and for your wellness
          </Text>
        </Box>

        <List fontFamily="Poppins">
          <ListItem alignItems="center" display="flex" gap="5px">
            <Icon as={AiOutlineCheckCircle} />
            <Text as="strong" fontWeight="500">
              Eco-sustainable:
            </Text>
            All recyclable materials, 0% CO2 emissions
          </ListItem>
          <ListItem alignItems="center" display="flex" gap="5px">
            <Icon as={AiOutlineCheckCircle} />
            <Text as="strong" fontWeight="500">
              Hyphoallergenic:
            </Text>{" "}
            100% natural, human friendly ingredients{" "}
          </ListItem>
          <ListItem alignItems="center" display="flex" gap="5px">
            <Icon as={AiOutlineCheckCircle} />
            <Text as="strong" fontWeight="500">
              Handmade:
            </Text>{" "}
            All candles are craftly made with love.{" "}
          </ListItem>
          <ListItem alignItems="center" display="flex" gap="5px">
            <Icon as={AiOutlineCheckCircle} />
            <Text as="strong" fontWeight="500">
              Long burning:
            </Text>{" "}
            No more waste. Created for last long.{" "}
          </ListItem>
        </List>

        <GreenButton text="Learn more" />
      </VStack>

      {isWideVersion && (
        <Box>
          <Image src="/section-about.png" alt="About the candles" />
        </Box>
      )}
    </Flex>
  );
}
