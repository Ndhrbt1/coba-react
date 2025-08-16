import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([
    "jambu",
    "mangga",
    "pisang",
    "apel",
    "nanas",
  ]);

  const addFruit = () => {
    const newFruit = "alpukat";
    setFruits([newFruit, ...fruits]);
  };

  const deleteFruit = (idFruit: number) => {
    setFruits(fruits.filter((_, index) => index != idFruit));
  };

  const updateFruit = (idFruit: number) => {
    const changeFruit = "markisa";
    setFruits(
      fruits.map((value, index) => (index == idFruit ? changeFruit : value))
    );
  };

  return (
    <>
      <h2>List of Fruits:</h2>
      <ul className="list-group">
        {fruits.map((value, index) => (
          <li className="list-group-item">
            {value}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => deleteFruit(index)}
            >
              delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => updateFruit(index)}
            >
              update
            </button>
          </li>
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
