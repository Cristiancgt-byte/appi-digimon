var esFavorito = false;

function toggleFavorito(name, img, level) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const existe = favoritos.some(d => d.name === name);

  if (existe) {
    favoritos = favoritos.filter(d => d.name !== name);
    esFavorito = false;
  } else {
    favoritos.push({ name, img, level });
    esFavorito = true;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  const boton = document.querySelector(`#corazon-${name}`);
  if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

async function Detalle(nombre) {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`);
  const data = await res.json();
  const digimon = data[0];

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  esFavorito = favoritos.some(d => d.name === digimon.name);

  const detalleHTML = `
    <section class="c-detalle">
      <img src="${digimon.img}" alt="${digimon.name}" height="150">
      <h2>${digimon.name}</h2>
      <p>Nivel: ${digimon.level}</p>
      <button onClick="toggleFavorito('${digimon.name}', '${digimon.img}', '${digimon.level}')">
        <span id="corazon-${digimon.name}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>
    </section>
  `;

  root.innerHTML = detalleHTML;
}
