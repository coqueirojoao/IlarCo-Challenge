# IlarCo Challenge - NutriTrack

Dashboard nutricional em React Native com TypeScript, criado a partir do mockup enviado para o desafio.

## Stack

- Expo SDK 57
- React Native 0.86
- TypeScript em modo strict
- React Native Paper para componentes e tema
- React Native SVG para o anel de progresso circular

## Como rodar

```bash
npm install
npm start
```

Para validar os tipos:

```bash
npm run typecheck
```

## Arquitetura

```text
src/
  components/   Componentes visuais reutilizaveis da tela
  data/         Mock tipado usado para popular dashboard, macros e refeicoes
  screens/      Composicao da tela principal
  theme/        Cores e tema do React Native Paper
  types/        Interfaces TypeScript do dominio nutricional
```

A implementacao fica concentrada em uma unica feature, como solicitado, sem navegacao ou estado global desnecessario.

## Tempo de criacao

Para telas mobile nesse nivel de complexidade, consigo entregar uma primeira versao fiel em cerca de 1 a 2 horas quando o mockup esta claro. Com polimento visual, tipagem, arquitetura, commits organizados e validacao, a janela realista fica em torno de 2 a 4 horas, dependendo da quantidade de estados e responsividade exigidos.
