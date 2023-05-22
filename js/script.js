function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "../assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de uma arte digital do Guilherme com cabelo grande cacheado com fundo Azul no light mode"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "../assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de uma arte digital do Guilherme com cabelo grande cacheado com fundo transparente no dark mode"
    )
  }
}
