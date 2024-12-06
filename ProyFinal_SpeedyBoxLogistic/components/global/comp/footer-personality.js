import { addList } from "../../method-repeat/methods.js";
import { navbar } from "../../method-repeat/objects.js";

const tags = {
  footer: document.createElement("footer"),
  nav: document.createElement("nav"),
  ul: document.createElement("ul"),
  p: document.createElement("p"),
};

export class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addList(navbar, tags.ul);

    tags.nav.className = "footerOptions";

    tags.p.className = "allRightsH3";
    tags.p.textContent = "ALL RIGHTS RESERVED";

    tags.nav.appendChild(tags.ul);
    tags.nav.appendChild(tags.p);
    tags.footer.appendChild(tags.nav);
    this.appendChild(tags.footer);
  }
}