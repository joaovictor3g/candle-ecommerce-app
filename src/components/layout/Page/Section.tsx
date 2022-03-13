import { Stack, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps extends StackProps {
  children: ReactNode;
}

export function Section({ children, ...rest }: SectionProps) {
  return (
    <Stack spacing="50px" {...rest}>
      {children}
    </Stack>
  );
}
