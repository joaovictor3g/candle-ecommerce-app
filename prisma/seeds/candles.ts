import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Spiced Mint",
    price: 9.99,
    img: "https://i.ibb.co/7KrQWck/spiced-mint.png",
  },
  {
    name: "Sweet Strawberry",
    price: 9.99,
    img: "https://i.ibb.co/ZLSH9hK/sweet-strawberry.png",
  },
  {
    name: "Cool Bluberries",
    price: 9.99,
    img: "https://i.ibb.co/bNRnnDh/cool-blueberries.png",
  },
  {
    name: "Juicy Lemon",
    price: 9.99,
    img: "https://i.ibb.co/DL7kpHP/juicy-lemon.png",
  },
  {
    name: "Fragant Cinnamon",
    price: 9.99,
    img: "https://i.ibb.co/Nr3wJM3/fragrant-cinnamon.png",
  },
  {
    name: "Summer Cherries",
    price: 9.99,
    img: "https://i.ibb.co/G2BggxB/summer-cherries.png",
  },
  {
    name: "Clean Lavander",
    price: 9.99,
    img: "https://i.ibb.co/MNg18q6/clean-lavander.png",
  },
  {
    name: "Fresh Orange",
    price: 9.99,
    img: "https://i.ibb.co/sPsCdQ7/fresh-orange.png",
  },
];

async function main() {
  console.log("Start seeding...");
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
