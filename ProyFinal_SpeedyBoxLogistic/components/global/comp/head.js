import {addTag} from '../../method-repeat/methods.js'

const create_tag = {
   contentNavegator: addTag("meta", {
           charset: "UTF-8",
           name: "viewport",
           content: "width=device-width",
           "initial-scale": "1.0",
         }),
  title: (title = "title") => {
           const t = document.createElement("title");
           t.textContent = title;
           return t;
         },
  linkStyleCss: (namestyle = "") => addTag("link", { href: namestyle }),
  linkFontGoogle: addTag("link", {
           href: "https://fonts.googleapis.com/css2?family=Poppins&family=Jost&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
         }),
 // linkIcon: (icon='') =>{ addTag("link",{rel:'icon', type:'image/png', href: icon} )}       
};

export class Head extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {

    const attributes = {
      title: this.getAttribute("title"),
      style: this.getAttribute("linkstyle"),
      icon: this.getAttribute("icon"),
    };

    const head = document.head;
    head.appendChild(create_tag.contentNavegator);
    head.appendChild(create_tag.linkStyleCss(attributes.style));
    head.appendChild(create_tag.linkFontGoogle);
    head.appendChild(create_tag.title(attributes.title));
  //  head.appendChild(create_tag.linkIcon(attributes.icon));

   this.appendChild(head)
  }}

  