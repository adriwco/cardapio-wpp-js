function gerenciarBotoes(botoes, classeAtiva) {
  if (botoes) {
    function selecionarElemento(elementoClicado) {
      if (elementoClicado) {
        // Remova a classe 'active' de todos os elementos
        botoes.forEach(function (elemento) {
          elemento.classList.remove(classeAtiva);
        });

        // Adicione a classe 'active' apenas ao elemento clicado
        elementoClicado.classList.add(classeAtiva);
      }
    }

    // Adicione o evento de clique a todos os elementos
    botoes.forEach((elemento) => {
      elemento.addEventListener("click", function () {
        selecionarElemento(this);
      });
    });
  }
}

const botoes = document.querySelectorAll(".container-menu button");
gerenciarBotoes(botoes, "active");

const botoesDepoimento = document.querySelectorAll(".button-depoimentos button");
gerenciarBotoes(botoesDepoimento, "active");