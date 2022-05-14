export default function FaceCard({ number, onClick }) {
  return (
    <div className="face-card">
      <span>Pergunta {number + 1}</span>
      <ion-icon name="play-outline"></ion-icon>
    </div>
  );
}
