import "./TechStack.css";

function TechStack({ text, newSrc, newAlt }) {
  return (
    <div>
      <div className="techStackContainer">
        <img src={newSrc} alt={newAlt} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TechStack;
