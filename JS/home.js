function generarLista(arrayDigimones) {
  let listaHTML = "";
  for (let i = 0; i < arrayDigimones.length; i++) {
    listaHTML += `
      <div class="c-lista-pokemon" onclick="Detalle('${arrayDigimones[i].name}')">
        <p>${arrayDigimones[i].name}</p>
        <img src="${arrayDigimones[i].img}" width="auto" height="100" loading="lazy" alt="${arrayDigimones[i].name}">
        <p>Nivel: ${arrayDigimones[i].level}</p>
      </div>`;
  }
  return listaHTML;
}

function buscadorfuncion(sza) {
  if (sza.length >= 3) {
    const filtrados = digimones.filter((d) =>
      d.name.toLowerCase().includes(sza.toLowerCase())
    );
    let listaHTML = generarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}

function home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar Digimon...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Contenedor filtro (niveles)
  const niveles = [
    "In Training",
    "Rookie",
    "Champion",
    "Ultimate",
    "Mega",
    "Armor"
  ];

  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("tipos-container");

  for (let i = 0; i < niveles.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = niveles[i];
    btn.addEventListener("click", () => {
      FiltroConexion(niveles[i]);
    });
    contenedorFiltro.appendChild(btn);
  }

  // Lista de Digimon
  const listaHTML = generarLista(digimones);
  var contenedorPokes = document.createElement("section");
  contenedorPokes.id = "la-lista";
  contenedorPokes.innerHTML = listaHTML;

  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorPokes);
}

