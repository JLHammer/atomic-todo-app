console.log("organisms.js loaded");

import {
  HeaderElm,
  MainElm,
  FormElm,
  FieldsetElm,
  LegendElm,
  FooterElm,
  HeadingElm,
  SpanElm,
} from "./atoms.js";
import { Logo, H1, BurgerMenu, ToDoItem } from "./molecules.js";

// header
export function Header() {
  const elm = HeaderElm({ className: "app-header" });

  const logo = Logo();
  const h1 = H1();
  const burgerMenu = BurgerMenu({ onClick: toggleBurgerMenu });

  elm.append(logo, h1, burgerMenu);
  return elm;
}

// For main - form group
const FormGroup = (legendTitle) => {
  const elm = FormElm("GET", { id: "todo-form" });
  const fieldset = FieldsetElm();
  const legend = LegendElm(legendTitle);
  const toDoItem = ToDoItem(OnDeleteButton, OnOrderButton);
  // Delete the additional todo items below later:
  const toDoItem2 = ToDoItem(OnDeleteButton, OnOrderButton);
  const toDoItem3 = ToDoItem(OnDeleteButton, OnOrderButton);

  fieldset.append(legend, toDoItem, toDoItem2, toDoItem3); //Remember to remove extra to-do items later
  elm.appendChild(fieldset);
  return elm;
};

// main
export function Main(ToDoListName, legendTitleToDO, legendTitleCompleted) {
  const elm = MainElm({ className: "app-main" });
  const h2 = HeadingElm(ToDoListName, 2, { className: "main-title" });
  const formGroupToDo = FormGroup(legendTitleToDO);
  const formGroupCompleted = FormGroup(legendTitleCompleted);
  elm.append(h2, formGroupToDo, formGroupCompleted);
  return elm;
}

// footer
export function Footer() {
  const elm = FooterElm({ className: "app-footer" });
  const spanEducation = SpanElm("Web Developer");
  const spanName = SpanElm("Jens L. Hammer");
  const spanSchool = SpanElm("Tech College");
  elm.append(spanEducation, spanName, spanSchool);
  return elm;
}

// Functions
function toggleBurgerMenu() {
  // Placeholder for burger menu toggle functionality
  console.log("Burger menu toggled");
}

function OnDeleteButton() {
  // Placeholder for delete button functionality. Should receive id to know which item to delete
  console.log("Delete button clicked");
}

function OnOrderButton() {
  // Placeholder for order button functionality. Should receive id to know which item to move and where to move it
  console.log("Order button clicked");
}
