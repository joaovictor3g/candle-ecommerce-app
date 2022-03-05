import { Text } from "@chakra-ui/react";

interface SectionSubtitleProps {
  children: React.ReactNode;
}

export function SectionSubtitle({ children }: SectionSubtitleProps) {
  return (
    <Text as="span" textAlign="center" color="#5E6E89" fontFamily="Poppins">
      {children}
    </Text>
  );
}
