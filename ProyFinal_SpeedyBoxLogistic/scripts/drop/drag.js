import { Footer, Head,HeaderP } from "../../components/global/import-global.js";
customElements.define('header-p', HeaderP)
customElements.define('head-p', Head)
customElements.define('custom-footer', Footer)

document.querySelector('.register-button').addEventListener('click',()=>{

    history.pushState({},'', '/pages/confirmationvehicle.html')
    location.reload()
});