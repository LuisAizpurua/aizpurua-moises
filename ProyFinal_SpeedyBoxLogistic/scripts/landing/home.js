import {Footer, Head} from "../../components/global/import-global.js";
import { NavBarHome, ContentOne, ContentTwo,ImgMainHome } from "../../components/pages/imports-pages.js"

customElements.define('custom-footer', Footer);
customElements.define("section-one", ContentOne);
customElements.define("section-two", ContentTwo);
customElements.define("head-p", Head);
customElements.define('navbar-home', NavBarHome);
customElements.define("main-imgs-home", ImgMainHome);

const loginPage = document.getElementById('loginPage');
const regiterUserPage = document.getElementById('registerUserPage');

document.getElementById('sesion').addEventListener('click', (e) => {
   e.preventDefault();
   actionBtn(loginPage, regiterUserPage);
});

document.getElementById('registered').addEventListener('click', (e) => {
  e.preventDefault();
  actionBtn(regiterUserPage,loginPage);
});

const actionBtn = (rmAtt = HTMLElement, setAtt) => {
  rmAtt.removeAttribute('hidden');
  setAtt.setAttribute('hidden',''); 
  const path = '/pages/home.html';
  const name = rmAtt.getAttribute('id');

  location.hash = `${name}`
  history.replaceState({}, "", `${path}`)
}
