function favoritos() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Filtrar los que tengan datos válidos
    favoritos = favoritos.filter(d =>
        d && d.name && d.img && d.level
    );

    // Si hay datos corruptos, los limpiamos del localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    if (favoritos.length === 0) {
        document.getElementById("root").innerHTML = `
            <section class="info">
                <h2>No hay favoritos</h2>
                <p>Agrega algunos Digimon desde la sección principal</p>
            </section>
        `;
    } else {
        document.getElementById("root").innerHTML = generarLista(favoritos);
    }
}
