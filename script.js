const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você está em uma cidade turística e vê grupos culturais locais apresentando danças típicas. O que você faz?",
    alternativas: [
      {
        texto: "Assiste com atenção e pesquisa sobre aquela cultura.",
        afirmacao: "Você valoriza a diversidade cultural e tem interesse em aprender com ela."
      },
      {
        texto: "Tira fotos e posta nas redes sociais.",
        afirmacao: "Você gosta de compartilhar experiências, mas talvez não se aprofunde tanto no conteúdo cultural."
      }
    ]
  },
  {
    enunciado: "Ao perceber que sua escola ou bairro gera muito lixo, o que você pensa em fazer?",
    alternativas: [
      {
        texto: "Organizar uma campanha de reciclagem com colegas.",
        afirmacao: "Você tem espírito de liderança e pensa em soluções coletivas para os problemas ambientais."
      },
      {
        texto: "Reduzir o que consome e incentivar os amigos a fazer o mesmo.",
        afirmacao: "Você acredita que grandes mudanças começam com atitudes individuais."
      }
    ]
  },
  {
    enunciado: "Nas redes sociais, um influenciador faz piadas ofensivas sobre minorias. Qual sua atitude?",
    alternativas: [
      {
        texto: "Denuncia o conteúdo e explica por que é problemático.",
        afirmacao: "Você defende o respeito às diferenças e se posiciona contra discursos de ódio."
      },
      {
        texto: "Ignora, pois acha que é 'só uma brincadeira'.",
        afirmacao: "Você talvez ainda esteja desenvolvendo sua consciência sobre o impacto das palavras e atitudes."
      }
    ]
  },
  {
    enunciado: "Você descobre que uma marca famosa explora trabalhadores e destrói o meio ambiente. E agora?",
    alternativas: [
      {
        texto: "Procura consumir de empresas mais sustentáveis.",
        afirmacao: "Você é consciente sobre consumo e busca fazer escolhas mais éticas."
      },
      {
        texto: "Continua comprando, pois os produtos são bons.",
        afirmacao: "Você valoriza conforto e praticidade, mas pode refletir mais sobre o impacto de suas escolhas."
      }
    ]
  },
  {
    enunciado: "Na escola, pedem um projeto sobre o futuro do planeta. Qual ideia mais te empolga?",
    alternativas: [
      {
        texto: "Criar soluções tecnológicas para reduzir os impactos ambientais.",
        afirmacao: "Você acredita que a inovação pode ajudar a salvar o planeta."
      },
      {
        texto: "Desenvolver um projeto que envolva comunidades locais e reflita sobre justiça social.",
        afirmacao: "Você entende que o futuro sustentável depende de inclusão, cultura e participação coletiva."
      }
    ]
  }
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
