function evolucion() {
    const root = document.getElementById("root");
    root.innerHTML = "<h2>Evoluciones aleatorias 🧬</h2>";

    if (digimones.length === 0) {
        root.innerHTML += "<p>Cargando Digimon...</p>";
        return;
    }

    const aleatorios = [];
    for (let i = 0; i < 6; i++) {
        const r = Math.floor(Math.random() * digimones.length);
        aleatorios.push(digimones[r]);
    }

    const listaHTML = generarLista(aleatorios);
    root.innerHTML += `<section class="evo-list">${listaHTML}</section>`;
}
