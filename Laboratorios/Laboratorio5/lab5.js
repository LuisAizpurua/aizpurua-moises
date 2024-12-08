const cadena = document.getElementById('cad');
const response = document.getElementById('response');

cadena.addEventListener('input', () =>{
    const Valorcadena = cadena.value;

    const textoReversa = Valorcadena.split('').reverse().join('');

    response.innerHTML = `<span class=''>${textoReversa}</span>`;
});

const colorSelect = document.getElementById('Selcolor');

colorSelect.addEventListener('change',() =>{
    const selectedColor = colorSelect.value;
    response.style.color = selectedColor;
});