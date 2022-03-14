import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";
import Router from "next/router";
import { Cart } from "./Cart";
import { DrawerMenu } from "./DrawerMenu";
import { Links } from "./Links";
import { Profile } from "./Profile";
import { Wrapper } from "..";
import { useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  function handleGoToHome() {
    Router.push("/");
  }

  return (
    <Wrapper
      as="header"
      m="0 auto"
      p={[2, 4]}
      direction="row"
      align="center"
      justify="space-between"
    >
      {!isWideVersion && session && (
        <DrawerMenu>
          <Icon as={RiMenu2Line} w={6} h={6} />
        </DrawerMenu>
      )}
      <Button
        display="flex"
        type="button"
        variant="unstyled"
        alignItems="center"
        onClick={handleGoToHome}
      >
        <Image src="/icon.svg" alt="Candle App" />
        <Text
          as="strong"
          color="#56B280"
          fontSize="xl"
          fontWeight="bold"
          ml="2"
        >
          Candleaf
        </Text>
      </Button>

      {session && isWideVersion && (
        <>
          <Links />
          <HStack align="center" spacing="10px">
            <Profile />
            <Cart />
          </HStack>
        </>
      )}
    </Wrapper>
  );
}
