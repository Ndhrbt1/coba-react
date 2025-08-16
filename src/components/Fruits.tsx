import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([
    "jambu",
    "mangga",
    "pisang",
    "apel",
    "nanas",
  ]);
  const newFruit = "alpukat";
  const addFruit = () => {
    setFruits([newFruit, ...fruits]);
  };
  return (
    <>
      <h2>List of Fruits:</h2>
      <ul className="list-group">
        {fruits.map((value) => (
          <li className="list-group-item">{value}</li>
        ))}
      </ul>
      <br />
      <button type="button" className="btn btn-primary" onClick={addFruit}>
        add fruit
      </button>
    </>
  );
}

export default Fruits;
