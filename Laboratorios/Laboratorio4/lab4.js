const htmlElementos = {
    forms: document.querySelector('form'),
    div: document.getElementById('response')
}

const input = document.getElementById('cad');
    
    input.addEventListener('input', (event) => {
        htmlElementos.div.innerHTML = `
         <spam>${event.target.value}</spam>
        `
    });
