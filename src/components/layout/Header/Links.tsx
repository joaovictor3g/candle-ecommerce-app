import { HStack, Link } from "@chakra-ui/react";

const links = [
  { key: 1, name: "Discovery", href: "/discovery" },
  { key: 2, name: "About", href: "/about" },
  { key: 3, name: "Contact Us", href: "/contact" },
];

export function Links() {
  return (
    <HStack spacing="15px">
      {links.map((link) => (
        <Link key={link.key} href={link.href}>
          <a>{link.name}</a>
        </Link>
      ))}
    </HStack>
  );
}
