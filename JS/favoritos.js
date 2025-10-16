function favoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (favoritos.length == 0) {
    document.getElementById("root").innerHTML = "No hay Digimon favoritos 🩶";
  } else {
    document.getElementById("root").innerHTML = generarLista(favoritos);
  }
}
