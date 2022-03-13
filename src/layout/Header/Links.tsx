import { Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
interface LinksProps {
  dir?: "row" | "column" | "row-reverse" | "column-reverse";
}

const links = [
  { key: 1, name: "Discovery", href: "/discovery" },
  { key: 2, name: "About", href: "/about" },
  { key: 3, name: "Contact Us", href: "/contact" },
];

export function Links({ dir = "row" }: LinksProps) {
  return (
    <Stack spacing="15px" direction={dir}>
      {links.map((link) => (
        <NextLink key={link.key} href={link.href} passHref>
          <Link>{link.name}</Link>
        </NextLink>
      ))}
    </Stack>
  );
}
