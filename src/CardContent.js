import React from "react";
import AnswerCard from "./AnswerCard";
import FaceCard from "./FaceCard";
import QuestionCard from "./QuestionCard";

export default function CardContent({ question, number, answer }) {
  const [cardContent, setCardContent] = React.useState("answer");
  function changeToQuestion() {
    setCardContent("question");
  }
  function changeToAnswer() {
    setCardContent("answer");
  }

  switch (cardContent) {
    case "face":
      return <FaceCard onClick={changeToQuestion} number={number} />;
    case "question":
      return <QuestionCard text={question} />;
    case "answer":
      return <AnswerCard text={answer} />;
  }
}
