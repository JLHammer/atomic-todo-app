console.log("atoms.js loaded");

// Common namespace for SVG elements
const xmlns = "http://www.w3.org/2000/svg";

// div atom
export const DivElm = ({ id = "", className = "" } = {}) => {
  const elm = document.createElement("div");
  elm.id = id;
  elm.className = className;
  return elm;
};

// h1-6 atom
export const HeadingElm = (
  textContent,
  level,
  { id = "", className = "" } = {},
) => {
  const elm = document.createElement(`h${level}`);
  elm.textContent = textContent;
  elm.id = id;
  elm.className = className;
  return elm;
};

// img atom
export const ImgElm = (src, alt, { id = "", className = "" } = {}) => {
  const elm = document.createElement("img");
  elm.src = src;
  elm.alt = alt;
  elm.id = id;
  elm.className = className;
  return elm;
};

// p atom
export const ParagraphElm = (textContent, { id = "", className = "" } = {}) => {
  const elm = document.createElement("p");
  elm.textContent = textContent;
  elm.id = id;
  elm.className = className;
  return elm;
};

// form atom
export const FormElm = (method = "GET", { id = "", className = "" } = {}) => {
  const elm = document.createElement("form");
  elm.method = method;
  elm.id = id;
  elm.className = className;
  return elm;
};

// label atom
export const LabelElm = (
  textContent,
  htmlFor,
  { id = "", className = "" } = {},
) => {
  const elm = document.createElement("label");
  elm.htmlFor = htmlFor;
  elm.textContent = textContent;
  elm.id = id;
  elm.className = className;
  return elm;
};

// input atom
export const InputElm = (
  type,
  fname = id,
  { placeholder = "", className = "" } = {},
) => {
  const elm = document.createElement("input");
  elm.type = type;
  elm.name = fname;
  elm.id = fname;
  elm.placeholder = placeholder || "";
  elm.className = className;
  return elm;
};

// button atom
export const ButtonElm = ({
  textContent = "",
  onClick = null,
  type = "button",
  id = "",
  className = "",
} = {}) => {
  const elm = document.createElement("button");
  elm.textContent = textContent;
  if (onClick) elm.addEventListener("click", onClick);
  elm.type = type;
  elm.id = id;
  elm.className = className;
  return elm;
};

// ul atom
export const UlElm = ({ id = "", className = "" } = {}) => {
  const elm = document.createElement("ul");
  elm.id = id;
  elm.className = className;
  return elm;
};

// li atom
export const LiElm = (textContent, { id = "", className = "" } = {}) => {
  const elm = document.createElement("li");
  elm.textContent = textContent;
  elm.id = id;
  elm.className = className;
  return elm;
};

// a atom
export const AnchorElm = (
  href,
  textContent,
  { id = "", className = "" } = {},
) => {
  const elm = document.createElement("a");
  elm.href = href;
  elm.textContent = textContent;
  elm.id = id;
  elm.className = className;
  return elm;
};

// svg atom
export const SvgElm = (
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  { id = "", className = "" } = {},
) => {
  const elm = document.createElementNS(xmlns, "svg");
  elm.setAttribute("width", width);
  elm.setAttribute("height", height);
  elm.setAttribute("viewBox", viewBox);
  elm.id = id;
  if (className) elm.setAttribute("class", className);
  return elm;
};

// path atom
export const PathElm = (d, { id = "", className = "" } = {}) => {
  const elm = document.createElementNS(xmlns, "path");
  elm.setAttribute("d", d);
  elm.id = id;
  if (className) elm.setAttribute("class", className);
  return elm;
};
