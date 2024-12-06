import { Head,HeaderP,Footer } from "../../components/global/import-global.js";

customElements.define("header-p", HeaderP);
customElements.define("head-p", Head);
customElements.define('custom-footer', Footer);

const name_user = 'Bienvenido, Moises'
const h2 = document.querySelector('.welcome');
h2.textContent = name_user