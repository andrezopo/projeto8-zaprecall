export default function ResultCard({ number, icon, color }) {
  return (
    <div className={color + " face-card line-through"}>
      <span>Pergunta {number + 1}</span>
      <ion-icon name={icon}></ion-icon>
    </div>
  );
}
