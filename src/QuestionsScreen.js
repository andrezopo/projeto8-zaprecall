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
  const [whichIcon, setWhichIcon] = React.useState("");
  let [footerArray, setFooterArray] = React.useState([]);

  function incrementAnswers() {
    setQuestionsAnswered((questionsAnswered = questionsAnswered + 1));
  }

  if (whichIcon === "red") {
    footerArray.push({ name: "close-circle", className: "red-decoration" });
  }
  if (whichIcon === "yellow") {
    footerArray.push({
      name: "help-circle",
      className: "dark-yellow-decoration",
    });
  }
  if (whichIcon === "green") {
    footerArray.push({
      name: "checkmark-circle",
      className: "green-decoration",
    });
  }
  console.log(footerArray);

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
              whichIcon={setWhichIcon}
            />
          </Flashcard>
        ))}
      </MainScreen>
      <Footer number={questionsAnswered} iconsArray={footerArray} />
    </>
  );
}
