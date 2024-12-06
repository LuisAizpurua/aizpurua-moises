import {VerifyRegisteredUser} from "../../services/auth/register-auth.js"

document.getElementById('enterFormBtn').addEventListener('click', (e) => {
   e.preventDefault();

   const form = document.getElementById('formEnter');
   const data =  VerifyRegisteredUser(form.children);
   
   const {name, email, password, rol, phone} = form.children
   window.parent.history.pushState({},'',rol.value == "employee"?'/pages/form.html':'/pages/orders.html');
   window.parent.location.reload()
   name.value = '';
   email.value = '';
   password.value = ''; 
   rol.value = '';
   phone.value = '';
   
});