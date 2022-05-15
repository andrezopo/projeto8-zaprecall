export default function AnswerCard({
  text,
  chooseAnswer,
  changeCard,
  setColor,
  increment,
  footerArray,
  arrayPush,
}) {
  function chosenAnswer(answer) {
    switch (answer) {
      case "wrong":
        chooseAnswer("close-circle");
        changeCard();
        setColor("red-decoration");
        arrayPush(
          footerArray.push({
            className: "red-decoration",
            name: "close-circle",
          })
        );
        break;
      case "almost wrong":
        chooseAnswer("help-circle");
        changeCard();
        setColor("dark-yellow-decoration");
        arrayPush(
          footerArray.push({
            className: "dark-yellow-decoration",
            name: "help-circle",
          })
        );
        break;
      case "zap":
        chooseAnswer("checkmark-circle");
        changeCard();
        setColor("green-decoration");
        arrayPush(
          footerArray.push({
            className: "green-decoration",
            name: "checkmark-circle",
          })
        );
        break;
    }
    increment();
    console.log(footerArray);
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
