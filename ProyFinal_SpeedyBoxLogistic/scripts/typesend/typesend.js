import { Head,HeaderP,Footer } from "../../components/global/import-global.js";

customElements.define("header-p", HeaderP);
customElements.define("head-p", Head);
customElements.define('custom-footer', Footer);

function enviar(){
    history.pushState({}, '', '')
}