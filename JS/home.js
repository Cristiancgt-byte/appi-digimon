function generarLista(array) {
    let listaHTML = "";
    for (let i = 0; i < array.length; i++) {
        const digi = array[i];
        listaHTML += `
        <div class="c-lista-digimon" onclick="Detalle('${digi.name}')">
            <img src="${digi.img}" height="100" alt="${digi.name}">
            <p>${digi.name}</p>
            <p>Nivel: ${digi.level}</p>
        </div>`;
    }
    return listaHTML;
}

function buscadorfuncion(valor) {
    if (valor.length >= 2) {
        const filtrados = digimones.filter(d => 
            d.name.toLowerCase().includes(valor.toLowerCase())
        );
        document.getElementById("la-lista").innerHTML = generarLista(filtrados);
    } else {
        document.getElementById("la-lista").innerHTML = generarLista(digimones);
    }
}

function home() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Digimon...";
    buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

    const contenedor = document.createElement("section");
    contenedor.id = "la-lista";
    contenedor.innerHTML = generarLista(digimones);

    root.appendChild(buscador);
    root.appendChild(contenedor);
}
