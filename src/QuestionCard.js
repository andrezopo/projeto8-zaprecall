import setinha from "./assets/Imagens/setinha.png";

export default function QuestionCard({ text, onClick }) {
  return (
    <>
      <div className="question-card">{text}</div>
      <div className="turn-card">
        <img onClick={onClick} src={setinha} alt="setinha" />
      </div>
    </>
  );
}
