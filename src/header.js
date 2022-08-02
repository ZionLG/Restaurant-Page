import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const header = () => {
  const header = document.createElement("header");

  header.innerHTML = `<div>Jewish Food</div>
<div id="tabs">
        <button id="home-btn">Home</button>
        <button id="menu-btn">Menu</button>
        <button id="contact-btn">Contact</button>
      </div>`;

  document.body.insertBefore(header, document.body.firstChild);

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

  homeBtn.addEventListener("click", () => home());
  menuBtn.addEventListener("click", () => menu());
  contactBtn.addEventListener("click", () => contact());
};

export { header };
