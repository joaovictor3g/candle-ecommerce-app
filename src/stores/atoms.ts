import { ProductProps } from "@/@types/product";
import { atom } from "recoil";

export const quantityState = atom({
  key: "quantityState",
  default: 0,
});
