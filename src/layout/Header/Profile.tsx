import { Icon, Link } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";

export function Profile() {
  return (
    <Link href="/profile">
      <Icon aria-label="Perfil" as={BsPerson} w={6} h={6} />
    </Link>
  );
}
