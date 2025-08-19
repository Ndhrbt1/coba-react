import { ProductHooks } from "../hooks/ProductHooks";

function ProductList() {
  const {
    products,
    addProduct,
    newProduct,
    setNewProduct,
    deleteProduct,
    changeProduct,
    setChangeProduct,
    updateProduct,
  } = ProductHooks();

  return (
    <>
      <h1>List of Product</h1>
      <ul className="list-group">
        {products.map((value) => (
          <li key={value.id} className="list-group-item">
            {value.id} {value.name} {value.email}{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => deleteProduct(value.id)}
            >
              del
            </button>{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => updateProduct(value.id)}
            >
              upd
            </button>
          </li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        className="form-control"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <br />
      <button type="button" className="btn btn-primary" onClick={addProduct}>
        add product
      </button>
      <br />
      <br />
      <input
        type="text"
        className="form-control"
        value={changeProduct}
        onChange={(e) => setChangeProduct(e.target.value)}
      />
    </>
  );
}

export default ProductList;
