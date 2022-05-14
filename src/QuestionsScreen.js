import React from "react";
import CardContent from "./CardContent";
import FaceCard from "./FaceCard";
import Flashcard from "./Flashcard";
import Logo from "./Logo";
import MainScreen from "./MainScreen";
import QuestionCard from "./QuestionCard";
import ZapRecall from "./ZapRecall";

export default function QuestionsScreen({ deck }) {
  return (
    <MainScreen>
      <div className="questions-logo">
        <Logo />
        <ZapRecall />
      </div>
      {deck.map((question, index) => (
        <Flashcard key={index}>
          <CardContent
            question={question.question}
            answer={question.answer}
            number={index}
          />
        </Flashcard>
      ))}
    </MainScreen>
  );
}
