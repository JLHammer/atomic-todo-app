console.log("main.js loaded");

import { Header, Main, Footer } from "./organisms.js";

const App = () => {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const header = Header({ onBurgerClick: toggleBurgerMenu });
  const main = Main();
  const footer = Footer();

  // Append organisms to the app container
  app.append(header, main, footer);
  return app;
};

function toggleBurgerMenu() {
  // Placeholder for burger menu toggle functionality
  console.log("Menu toggled");
}

App();
console.log("App served successfully.");
