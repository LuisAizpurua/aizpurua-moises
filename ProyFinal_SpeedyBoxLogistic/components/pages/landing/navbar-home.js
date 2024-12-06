import { addList } from "../../method-repeat/methods.js";
import {navbar} from "../../method-repeat/objects.js"

export class NavBarHome extends HTMLElement{
    constructor(){super()}
    
    connectedCallback(){
        
    const ul = document.createElement("ul");
    addList(navbar,ul);

    const header = document.createElement("header");
    const nav = document.createElement('nav');
    nav.className = 'headerOptions';

    header.appendChild(nav);
    nav.appendChild(ul);

    const li = document.createElement('li');
    const sessionBtn = document.createElement('button');
    sessionBtn.setAttribute('id','sesion');
    sessionBtn.textContent = 'INICIAR SESION';

    const div = document.createElement('div');
    div.style.padding = '5px 0';
    div.innerHTML = '<span>O</span>'

    const registeredBtn = document.createElement('a');
   // registeredBtn.setAttribute('id','registered');
   // registeredBtn.setAttribute('title','registrate');
    Object.assign(registeredBtn,{
        'title':'registrate',
        'id':'registered'
    })
    //registeredBtn.href = '/';
    registeredBtn.textContent = 'REGISTRATE'

    li.append(sessionBtn, div, registeredBtn);
    ul.appendChild(li);

    this.appendChild(header);
    }
}