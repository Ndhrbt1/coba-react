import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    setAngka(5);
  }, []);

  useEffect(() => {
    console.log(angka);
  }, [angka]);

  const tambah = () => {
    setAngka((angka) => angka + 1);
  };
  return (
    <>
      <h1>{angka}</h1>
      <button onClick={tambah}>tambah</button>
    </>
  );
}

export default Counter;
