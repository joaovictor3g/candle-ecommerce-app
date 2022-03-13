import { Icon, Link } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

export function Cart() {
  return (
    <Link href="/cart">
      <Icon aria-label="Carrinho" as={BsCart3} w={6} h={6} />
    </Link>
  );
}
