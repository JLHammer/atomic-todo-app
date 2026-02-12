console.log("organisms.js loaded");

import { HeaderElm, MainElm, FooterElm } from "./atoms.js";
import { Logo, H1, BurgerMenu, FormGroup } from "./molecules.js";

// header
export function Header() {
  const elm = HeaderElm({ className: "app-header" });

  const logo = Logo();
  const h1 = H1();
  const burgerMenu = BurgerMenu({ onClick: toggleBurgerMenu() });

  elm.append(logo, h1, burgerMenu);
  return elm;
}

// main
export function Main() {
  const elm = MainElm({ className: "app-main" });
  const toDoGroup = FormGroup(OnDeleteButton, OnOrderButton);
  elm.append(toDoGroup);
  return elm;
}

// footer
export function Footer() {
  const elm = FooterElm({ className: "app-footer" });
  // elm.append();
  return elm;
}

// Functions
function toggleBurgerMenu() {
  // Placeholder for burger menu toggle functionality
  console.log("Menu toggled");
}

function OnDeleteButton() {
  // Placeholder for delete button functionality
  console.log("Delete button clicked");
}

function OnOrderButton() {
  // Placeholder for order button functionality
  console.log("Order button clicked");
}
