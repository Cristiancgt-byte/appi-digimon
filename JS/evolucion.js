async function evolucion() {
  const root = document.getElementById("root");
  root.innerHTML = "<p style='text-align:center;'>🔄 Cargando un Digimon aleatorio...</p>";

  try {
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await res.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const digimon = data[randomIndex];

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const esFavorito = favoritos.some(fav => fav.name === digimon.name);

    root.innerHTML = `
      <section class="c-detalle">
        <h2>🔥 Evolución Aleatoria 🔥</h2>
        <img src="${digimon.img}" alt="${digimon.name}" height="150">
        <h3>${digimon.name}</h3>
        <p>Nivel: ${digimon.level}</p>
        <button onClick="toggleFavorito('${digimon.name}', '${digimon.img}', '${digimon.level}')">
          <span id="corazon-${digimon.name}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
        </button>
        <br><br>
        <button class="btn-otro" onClick="evolucion()">🔁 Ver otro Digimon</button>
      </section>
    `;
  } catch (error) {
    root.innerHTML = "<p style='color:red; text-align:center;'>❌ Error al cargar el Digimon</p>";
  }
}
