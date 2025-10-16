function generarLista(arraydigimones) {
  let listaHTML = "";
  for (let i = 0; i < arraydigimones.length; i++) {
    let id = i + 1; // usamos índice como ID
    listaHTML += `
      <div class="c-lista-digimon" onclick="Detalle('${arraydigimones[i].name}')">
        <p>#${id}</p>
        <img src="${arraydigimones[i].img}" width="auto" height="100" loading="lazy" alt="${arraydigimones[i].name}">
        <p>${arraydigimones[i].name}</p>
        <p>${arraydigimones[i].level}</p>
      </div>`;
  }
  return listaHTML;
}

function buscadorfuncion(valor) {
  if (valor.length >= 2) {
    const filtrados = digimones.filter(d => d.name.toLowerCase().includes(valor.toLowerCase()));
    let listaHTML = generarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}

function home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  // buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar Digimon...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // filtros por nivel
  const niveles = ["In Training", "Rookie", "Champion", "Ultimate", "Mega", "Armor"];
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("niveles-container");

  for (let i = 0; i < niveles.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = niveles[i];
    btn.addEventListener("click", () => {
      FiltroConexion(niveles[i]);
    });
    contenedorFiltro.appendChild(btn);
  }

  // contenedor lista
  const listaHTML = generarLista(digimones);
  const contenedor = document.createElement("section");
  contenedor.id = "la-lista";
  contenedor.innerHTML = listaHTML;

  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedor);
}
