export default function AnswerCard({
  text,
  chooseAnswer,
  changeCard,
  setColor,
}) {
  function chosenAnswer(answer) {
    switch (answer) {
      case "wrong":
        chooseAnswer("close-circle");
        changeCard();
        setColor("red-decoration");
        break;
      case "almost wrong":
        chooseAnswer("help-circle");
        changeCard();
        setColor("dark-yellow-decoration");
        break;
      case "zap":
        chooseAnswer("checkmark-circle");
        changeCard();
        setColor("green-decoration");
        break;
    }
  }

  return (
    <>
      <div className="question-card">{text}</div>
      <div className="card-answers">
        <button
          onClick={() => chosenAnswer("wrong")}
          className="answer-btn red"
        >
          Não lembrei!
        </button>
        <button
          onClick={() => chosenAnswer("almost wrong")}
          className="answer-btn dark-yellow"
        >
          Quase não lembrei!
        </button>
        <button
          onClick={() => chosenAnswer("zap")}
          className="answer-btn green"
        >
          Zap!
        </button>
      </div>
    </>
  );
}
