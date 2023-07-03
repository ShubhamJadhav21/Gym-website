import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.avif";
import trainer3 from "../assets/trainer3.avif";
import trainer4 from "../assets/trainer4.jpeg";
import trainer5 from "../assets/trainer5.jpeg";
import trainer6 from "../assets/trainer6.jpeg";
const Trainer = [
  { name: "Amitee Loiselle", position: "FITNESS COACH", img: trainer1 },
  { name: "Liam Harpaul", position: "CROSSFIT COACH", img: trainer2 },
  { name: "Mark Anthony", position: "CROSSFIT COACH", img: trainer3 },
  { name: "Ron Richardson", position: "BODY BUILDING ", img: trainer4 },
  { name: "Amitee Loiselle", position: "FITNESS COACH", img: trainer5 },
  { name: "Lorsen mandla", position: "FITNESS COACH", img: trainer6 },
];

const Nav = [
  { name: "GYM", path: "/" },
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Training", path: "/training" },
  { name: "Pricing", path: "/pricing" },
];
const Pricing = [
  {
    name: "Day Pass",
    price: `20/Pass`,
    features: ["1 Day Pass", "Free Gym Access", "24 Hour Access"],
  },
  {
    name: "Month to Month",
    price: `90/month`,
    features: [
      "$99 Joining Fee",
      "No Contact",
      "Free Gym Access",
      "1 Group Class Included",
      "24 Hour Access",
    ],
  },
];

export { Nav, Trainer,Pricing };
