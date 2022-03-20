import { CartProps } from "./cart";
import { StockProps } from "./stock";

export type ProductProps = {
  name: string;
  price: number;
  id: number;
  img: string;
  stock?: StockProps;
  cart?: CartProps;
};
