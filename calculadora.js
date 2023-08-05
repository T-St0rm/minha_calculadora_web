var botoes = document.getElementsByClassName("botao");
var resultado = document.querySelector(".telaresult p");
var expressao = "";

function calcularExpressao() {
  expressao = expressao.trim();
  if (expressao !== "") {
    resultado.innerText = eval(expressao);
    expressao = "";
  }
}

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    var valorBotao = this.innerText;

    if (valorBotao === "=") {
      calcularExpressao();
    } else if (valorBotao === "C") {
      resultado.innerText = "";
      expressao = "";
    } else {
      expressao += valorBotao;
      resultado.innerText = expressao;
    }
  });
}


var igual = document.getElementById("igual");
igual.addEventListener("click", function() {
  calcularExpressao();
});
