console.log("molecules.js loaded");

import {
  ImgElm,
  HeadingElm,
  DivElm,
  ButtonElm,
  SvgElm,
  PathElm,
} from "./atoms.js"; // For header
import { FormElm, LabelElm, InputElm } from "./atoms.js"; // For main
import {} from "./atoms.js"; // For footer

// For header
export const Logo = () => {
  const elm = DivElm({ className: "logo-wrapper" });

  const img = ImgElm("./assets/images/logo-placeholder.png", "Logo", {
    className: "logo",
  });

  elm.appendChild(img);
  return elm;
};

export const H1 = () => {
  const elm = HeadingElm("To-Do App", 1);
  return elm;
};

export const BurgerMenu = ({ onClick }) => {
  const elm = ButtonElm({ className: "burger-menu", onClick });
  const svg = SvgElm(24, 24, "0 0 24 24");
  const topLinePath = PathElm("M3 6h18");
  const middleLinePath = PathElm("M3 12h18");
  const bottomLinePath = PathElm("M3 18h18");

  svg.append(topLinePath, middleLinePath, bottomLinePath);
  elm.appendChild(svg);

  return elm;
};

// For main
export const FormGroup = () => {
  const elm = FormElm("GET");

  const label = LabelElm("To-Do Item", "todo-input");
  const input = InputElm("text", "todo-input", {
    placeholder: "Enter a to-do item",
  });

  elm.append(label, input);
  return elm;
};

// For footer
