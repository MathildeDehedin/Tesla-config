import React from "react";
const Button = ({ result }) => {
  return (
    <div className="result-button">
      <h3>{result} €</h3>
      <button
        className="button"
        onClick={() => {
          alert("Thank you for choosing Tesla");
        }}
      >
        Buy !
      </button>
    </div>
  );
};
export default Button;
