import {data_img} from '../../method-repeat/objects.js'

const tags = {
    div: document.createElement('div'),
    img: document.createElement('img'),
    div_imgs: document.createElement('div')
}

export class ImgMainHome extends HTMLElement {
  constructor(){super()};

  connectedCallback() {
    const title = this.getAttribute("title");

    tags.div.className = title;
    tags.img.width = "70";
    Object.assign(
        tags.img, {
            src: "/images/landing-icon/logo-speedy.png",
            width: "70",
            alt: "logo speedy",
            title:"speedy box"
        });

    tags.div_imgs.className = "imgsRedSocial"
   
    for(let d in data_img ){
       let title = data_img[d].img.split('.')[0];
       tags.div_imgs.innerHTML +=`<a href="https://${data_img[d].href}"><img src="/images/sign-page/red-social/${data_img[d].img}" alt="${title}" title="${title}" /></a>`;
    }
    tags.div.appendChild(tags.div_imgs);
    tags.div.appendChild(tags.img)
    this.appendChild(tags.div);
  }
}