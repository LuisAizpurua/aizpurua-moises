import {Head} from "../../components/global/import-global.js";
import {verifyUser} from "../../services/auth/login-auth.js"

customElements.define("head-p", Head);

document.getElementById('enterFormBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const form = document.getElementById('formEnter');
    const data = verifyUser(form.children);

    const {email, password} = form.children
    email.value = ''
    password.value = ''  
    parent.history.pushState({},'', data.rol == "user"? '/pages/orders.html':'/pages/typesofshipments.html');
    parent.location.reload();
   
});