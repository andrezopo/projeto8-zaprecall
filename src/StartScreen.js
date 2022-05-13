import Logo from "./Logo";
import MainScreen from "./MainScreen";
import ZapRecall from "./ZapRecall";

export default function StartScreen({ showQuestions }) {
  return (
    <MainScreen>
      <Logo />
      <ZapRecall />
      <button className="button" onClick={showQuestions}>
        Iniciar Recall
      </button>
    </MainScreen>
  );
}
