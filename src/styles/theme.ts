import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: "xl",
        fontWeight: "500",
      },
    },
  },
});
