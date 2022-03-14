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

    Button: {
      transtion: "background-color 0.2s ease-in-out",
      hover: {
        backgroundColor: "green.500",
      },
    },
  },
});
