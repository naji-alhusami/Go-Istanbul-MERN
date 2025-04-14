import istanbulImage from "../../Images/istanbul.jpg";
import parisImage from "../../Images/paris.jpg";
import berlinImage from "../../Images/berlin.jpg";
import rioImage from "../../Images/rio.jpg";
import milanImage from "../../Images/milan.jpg";
import brusselImage from "../../Images/brussel.jpg";

type Slide = {
  background: string;
  heading: string;
  subheading: string;
  buttonText: string;
};

export const HomeSlidesData: Slide[] = [
  {
    background: istanbulImage,
    heading: "Explore Istanbul’s Timeless Beauty",
    subheading: "Where East Meets West in Harmony",
    buttonText: "ICONIC PLACES",
  },
  {
    background: parisImage,
    heading: "Wander Through the Romance of Paris",
    subheading: "Let the City of Lights Inspire You",
    buttonText: "ICONIC PLACES",
  },
  {
    background: berlinImage,
    heading: "Feel the Pulse of Berlin",
    subheading: "A City of Culture, History, and Innovation",
    buttonText: "ICONIC PLACES",
  },
  {
    background: rioImage,
    heading: "Experience the Energy of Rio de Janeiro",
    subheading: "Where Nature, Music, and Spirit Unite",
    buttonText: "ICONIC PLACES",
  },
  {
    background: milanImage,
    heading: "Indulge in the Style of Milan",
    subheading: "A Global Hub for Fashion and Art",
    buttonText: "ICONIC PLACES",
  },
  {
    background: brusselImage,
    heading: "Discover the Charm of Brussels",
    subheading: "Where Old-World Elegance Meets Modern Life",
    buttonText: "ICONIC PLACES",
  },
];
