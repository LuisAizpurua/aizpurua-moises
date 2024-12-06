import {Footer, Head, HeaderP} from "../../components/global/import-global.js";
import {vehicle_list, sure_list} from '../../services/vehicle-register/vehicle-register.js'

customElements.define('header-p', HeaderP)
customElements.define('head-p', Head)
customElements.define('custom-footer', Footer)

const btn_form = document.getElementById('formEnterRegister');
btn_form.addEventListener('submit', async(e)=>{  
    e.preventDefault();

    const formData = new FormData(btn_form);

    const data = Object.fromEntries(formData.entries());

    const data_sure = sure_list(data); 
    const data_vehicle = vehicle_list(data);
    console.log({data_sure: data_sure, data_vehicle: data_vehicle})     
    if(!!data_sure && !!data_vehicle) {history.pushState({},'','/pages/drop.html'); location.reload(); };
});