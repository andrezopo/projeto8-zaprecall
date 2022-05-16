export default function EndMessage({ text, img, title }) {
  return (
    <div className="success">
      <div className="congrats">
        <img src={img} alt="" />
        <span> {title}</span>
      </div>
      <div className="message">{text}</div>
    </div>
  );
}
