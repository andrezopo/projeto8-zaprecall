import FooterMessage from "./FooterMessage";

export default function Footer({ number, iconsArray, rightAnswers }) {
  return (
    <div className="footer">
      <FooterMessage rightAnswers={rightAnswers} number={number} />
      <div className="done">
        <div>{number}/8 CONCLUÍDOS</div>
        <div className="icons">
          {iconsArray.map((icon, index) => (
            <ion-icon
              key={index}
              name={icon.name}
              class={icon.className + " md hydrated"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
