import React from "react";
const Colors = ({ choice2, setChoice2 }) => {
  return (
    <div>
      <h2 className="title">Sélectionnez la couleur</h2>
      <div className="bloc-option">
        <button
          className="option3"
          onClick={() => {
            setChoice2(0);
          }}
        >
          <p> Blanc Nacré Multicouches - 0€</p>
        </button>
        <button
          className="option4"
          onClick={() => {
            setChoice2(1);
          }}
        >
          <p> Noir Uni - 1 000 €</p>
        </button>
      </div>
    </div>
  );
};

export default Colors;
