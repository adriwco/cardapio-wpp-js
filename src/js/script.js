const botoes = document.querySelectorAll(".container-menu button");

if (botoes) {
  function selecionarCategoria(botao) {
    if (botao) {
      // Remova a classe 'active' de todos os botões
      botoes.forEach(function (b) {
        b.classList.remove("active");
      });

      // Adicione a classe 'active' apenas ao botão clicado
      botao.classList.add("active");
    }
  }
  // Adicione o evento de clique a todos os botões
  botoes.forEach((b) => {
    b.addEventListener("click", function () {
      selecionarCategoria(this);
    });
  });
}
