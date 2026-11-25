# Jogo do Número Secreto

Projeto de estudo de lógica de programação e desenvolvimento web. O objetivo é descobrir um número sorteado pelo programa utilizando dicas a cada tentativa.

## Funcionalidades

- Sorteio de números inteiros de 1 a 100.
- Dicas indicando se o número secreto é maior ou menor que o palpite.
- Contagem de tentativas.
- Reinício do jogo após um acerto.
- Controle dos números já sorteados durante a sessão.
- Narração das mensagens por meio do ResponsiveVoice.

## Tecnologias

- HTML5 — estrutura da interface.
- CSS3 — estilização e adaptação do layout.
- JavaScript — lógica do jogo e manipulação do DOM.

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusAlvezz/jogo-n-secreto.git
   cd jogo-n-secreto
   ```

2. Abra o arquivo `index.html` em um navegador.

O projeto utiliza recursos externos (ResponsiveVoice e Google Fonts), que podem exigir conexão com a internet.

## Estrutura

```text
jogo-n-secreto/
├── index.html
├── style.css
├── app.js
└── img/
```

## Conceitos praticados

- Variáveis, funções e estruturas condicionais.
- Arrays, recursão e geração de números aleatórios.
- Eventos e manipulação de elementos HTML.

## Melhorias planejadas

- Padronizar o intervalo de números entre a interface e a lógica.
- Validar os palpites antes de processá-los.
- Evitar que o jogo dependa da disponibilidade do serviço de voz.
- Remover a exibição do número secreto no console.
- Melhorar a acessibilidade do campo de entrada.

Projeto de aprendizado em desenvolvimento.
