import "./button.scss";

const button = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <div className="btn">
      <button className="Envoie" type="button" onClick={handleClick}>
        Envoyer
      </button>
    </div>
  );
};
export default button;