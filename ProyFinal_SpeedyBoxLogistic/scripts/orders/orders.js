import { Head, HeaderP, Footer } from "../../components/global/import-global.js";
import { OrdenesUl } from '../../components/pages/imports-pages.js' 

customElements.define("header-p", HeaderP);
customElements.define("head-p", Head);
customElements.define('custom-footer', Footer);
customElements.define('ul-main', OrdenesUl);
 

const name = 'Moises'
const h3 = document.querySelector('.h3_user')
h3.textContent = `${name}, en tu vehículo tú estás al mando.`