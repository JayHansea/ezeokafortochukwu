import MIT from "../img/mit.png";
import ReactTablist from "../img/ptlReact.png";
import isomorphicString from "../img/isomorphicString.png";
import NonRepeat from "../img/NonRepeat.png";
import scaleBalancing from "../img/scaleBalancing.png";
import DiceGame from "../img/diceGame.png";
import RCCGPage from "../img/rccgpage.png";
import Github from "../img/Github.png";
import ShoppingCart from "../img/shoppingCart.png";

export const projectList = [
  {
    id: 1,
    technology: "(HTML | CSS | Bootstrap)",
    projectName: "McAnderson Institute of Technology",
    description: "A website built for the McAnderson Institute of Technology",
    image: `${MIT}`,
    link: "https://mcandersoninstitute.tech/",
  },
  {
    id: 2,
    technology: "(React)",
    projectName: "Profile Tablist",
    description:
      "Profile tablist is showing in tablet form, profile information consumed from an API",
    image: `${ReactTablist}`,
    link: "https://reacttablist.herokuapp.com/",
  },
  {
    id: 3,
    technology: "(React)",
    projectName: "Shopping Cart Emulator",
    description:
      "Shopping Cart Emulator is a personal project which emulates how shopping carts work in real time",
    image: `${ShoppingCart}`,
    link: "https://shopping-cart-emulator.herokuapp.com/",
  },
  {
    id: 4,
    technology: "(Javascript)",
    projectName: "Isomorphic Strings",
    description:
      "An app that checks two strings, to determine if they are isomorphic.",
    image: `${isomorphicString}`,
    link: "https://codepen.io/Ezetochukwu/full/PvROLN",
  },
  {
    id: 5,
    technology: "(Javascript)",
    projectName: "Non-repeating Character",
    description:
      "Non-repeating character app is an app that takes a string, and return the first non-repeating character",
    image: `${NonRepeat}`,
    link: "https://codepen.io/tochukwujay/full/rQaVYW",
  },
  {
    id: 6,
    technology: "(Javascript)",
    projectName: "Scale Balancer",
    description: "click 'GOTO PAGE' button to view the page on codepen",
    image: `${scaleBalancing}`,
    link: "https://codepen.io/Ezetochukwu/full/xeMmwj",
  },
  {
    id: 7,
    technology: "(Javascript)",
    projectName: "Dice Game",
    description: "click 'GOTO PAGE' button to play this dice game",
    image: `${DiceGame}`,
    link: "https://gracious-aryabhata-12fd63.netlify.app/",
  },
  {
    id: 8,
    technology: "(HTML | CSS | Bootstrap)",
    projectName: "Website template",
    description:
      "A template website, showing integration of live facebook and twitter feeds also showing live integration of youtube videos.",
    image: `${RCCGPage}`,
    link: "https://jayhansea.github.io/",
  },
  {
    id: 9,
    technology: "",
    projectName: "Github page",
    description:
      "Check out my github page to see other works that I've done or works that I'm currently working on",
    image: `${Github}`,
    link: "https://github.com/JayHansea",
  },
];
