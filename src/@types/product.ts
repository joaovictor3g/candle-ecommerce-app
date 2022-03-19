import { StockProps } from "./stock";

export type ProductProps = {
  name: string;
  price: number;
  id: number;
  img: string;
  stock?: StockProps;
};
