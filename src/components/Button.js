import React from "react";
const Button = ({ result }) => {
  return (
    <div className="result-button">
      <h3>{result} €</h3>
      <button
        className="button"
        onClick={() => {
          alert(
            "Thank you for choosing Tesla. Your car will be ready as soon as possible!"
          );
        }}
      >
        Buy !
      </button>
    </div>
  );
};
export default Button;
