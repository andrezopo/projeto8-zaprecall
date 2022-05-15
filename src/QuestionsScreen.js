import React from "react";
import CardContent from "./CardContent";
import FaceCard from "./FaceCard";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Logo from "./Logo";
import MainScreen from "./MainScreen";
import QuestionCard from "./QuestionCard";
import ZapRecall from "./ZapRecall";

export default function QuestionsScreen({ deck }) {
  let [questionsAnswered, setQuestionsAnswered] = React.useState(0);
  const [footerArray, setFooterArray] = React.useState([]);

  function incrementAnswers() {
    setQuestionsAnswered((questionsAnswered = questionsAnswered + 1));
  }

  return (
    <>
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
              increment={incrementAnswers}
              footerArray={footerArray}
              arrayPush={setFooterArray}
            />
          </Flashcard>
        ))}
      </MainScreen>
      <Footer number={questionsAnswered} iconsArray={footerArray} />
    </>
  );
}
