import {generateSection} from '../../method-repeat/methods.js'

export class ContentOne extends HTMLElement {
  constructor() {super()}

  connectedCallback() {
    const tags = generateSection(this.getAttribute("title"));
    const h3 = document.createElement("h3");

    h3.innerHTML = `Entrega rápida,<br /> siempre a tiempo.`;

    tags.div.appendChild(h3);
    tags.div.innerHTML += `<p>
                     SPEEDY BOX | LOGISTICS es una empresa lider en logistica, especializada en entregas rapidas y
                     eficientes. Con el eslogan "Entrega rapido, siempre a tiempo", garantizamos puntualidad
                     en cada envio. Nuestra infraestructura avanzado y equipo dedicado aseguran un servicio y de alto calidad. </p>`;

    const p_images = {
      calendar: "Reserva tus envíos con tiempo",
      doc_comunication: "Genera tus reportes de envío",
      report: "Mantente comunicado 24/7",
    };

    const path_img = "/images/landing-icon/operation-icon/";
    for (let i in p_images) {
      const {img, p}= {img: document.createElement('img'), p: document.createElement('p')};
      img.src =  `${path_img + i.replace( "_","-")}.png`;
      p.textContent = `${p_images[i]}`;
      tags.div2.append(img,p);
    };

    this.appendChild(tags.section);
  }
}


export class ContentTwo extends HTMLElement {
  constructor() { super()}

  connectedCallback() {
    const tags = generateSection(this.getAttribute("title"));
    const h3 = document.createElement("h3");
    const {p_div, p_div2} = {p_div: document.createElement('p'), p_div2: document.createElement('p')};

    tags.div.appendChild(p_div);
    p_div.textContent = 'Descubre nuestros servicios de envío:' 
    
    h3.textContent = 'MISIÓN';
    tags.div2.append(h3,p_div2) ;

    const buttonNowRegister = document.createElement('button');
    buttonNowRegister.setAttribute('id','registerNowBtn');
    buttonNowRegister.textContent = '¡Regístrate ahora!';             
    buttonNowRegister.addEventListener('click',()=>{
      const loginPage = document.getElementById('loginPage');
      const regiterUserPage = document.getElementById('regiterUserPage');
      
      loginPage.removeAttribute('hidden');
      regiterUserPage.setAttribute('hidden',''); 

      const name = regiterUserPage.getAttribute('id');
      location.hash = `${name}`
    });

    p_div2.textContent = `Proveer soluciones de entrega rápidas,seguras y confiables que superen las
                         expectativas de nuestros clientes,apoyándonos en tecnología innovadora y
                         un equipo comprometido con la excelencia y la satisfacción del cliente.`


    tags.div.innerHTML += `<button id="exploreServiceBtn">EXPLORAR SERVICIOS... <span style="margin-left: 18px;">
                           <img src="/images/landing-icon/operation-icon/dropDown.png" width="15" /></span></button>`;

    tags.div2.appendChild(buttonNowRegister)
    this.appendChild(tags.section);
  }
}