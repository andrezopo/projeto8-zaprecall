import setinha from "./assets/Imagens/setinha.png";

export default function QuestionCard({ text }) {
  return (
    <>
      <div className="question-card">{text}</div>
      <div className="turn-card">
        <img src={setinha} alt="setinha" />
      </div>
    </>
  );
}
