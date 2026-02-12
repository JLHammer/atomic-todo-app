console.log("molecules.js loaded");

import {
  ImgElm,
  HeadingElm,
  DivElm,
  ButtonElm,
  SvgElm,
  PathElm,
  FormElm,
  FieldsetElm,
  LegendElm,
  LabelElm,
  InputElm,
} from "./atoms.js";

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
  const elm = ButtonElm({
    className: "burger-menu",
    eventType: "click",
    onEvent: onClick,
  });
  const svg = SvgElm(24, 24, "0 0 24 24");
  const topLinePath = PathElm("M3 6h18");
  const middleLinePath = PathElm("M3 12h18");
  const bottomLinePath = PathElm("M3 18h18");

  svg.append(topLinePath, middleLinePath, bottomLinePath);
  elm.appendChild(svg);

  return elm;
};

// For main
export const FormGroup = (onClickDeleteBtn, onClickOrderBtn) => {
  const elm = FormElm("GET", { id: "todo-form" });

  const div = DivElm({ className: "todo-group" });
  const fieldset = FieldsetElm();
  const legend = LegendElm("To-Do");
  const label = LabelElm("To-Do Item", "todo-checkbox");
  const inputCheckBox = InputElm("checkbox", "todo-checkbox", {
    className: "todo-checkbox",
  });
  const inputActive = InputElm("checkbox", "todo-active", {
    className: "active-checkbox",
  });
  const deleteButton = ButtonElm({
    textContent: "x",
    className: "delete-button",
    eventType: "click",
    onEvent: onClickDeleteBtn,
  });
  const orderButton = ButtonElm({
    textContent: "☰",
    className: "order-button",
    eventType: "click",
    onEvent: onClickOrderBtn,
  });

  div.append(inputCheckBox, label, inputActive, deleteButton, orderButton);
  fieldset.append(legend, div);
  elm.appendChild(fieldset);
  return elm;
};

// For footer
