import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps extends BoxProps {
  children: ReactNode;
}

export function Section({ children, ...rest }: SectionProps) {
  return <Box {...rest}>{children}</Box>;
}
