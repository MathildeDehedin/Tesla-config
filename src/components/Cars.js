import React from "react";
const Cars = ({ choice1, setChoice1 }) => {
  return (
    <div>
      <h2 className="title">Sélectionnez votre véhicule</h2>
      <div className="bloc-option">
        <button
          className="option1"
          onClick={() => {
            setChoice1(0);
          }}
        >
          <p>Grande Autonomie - 90 700€</p>
        </button>

        <button
          className="option2"
          onClick={() => {
            setChoice1(1);
          }}
        >
          <p>Performance - 106 700€</p>
        </button>
      </div>
    </div>
  );
};
export default Cars;
