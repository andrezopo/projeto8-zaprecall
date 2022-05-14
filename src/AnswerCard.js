export default function AnswerCard({ text }) {
  return (
    <>
      <div className="question-card">{text}</div>
      <div className="card-answers">
        <button className="answer-btn red">Não lembrei!</button>
        <button className="answer-btn dark-yellow">Quase não lembrei!</button>
        <button className="answer-btn green">Zap!</button>
      </div>
    </>
  );
}
