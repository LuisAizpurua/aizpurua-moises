export class SuccessNav extends HTMLElement{
  connectedCallback(){
    
    const div = document.createElement('div');
    div.style.backgroundColor = '#0078a1';
    div.style.textAlign = 'center';
    div.textContent = 'Se registro con exito!'
    div.setAttribute('hidden','')

    if(this.getAttribute('hidden')) div.removeAttribute('hidden') ;

    this.appendChild(nav);
  }
}
customElements.define('success', SuccessNav);