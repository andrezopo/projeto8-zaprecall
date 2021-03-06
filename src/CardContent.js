import React from "react";
import AnswerCard from "./AnswerCard";
import FaceCard from "./FaceCard";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

export default function CardContent({
  question,
  number,
  answer,
  increment,
  whichIcon,
  rightAnswers,
}) {
  const [resultIcon, setResultIcon] = React.useState("close-circle");
  const [cardContent, setCardContent] = React.useState("face");
  const [iconColor, setIconColor] = React.useState("");
  function changeCard(card) {
    switch (card) {
      case "question":
        setCardContent("question");
        break;
      case "answer":
        setCardContent("answer");
        break;
      case "result":
        setCardContent("result");
        break;
    }
  }

  switch (cardContent) {
    case "face":
      return (
        <FaceCard onClick={() => changeCard("question")} number={number} />
      );
    case "question":
      return (
        <QuestionCard onClick={() => changeCard("answer")} text={question} />
      );
    case "answer":
      return (
        <AnswerCard
          changeCard={() => changeCard("result")}
          chooseAnswer={setResultIcon}
          text={answer}
          setColor={setIconColor}
          increment={increment}
          whichIcon={whichIcon}
          rightAnswers={rightAnswers}
        />
      );
    case "result":
      return <ResultCard color={iconColor} icon={resultIcon} number={number} />;
  }
}
