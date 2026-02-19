import mercuryImage from "../assets/f3f9be8b44b375279d46ec9636dbb5bf452c1f26.png";
import venusImage from "../assets/fceda84f6f198bf1c92219ecfeb8368b78a0b75d.png";
import earthImage from "../assets/942b2037c77a316007ead68fcc5a4d56cc4c9224.png";
import marsImage from "../assets/c7085c82343d5b7978f0e2a7a83e08c7e01edcb3.png";
import jupiterImage from "../assets/5747cc99dad0058a8951bfb4e652b29386a1a9aa.png";
import saturnImage from "../assets/278a1e720a4d5881f8b53c882a4e52357bade5b9.png";
import uranusImage from "../assets/ef9d4bf287e751ea2bea5d77c890883e00be24a4.png";
import neptuneImage from "../assets/c7085c82343d5b7978f0e2a7a83e08c7e01edcb3.png";

export interface PlanetData {
  id: string;
  name: string;
  description: string;
  diameter: string;
  dayLength: string;
  temperature: string;
  climate: string;
  distance: string; // Distance from Sun
  image: string;
  color: string;
  orbitRadius: number; // Relative radius for orbit visualization
  orbitSpeed: number; // Seconds for full orbit
}

export const PLANETS: PlanetData[] = [
  {
    id: "mercury",
    name: "Mercúrio",
    description:
      "O menor planeta do Sistema Solar e o mais próximo do Sol. É apenas um pouco maior que a Lua da Terra.",
    diameter: "4.880 km",
    dayLength: "1.408 horas",
    temperature: "-180°C a 430°C",
    climate: "Atmosfera Tênue (Exosfera)",
    distance: "58 milhões km",
    image: mercuryImage,
    color: "#A5A5A5",
    orbitRadius: 120,
    orbitSpeed: 20,
  },
  {
    id: "venus",
    name: "Vênus",
    description:
      "O segundo planeta do Sol e o vizinho planetário mais próximo da Terra. É um dos quatro planetas terrestres internos.",
    diameter: "12.104 km",
    dayLength: "5.832 horas",
    temperature: "471°C",
    climate: "Efeito Estufa Extremo",
    distance: "108 milhões km",
    image: venusImage,
    color: "#E3BB76",
    orbitRadius: 160,
    orbitSpeed: 30,
  },
  {
    id: "earth",
    name: "Terra",
    description:
      "Nosso planeta natal é o terceiro a partir do Sol e o único lugar que conhecemos até agora que é habitado por seres vivos.",
    diameter: "12.742 km",
    dayLength: "24 horas",
    temperature: "-88°C a 58°C",
    climate: "Temperado e Habitável",
    distance: "149.6 milhões km",
    image: earthImage,
    color: "#4F97FF",
    orbitRadius: 210,
    orbitSpeed: 40,
  },
  {
    id: "mars",
    name: "Marte",
    description:
      "Um mundo empoeirado, frio e desértico com uma atmosfera muito fina. Há fortes evidências de que Marte foi - bilhões de anos atrás - mais úmido e quente.",
    diameter: "6.779 km",
    dayLength: "24,6 horas",
    temperature: "-153°C a 20°C",
    climate: "Desértico e Polar",
    distance: "227.9 milhões km",
    image: marsImage,
    color: "#FF6B4A",
    orbitRadius: 260,
    orbitSpeed: 50,
  },
  {
    id: "jupiter",
    name: "Júpiter",
    description:
      "O maior planeta do Sistema Solar. Seus listras e redemoinhos distintos são, na verdade, nuvens frias e ventosas de amônia e água.",
    diameter: "139.820 km",
    dayLength: "10 horas",
    temperature: "-110°C",
    climate: "Gigante Gasoso (Tempestuoso)",
    distance: "778.5 milhões km",
    image: jupiterImage,
    color: "#D9A066",
    orbitRadius: 340,
    orbitSpeed: 70,
  },
  {
    id: "saturn",
    name: "Saturno",
    description:
      "Adornado com um sistema deslumbrante e complexo de anéis gelados, Saturno é único em nosso sistema solar.",
    diameter: "116.460 km",
    dayLength: "10,7 horas",
    temperature: "-140°C",
    climate: "Gigante Gasoso com Anéis",
    distance: "1.4 bilhões km",
    image: saturnImage,
    color: "#EAD6B8",
    orbitRadius: 420,
    orbitSpeed: 90,
  },
  {
    id: "uranus",
    name: "Urano",
    description:
      "O primeiro planeta encontrado com a ajuda de um telescópio. Tem 13 anéis conhecidos e orbita o Sol de lado.",
    diameter: "50.724 km",
    dayLength: "17 horas",
    temperature: "-195°C",
    climate: "Gigante de Gelo",
    distance: "2.9 bilhões km",
    image: uranusImage,
    color: "#93B8BE",
    orbitRadius: 500,
    orbitSpeed: 110,
  },
  {
    id: "neptune",
    name: "Netuno",
    description:
      "Escuro, frio e açoitado por ventos supersônicos, o gigante de gelo Netuno é o oitavo e mais distante planeta do nosso sistema solar.",
    diameter: "49.244 km",
    dayLength: "16 horas",
    temperature: "-200°C",
    climate: "Gigante de Gelo e Ventoso",
    distance: "4.5 bilhões km",
    image: neptuneImage,
    color: "#4B70DD",
    orbitRadius: 580,
    orbitSpeed: 130,
  },
];
