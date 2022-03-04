import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles";
import { Header } from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
