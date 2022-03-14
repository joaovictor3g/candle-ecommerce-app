import { ProductProps } from "@/@types/product";
import {
  SectionImage,
  SectionAbout,
  SectionProducts,
  SectionTestimonials,
  SectionMostSold,
} from "@/components/Landing";
import { Section } from "@/layout";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface LandingProps {
  products: ProductProps[];
  mostSoldProducts: ProductProps[];
}

const Landing: NextPage<LandingProps> = ({ products, mostSoldProducts }) => {
  return (
    <>
      <Head>
        <title>Candle App | Início</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Section>
        <SectionImage />
        <SectionProducts products={products} />
        <SectionAbout />
        <SectionTestimonials />
        <SectionMostSold products={mostSoldProducts} />
      </Section>
    </>
  );
};

export default Landing;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<ProductProps[]>(
    "http://localhost:3333/products"
  );
  const products = response.data;
  const mostSoldProducts = products.slice(0, 4);

  return {
    props: {
      products: products,
      mostSoldProducts,
    },
  };
};