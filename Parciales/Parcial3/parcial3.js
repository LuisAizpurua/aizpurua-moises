const htmlElements = {
    infoPokemon: document.querySelector(".infoPokemon"),
    buscarBtn: document.querySelector("#buscarBtn"),
    limpiarBtn: document.querySelector("#limpiarBtn"),
    seleccion: document.querySelector("#seleccion"),
    nombrePokemon: document.querySelector("#nombrePokemon"),
    busqueda: document.querySelector(".busqueda"),
  };
  
  const handlers = {
    metodoApiPokemon: async (nombre) => {
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const data = await pokemon.json();

      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const mainDiv = document.createElement("div");
      const spriteDiv = document.createElement("div");
      const weightHeightDiv = document.createElement("div");
      const divImg = document.createElement("div");
      const evolutionChainDiv = document.createElement('div');
      const abilitesDiv = document.createElement("div");
      const spriteLabel = document.createElement("label");
      const weightHeightLabel = document.createElement("label");
      const spriteP = document.createElement("img");
      const spriteBackP = document.createElement("img");
      const weightHeightP = document.createElement("p");
  
      mainDiv.style.display = "grid";
      mainDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
      mainDiv.style.gridTemplateRows = "repeat(2, auto)";
      mainDiv.style.gap = "10px";

      h3.textContent = `${data.forms[0].name} (${data.id})`;
      h3.style.marginTop = '30px'
      h3.style.marginBottom = '10px'

      spriteLabel.innerHTML = "<b>Sprites</b>";
  
      weightHeightLabel.innerHTML = "<b>Weight/Height</b>";
  
      spriteP.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      spriteP.style.width = "35px";
  
      spriteBackP.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`;
      spriteBackP.style.width = "85px";
      spriteBackP.style.marginLeft = "20px";
  
      weightHeightP.textContent = `${data.weight} / ${data.height}`;
      weightHeightP.style.marginTop = "15px";
  
      evolutionChainDiv.innerHTML = "<b>Evolution Chain</b>"
      const evolutionChainUl = document.createElement('ul');
      const ds = await fetch(data.species.url);
      const data_species = await ds.json();
      console.log(data_species);
      console.log(data_species.evolution_chain);
      const de = await fetch(data_species.evolution_chain.url);
      const data_evolutionChain = await de.json();

      const evolutionList = [];
      let chain = data_evolutionChain.chain;
      while (chain) {
        evolutionList.push(chain.species.name);
          chain = chain.evolves_to[0] || null;
      }
      for(let name of evolutionList){          
      const n = document.createElement('li');
      n.innerHTML = name;
      evolutionChainUl.appendChild(n)
      }
      evolutionChainDiv.appendChild(evolutionChainUl);

      abilitesDiv.innerHTML = "<b>Abilities</b>";
      const abilitieUl = document.createElement('ul');
      for(let habilidad of data.abilities ){
          let n = document.createElement('li');
          n.textContent = `${habilidad.ability['name']}`
          abilitieUl.appendChild(n);
      }
      abilitesDiv.appendChild(abilitieUl);

      divImg.style.display = "flex";
      divImg.style.alignItems = "center";
      divImg.style.marginTop = "25px";
  
      spriteDiv.appendChild(spriteLabel);
      divImg.appendChild(spriteP);
      divImg.appendChild(spriteBackP);
      spriteDiv.appendChild(divImg);
      weightHeightDiv.appendChild(weightHeightLabel);
      weightHeightDiv.appendChild(weightHeightP);
  

      mainDiv.appendChild(spriteDiv);
      mainDiv.appendChild(weightHeightDiv);
      mainDiv.appendChild(evolutionChainDiv);
      mainDiv.appendChild(abilitesDiv);



      li.appendChild(h3);
      li.appendChild(mainDiv);
  
      return li;
    },
    metodoHabilidad: async (habilidad) => {
      const hab = await fetch(`https://pokeapi.co/api/v2/ability/${habilidad}`);
      if(hab == null) return;
      
      const mainDiv = document.createElement('div');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h4');
      const ul = document.createElement('ul');
      
      const data = await hab.json();

      const titulo = `${habilidad}`.toUpperCase();
      h3.innerHTML = `<b>${titulo}</b>`
      h3.style.marginBottom = '25px'

      h4.innerHTML = '<b>Who can learn it?</b>';
      
      for(let datos of data.pokemon){
        const li = document.createElement('li');
        li.style.alignItems ='center';
        console.log(datos.pokemon.name);
        li.innerHTML = `${datos.pokemon.name} 
                     ${datos.is_hidden?'<span class="material-symbols-outlined">visibility_off</span>':''}
                     `;
        ul.appendChild(li);
      }
      
      mainDiv.appendChild(h3);
      mainDiv.appendChild(h4);
      mainDiv.appendChild(ul);
      return mainDiv;
    },

    metodoBuscar: async () => {
      const valueInput = htmlElements["nombrePokemon"].value.trim();
      if (valueInput === "") return;
    const opcion = document.querySelector('#seleccion');
    console.log(opcion.value)
      let p; 
      const access = opcion.value == 'pokemon'? true : false;
      if(access){
       p = await handlers.metodoApiPokemon(valueInput);
      }else{
       p = await handlers.metodoHabilidad(valueInput); 
      }

      if (p == null) return;
  
      if (htmlElements["infoPokemon"].children.length === 0) {
        const ul = document.createElement("ul");
  
        htmlElements["limpiarBtn"].removeAttribute("hidden");
        htmlElements["busqueda"].removeAttribute("style");
  
        htmlElements["infoPokemon"].setAttribute(
          "style",
          "background-color: white;"
        );
  
        ul.style.listStyleType = "none";
        htmlElements["infoPokemon"].appendChild(ul);
      }
  
      htmlElements["infoPokemon"].querySelector("ul").appendChild(p);
    },

    metodoLimpiar: () => {
      htmlElements["nombrePokemon"].value = "";
      htmlElements["infoPokemon"].removeAttribute("style");
      htmlElements["limpiarBtn"].setAttribute("hidden", "true");
  
      htmlElements["busqueda"].setAttribute("style", "justify-content: end;");
  
      while (htmlElements["infoPokemon"].firstChild) {
        htmlElements["infoPokemon"].removeChild(
          htmlElements["infoPokemon"].firstChild
        );
      }
    },
  };
  
  const bindEvents = () => {
    htmlElements["buscarBtn"].addEventListener("click", handlers.metodoBuscar);
    htmlElements["limpiarBtn"].addEventListener("click", handlers.metodoLimpiar);
  };
  
  const init = () => {
    bindEvents();
  };
  
  init();
  