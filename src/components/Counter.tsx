import { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  const tambah = () => {
    setAngka((angka) => angka + 1);
    console.log(angka);
  };
  return (
    <>
      <h1>{angka}</h1>
      <button onClick={tambah}>tambah</button>
    </>
  );
}

export default Counter;
