console.log("molecules.js loaded");

import {} from "./atoms.js"; // For header
import { FormElm, LabelElm, InputElm } from "./atoms.js"; // For main
import {} from "./atoms.js"; // For footer

// For header

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
