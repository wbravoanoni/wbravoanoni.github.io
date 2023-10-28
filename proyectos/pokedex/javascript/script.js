
window.addEventListener('load',()=>{
    
    const listaPokemon = document.querySelector("#listarPokemon");
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    const btnHeader = document.querySelectorAll(".btn-header");

    btnHeader.forEach(boton => boton.addEventListener("click", (event) =>{
        const botonId = event.currentTarget.id; 

        listaPokemon.innerHTML = '';

        for(i=1;i<=151;i++){
            fetch(URL + i)
                .then( (response) => response.json() )
                .then(data => {

                    if(botonId==='ver-todos'){
                        mostrarPokemon(data);
                    }else{
                        const tipos = data.types.map(type => type.type.name);
                        if(tipos.some(tipo => tipo.includes(botonId))){
                            mostrarPokemon(data);
                        }

                    }


                })
        }
    }));




    for(i=1;i<=151;i++){
        fetch(URL + i)
            .then( (response) => response.json() )
            .then(data => mostrarPokemon(data))
    }


    function mostrarPokemon(pokemon){

        //let tipos = pokemon.types.map(type => type.type.name);

        let tipos = pokemon.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
        tipos = tipos.join('');
      

        let pokeId = pokemon.id.toString();

        if(pokeId.length ==1){
            pokeId= '00'+pokeId;
        }else if(pokeId.length ==2){
            pokeId= '0'+pokeId;
        }else if(pokeId.length ==3){
            pokeId = pokeId;
        }else{
            pokeId = pokeId;
        }

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = ` 
            <p class="pokemon-id-back">${pokemon.id}</p>
            <div class="pokemon-imagen">
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="pikachu">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokeId}</p>
                    <h2 class="pokemon-nombre">${pokemon.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="stat">${pokemon.height}M</p>
                    <p class="stat">${pokemon.weight}kg</p>
                </div>
            </div>
        `;
        listaPokemon.append(div);
    }






})










