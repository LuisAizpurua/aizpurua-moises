(()=>{

const doc = {
 caja: document.querySelector(".caja"),
 btn_generar: document.querySelector("#generar"),
 btn_asc: document.querySelector("#asc"),
 btn_desc: document.querySelector("#desc")
}

const listaNumeros = [];
const generarNumeroAleatorio = ()=> {
    return Math.floor(Math.random() * (99 - 1 + 1)) + 1;
};


doc.btn_generar.addEventListener('click',()=>{
    let numero = generarNumeroAleatorio();
    listaNumeros.push(numero);
    
        let nuevoElemento =  document.createElement('div');
        nuevoElemento.classList.add('items');
        nuevoElemento.textContent = `${numero}`;
        
        doc.caja.appendChild(nuevoElemento);
    });
    
doc.btn_asc.addEventListener('click',()=>{
    doc.caja.innerHTML = '';
    let lista = [...listaNumeros].sort((a,b)=> a - b);
    mostrarNumero(lista);
});

doc.btn_desc.addEventListener('click',()=>{
    doc.caja.innerHTML = '';
    let lista = [...listaNumeros].sort((a,b)=> a - b);
    mostrarNumero(lista.reverse());
})


const mostrarNumero = (lista) => {
    
    lista.forEach((numero) => {
        let nuevoElemento =  document.createElement('div');
        nuevoElemento.classList.add('items');
        nuevoElemento.textContent = `${numero}`;
        
        doc.caja.appendChild(nuevoElemento);
    });
    
    };

})();
