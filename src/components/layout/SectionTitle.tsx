import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Heading textAlign="center" fontFamily="Poppins" fontWeight="500">
      {children}
    </Heading>
  );
}
