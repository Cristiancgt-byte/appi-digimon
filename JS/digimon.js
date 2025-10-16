var esFavorito = false;

function toggleFavorito(name, img, level) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let existe = favoritos.some(f => f.name === name);

  if (existe) {
    favoritos = favoritos.filter(poke => poke.name !== name);
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
  root.innerHTML = "<p style='text-align:center;'>Cargando...</p>";

  const res = await fetch("https://digimon-api.vercel.app/api/digimon/name/" + nombre);
  const data = await res.json();
  const digi = data[0];

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  esFavorito = favoritos.some(poke => poke.name === digi.name);

  const detalle = `
    <section class="c-detalle">
      <img src="${digi.img}" alt="${digi.name}" height="150" width="auto">
      <h2>${digi.name}</h2>
      <p>Nivel: ${digi.level}</p>
      <button onClick="toggleFavorito('${digi.name}', '${digi.img}', '${digi.level}')">
        <span id="corazon-${digi.name}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>
    </section>
  `;
  root.innerHTML = detalle;
}
