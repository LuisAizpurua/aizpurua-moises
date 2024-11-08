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
  
      li.style.marginTop = "10px";
      mainDiv.style.display = "grid";
      mainDiv.style.gridTemplateColumns = "repeat(2, 1fr)";
      mainDiv.style.gridTemplateRows = "repeat(2, auto)";
      mainDiv.style.gap = "10px";
  
      h3.textContent = `${data.forms[0].name} (${data.id})`;
  
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
      const urlSpecie = data.species['url']
      const urlEvolutionChain = (await fetch(urlSpecie)).json();
      const dataEvolutionChain = (await fetch(urlEvolutionChain.evolution_chain)).json();
      const dd = dataEvolutionChain.species.name;

      const evolutionChainUl = document.createElement('ul');
      let n = document.createElement('li');
      n.appendChild(dd);
      evolutionChainUl.appendChild(n)
      evolutionChainDiv(evolutionChainUl);

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
    metodoBuscar: async () => {
      const pokemon = htmlElements["nombrePokemon"].value.trim();
  
      if (pokemon === "") return;
  
      const p = await handlers.metodoApiPokemon(pokemon);
  
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
  