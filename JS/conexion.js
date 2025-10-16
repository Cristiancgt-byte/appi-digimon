var digimones = [];

async function conexion() {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await res.json();
  return data;
}

// Cargar todos los digimones al iniciar
async function general() {
  if (digimones.length === 0) {
    digimones = await conexion();
  }
  home();
}

async function FiltroConexion(levelFiltro) {
  document.getElementById("la-lista").innerHTML = "";
  const data = await conexion();
  digimones = data.filter(d => d.level.toLowerCase() === levelFiltro.toLowerCase());
  const listaHTML = generarLista(digimones);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
