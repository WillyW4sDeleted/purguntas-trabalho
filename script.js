const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
   enunciado: "1.  ",
    alternativas: [
      {
        texto: " ",
        afirmaçao: " "
      },
        {
          texto: " "
          afirmaçao: " "
        }
      ]
  },
  {
     enunciado: "2. ",
    alternativas: [
      {
        texto: " ",
        afirmaçao: " "
      },
        {
          texto: " "
          afirmaçao: " "
        }
      ]
  },
  {
     enunciado: "3.  ",
    alternativas: [
      {
        texto: " ",
        afirmaçao: " "
      },
        {
          texto: " "
          afirmaçao: " "
        }
       {
        texto: " ",
        afirmaçao: " "
      },
       {
        texto: " ",
        afirmaçao: " "
      },
      ]
  },
  {
     enunciado: "4.  ",
    alternativas: [
      {
        texto: " ",
        afirmaçao: " "
      },
        {
          texto: " "
          afirmaçao: " "
        }
       {
        texto: " ",
        afirmaçao: " "
      },
       {
        texto: " ",
        afirmaçao: " "
      },
       {
        texto: " ",
        afirmaçao: " "
      },
      ]
  },
  {
     enunciado: "5.  ",
    alternativas: [
      {
        texto: " ",
        afirmaçao: " "
      },
        {
          texto: " "
          afirmaçao: " "
        }
       {
        texto: " ",
        afirmaçao: " "
      },
      ]
  },
  {
     enunciado: "6. Em qual parte você se arrepende? ",
    alternativas: [
      {
        texto: " em tudo ",
        afirmaçao: " "
      },
        {
          texto: " em nada "
          afirmaçao: " "
        }
       {
        texto: " algumas partes ",
        afirmaçao: " "
      },
       {
        texto: "  ",
        afirmaçao: " "
      },
      ]
  },
  ]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
