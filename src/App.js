import StartScreen from "./StartScreen";
import React from "react";
import QuestionsScreen from "./QuestionsScreen";

export default function App() {
  let deck = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é _____",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões JS",
    },
    {
      question: "O ReactDOM nos ajuda __ ",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __ ",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  function comparator() {
    return Math.random() - 0.5;
  }

  const [cardDeck, setCardDeck] = React.useState(deck.sort(comparator));

  const [screen, setScreen] = React.useState(true);

  function showQuestions() {
    setScreen(false);
  }

  return (
    <>
      {screen ? (
        <StartScreen showQuestions={showQuestions} />
      ) : (
        <QuestionsScreen deck={cardDeck} />
      )}
    </>
  );
}
