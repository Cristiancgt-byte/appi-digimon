var esFavorito = false;

function toggleFavorito(nombre) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some(d => d.name === nombre);

    if (existe) {
        favoritos = favoritos.filter(d => d.name !== nombre);
        esFavorito = false;
    } else {
        const digi = digimones.find(d => d.name === nombre);
        favoritos.push(digi);
        esFavorito = true;
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    const boton = document.querySelector(`#corazon-${nombre}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

async function Detalle(nombre) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const digi = digimones.find(d => d.name === nombre);
    if (!digi) return;

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(d => d.name === digi.name);

    const detalle = `
        <section class="c-detalle">
            <img src="${digi.img}" alt="${digi.name}" height="150">
            <h2>${digi.name}</h2>
            <p>Nivel: ${digi.level}</p>
            <button onclick="toggleFavorito('${digi.name}')">
                <span id="corazon-${digi.name}">${esFavorito ? "❤️" : "🤍"}</span> Favorito
            </button>
        </section>
    `;
    root.innerHTML = detalle;
}
