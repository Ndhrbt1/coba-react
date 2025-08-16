function Counter() {
  let angka = 0;
  const tambah = () => {
    angka = angka + 1;
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
