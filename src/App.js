import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cars from "./components/Cars";
import Colors from "./components/Colors";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [choice1, setChoice1] = useState(0);
  const [choice2, setChoice2] = useState(0);

  const result = (choice1, choice2) => {
    let total = 0;
    if (choice1 === 0) {
      total += 90700;
    } else {
      total += 106700;
    }
    if (choice2 === 1) {
      total += 1000;
    }
    return total;
  };
  return (
    <div className="App">
      <Header />
      <Cars choice1={choice1} setChoice1={setChoice1} />
      <Colors choice2={choice2} setChoice2={setChoice2} />
      <Button result={result(choice1, choice2)} />
      <Footer />
    </div>
  );
}

export default App;
