export default function Footer({ number, iconsArray }) {
  return (
    <div className="footer">
      <div className="done">
        <div>{number}/8 CONCLUÍDOS</div>
        <div className="icons">{iconsArray}</div>
      </div>
    </div>
  );
}
