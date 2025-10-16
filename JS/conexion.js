var totalDigi = [];
var digimones = [];

async function conexion() {
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await res.json();
  return data;
}

// Cargar todos los Digimon al iniciar
async function general() {
  if (digimones.length === 0) {
    digimones = await conexion();
  }
  home();
}

// Filtro por nivel
async function FiltroConexion(levelFiltro) {
  document.getElementById("la-lista").innerHTML = "<p style='text-align:center;'>Cargando...</p>";
  const data = await conexion();

  // Normalizar texto (minúsculas y sin espacios)
  const normalizar = (texto) => texto.toLowerCase().replace(/\s+/g, "");

  digimones = data.filter(
    (d) => normalizar(d.level) === normalizar(levelFiltro)
  );

  const root = document.getElementById("la-lista");

  if (digimones.length === 0) {
    root.innerHTML = `<p style="text-align:center; color:#ccc;">No se encontraron Digimon con el nivel <b>${levelFiltro}</b></p>`;
  } else {
    const listaHTML = generarLista(digimones);
    root.innerHTML = `<p style="text-align:center;">Mostrando ${digimones.length} resultados (${levelFiltro})</p>` + listaHTML;
  }
}
