import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface GreenButtonProps extends ButtonProps {
  text: string;
}

export function GreenButton({ text, ...rest }: GreenButtonProps) {
  return (
    <ChakraButton type="button" bg="#56B280" color="#FFFFFF" {...rest}>
      {text}
    </ChakraButton>
  );
}
