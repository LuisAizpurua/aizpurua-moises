import { addList } from "../../method-repeat/methods.js";
import {navbar} from "../../method-repeat/objects.js"

const addTag = (nameTag, data) => {
  const tag = document.createElement(nameTag);
  Object.assign(tag, data);
  return tag;
};

export class HeaderP extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback() {
    const ul = document.createElement("ul");
    addList(navbar, ul);

    const header = addTag("header", { className: "containerHeader" });
    const div = addTag("div", { className: "titlePageDiv" });
    const nav = addTag("nav", { className: "navOptions" });

    header.appendChild(div);
    header.appendChild(nav);

    const h2 = addTag("h2", {
      className: "titleCompanyH2",textContent: "SPEEDYBOX | LOGISTICS",
    });
    
    const h5 = addTag("h5", {  
      className: "subTitleCompanyH5", textContent: "entrega rapida, siempre a tiempo",
    });

    const img = addTag("img", {
      src: "/images/landing-icon/logo-speedy.png",
      alt: "logo speedy",
      title: "speedy box",
      width: "70",
    });

    div.append(h2, h5, img);

    nav.appendChild(ul);

    this.appendChild(header);
  }
}