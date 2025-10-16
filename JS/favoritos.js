function favoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (favoritos.length == 0) {
    document.getElementById("root").innerHTML = "Aun no hay Digimones favoritos";
  } else {
    document.getElementById("root").innerHTML = generarLista(favoritos);
  }
}
