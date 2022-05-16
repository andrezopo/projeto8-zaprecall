import party from "./assets/Imagens/party.png";
import sad from "./assets/Imagens/sad.png";
import EndMessage from "./EndMessage";

export default function FooterMessage({ rightAnswers, number }) {
  const successMessage = `Você não esqueceu de nenhum flashcard!`;
  const needImprovement = "Ainda faltam alguns...\n Mas não desanime!";

  if (rightAnswers === 8 && number === 8) {
    return <EndMessage text={successMessage} title="Parabéns!" img={party} />;
  } else if (number === 8) {
    return <EndMessage text={needImprovement} title="Putz..." img={sad} />;
  } else return "";
}
