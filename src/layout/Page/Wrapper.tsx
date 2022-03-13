import { Stack, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps extends StackProps {
  children: ReactNode;
}

export function Wrapper({ children, ...rest }: WrapperProps) {
  return (
    <Stack maxW="1120px" p="4" margin="0 auto" {...rest}>
      {children}
    </Stack>
  );
}
