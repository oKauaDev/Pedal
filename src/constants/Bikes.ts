import { Bike } from "../types/Bikes";
import darkbike from "../assets/images/mikkel-bech-yjAFnkLtKY0-unsplash.jpg";
import oceanicer from "../assets/images/robert-bye-tG36rvCeqng-unsplash.jpg";
import starking from "../assets/images/alonso-talbert-s6DiDMLK0jk-unsplash.jpg";

export const bikes: Bike[] = [
  {
    name: "Dark Bike",
    description:
      "A Dark Bike é uma bicicleta projetada para produtividade e velocidade. Ideal para pedalar em alta velocidade em superfícies asfaltadas, mantendo o ritmo e o equilíbrio. Perfeita tanto para longas distâncias quanto para ciclismo em geral.",
    skills: [
      "Feita para asfaltos.",
      "Ciclismo e viagens longas.",
      "Contem 21 marchas.",
    ],
    estoque: 28,
    preco: 20,
    image: darkbike,
    id: "darkbike",
    tec: {
      peso: "12kg",
      altura: "80cm",
      comprimento: "2m",
      marchas: 21,
      roda: 29,
    },
  },
  {
    name: "Oceanicer",
    description:
      "A Oceanicer é uma bicicleta feita para os que gostas de dar uma pedalada no asfalto durante a manhã ou tarde. Possui suspensão dianteira e traseira para absorver impactos, proporcionando uma experiência de ciclismo suave e confortável.",
    skills: [
      "Ideal para trilhas e terrenos acidentados.",
      "Suspensão dianteira e traseira.",
      "Bicicleta single",
    ],
    estoque: 12,
    preco: 25,
    image: oceanicer,
    id: "oceanicer",
    tec: {
      peso: "15kg",
      altura: "85cm",
      comprimento: "2.1m",
      marchas: 0,
      roda: 26,
    },
  },
  {
    name: "Starking",
    description:
      "A Starking é uma bicicleta de estilo urbano e elegante, perfeita para deslocamentos diários pela cidade. Possui design moderno e confortável, com guidão ajustável e assento acolchoado. Ideal para pedalar em ruas pavimentadas.",
    skills: [
      "Feita para deslocamentos urbanos.",
      "Design moderno e confortável.",
      "Bicicleta single.",
    ],
    estoque: 20,
    preco: 18,
    image: starking,
    id: "starking",
    tec: {
      peso: "10kg",
      altura: "75cm",
      comprimento: "1.8m",
      marchas: 0,
      roda: 28,
    },
  },
];
