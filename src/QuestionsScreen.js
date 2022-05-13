import Flashcard from "./Flashcard";
import Logo from "./Logo";
import MainScreen from "./MainScreen";
import ZapRecall from "./ZapRecall";

export default function QuestionsScreen({ deck }) {
  return (
    <MainScreen>
      <div className="questions-logo">
        <Logo />
        <ZapRecall />
      </div>
      {deck.map((question, index) => (
        <Flashcard number={index} />
      ))}
    </MainScreen>
  );
}
