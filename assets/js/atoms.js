console.log("atoms.js loaded");

// img ATOM
export const createImgElm = (src, alt, id = "", className = "") => {
  const elm = document.createElement("img");
  elm.src = src;
  elm.alt = alt;
  elm.id = id;
  elm.className = className;
  return elm;
};

// div ATOM
export const createHeadingElm = (innerText, level, id = "", className = "") => {
  const elm = document.createElement(`h${level}`);
  elm.textContent = innerText;
  elm.id = id;
  elm.className = className;
  return elm;
};

// p ATOM
export const createParagraphElm = (innerText, id = "", className = "") => {
  const elm = document.createElement("p");
  elm.textContent = innerText;
  elm.id = id;
  elm.className = className;
  return elm;
};

// button ATOM
export const createButtonElm = (innerText, id = "", className = "") => {
  const elm = document.createElement("button");
  elm.textContent = innerText;
  elm.id = id;
  elm.className = className;
  return elm;
};

// form ATOM
export const createFormElm = (method = "GET", id = "", className = "") => {
  const elm = document.createElement("form");
  elm.method = method;
  elm.id = id;
  elm.className = className;
  return elm;
};

// input ATOM
export const createInputElm = (
  type,
  placeholder = "",
  id = "",
  className = "",
) => {
  const elm = document.createElement("input");
  elm.type = type;
  elm.placeholder = placeholder;
  elm.id = id;
  elm.className = className;
  return elm;
};

// ul ATOM
export const createUlElm = (id = "", className = "") => {
  const elm = document.createElement("ul");
  elm.id = id;
  elm.className = className;
  return elm;
};

// li ATOM
export const createLiElm = (innerText, id = "", className = "") => {
  const elm = document.createElement("li");
  elm.textContent = innerText;
  elm.id = id;
  elm.className = className;
  return elm;
};

// a ATOM
export const createAnchorElm = (href, innerText, id = "", className = "") => {
  const elm = document.createElement("a");
  elm.href = href;
  elm.textContent = innerText;
  elm.id = id;
  elm.className = className;
  return elm;
};
