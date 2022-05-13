export default function Flashcard({ number }) {
  return (
    <button className="flashcard">
      <span>Pergunta {number + 1}</span>
      <ion-icon name="play-outline"></ion-icon>
    </button>
  );
}
