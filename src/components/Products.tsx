import { useEffect, useState } from "react";
import ProductState from "../hooks/ProductState";
import type { Product } from "../models/product";

function Products() {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { products, fetchData, setProducts } = ProductState();

  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    const newObjProduct: Product = {
      id: crypto.randomUUID().slice(0, 5),
      name: newProduct,
      price: Math.floor(Math.random() * 10) + 10000,
    };
    setProducts([newObjProduct, ...products]);
    setNewProduct("");
  };

  const deleteProduct = (idProduct: string) => {
    setProducts(products.filter((value) => value.id != idProduct));
  };

  return (
    <>
      <h1>List of Product</h1>
      <ul className="list-group">
        {products.map((value) => (
          <li key={value.id} className="list-group-item">
            {value.id} {value.name} {value.price}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => deleteProduct(value.id)}
            >
              del
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
    </>
  );
}

export default Products;
