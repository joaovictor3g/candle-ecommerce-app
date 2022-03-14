import { GreenButton, Section, Wrapper } from "@/layout";
import {
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Router from "next/router";
import Head from "next/head";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";

const PROVIDER_ICON_SIZE = 24;

const providers = [
  { id: 1, name: "github", icon: <BsGithub size={PROVIDER_ICON_SIZE} /> },
  // { id: 2, name: "google", icon: <BsGoogle size={PROVIDER_ICON_SIZE} /> },
  // { id: 3, name: "facebook", icon: <BsFacebook size={PROVIDER_ICON_SIZE} /> },
  { id: 4, name: "twitter", icon: <BsTwitter size={PROVIDER_ICON_SIZE} /> },
];

export default function Home() {
  async function handleSignIn(provider: string) {
    try {
      await signIn(provider);
      Router.push("/landing");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Candle App | Login</title>
      </Head>
      <Section>
        <Wrapper align={"center"} spacing="90px">
          <Heading>Login</Heading>

          <VStack maxW="400px" w="100% " spacing="40px">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" placeholder="Email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" placeholder="Password" />

              <GreenButton text="Login" type="submit" w="100%" mt="20px" />
            </FormControl>

            <VStack spacing="20px" w="100%">
              <HStack w="100%" align="center" justify="space-between">
                <Divider flex="1" />
                <Text>or</Text>
                <Divider flex="1" />
              </HStack>

              <HStack justify="space-between" w="100%">
                {providers.map((provider) => (
                  <IconButton
                    key={provider.id}
                    aria-label={`login with ${provider.name}`}
                    icon={provider.icon}
                    size="lg"
                    onClick={() => handleSignIn(provider.name)}
                    w={`${100 / providers.length - 1}%`}
                    title={`login with ${provider.name}`}
                  />
                ))}
              </HStack>
            </VStack>
          </VStack>
        </Wrapper>
      </Section>
    </>
  );
}
