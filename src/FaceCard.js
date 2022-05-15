export default function FaceCard({ number, onClick }) {
  return (
    <div onClick={onClick} className="face-card">
      <span>Pergunta {number + 1}</span>
      <ion-icon name="play-outline"></ion-icon>
    </div>
  );
}
