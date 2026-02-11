console.log("organisms.js loaded");

// Imports for header
import {} from "./atoms.js";
import { Logo, H1, BurgerMenu } from "./molecules.js";
// Imports for main
import {} from "./atoms.js";
import { FormGroup } from "./molecules.js";
// Imports for footer
import {} from "./atoms.js";
import {} from "./molecules.js";

// header

export function Header({ onBurgerClick }) {
  const elm = document.createElement("header");
  elm.classList.add("app-header"); // Change this to an argument for header atom

  const logo = Logo();
  const h1 = H1();
  const burgerMenu = BurgerMenu({ onClick: onBurgerClick });

  elm.append(logo, h1, burgerMenu);
  return elm;
}

// main
export function Main() {
  const elm = document.createElement("main");
  const toDoGroup = FormGroup();
  elm.append(toDoGroup);
  return elm;
}

// footer

export function Footer() {
  const elm = document.createElement("footer");
  // elm.append();
  return elm;
}
