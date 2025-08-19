import { useEffect, useState } from "react";
import ProductState from "../hooks/ProductState";
import type { Product } from "../models/product";

function ProductList() {
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { products, fetchData, setProducts } = ProductState();

  const [newProduct, setNewProduct] = useState("");

  const addProduct = async () => {
    const newObjProduct: Product = {
      name: newProduct,
      email: `${newProduct.toLowerCase()}@example.com`,
      gender: "female",
      status: "active",
    };

    try {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer be43c46d7671a02d361a3fb75322aca606d37288dc23be7f102e255ad5aef407",
        },
        body: JSON.stringify(newObjProduct),
      });

      if (!response.ok) {
        const errorData = response.json();
        console.error(errorData);
        return;
      }

      const data = await response.json();
      setProducts([data, ...products]);
      setNewProduct("");
    } catch (error) {
      console.error(error);
    }
  };

  // const deleteProduct = (idProduct: string) => {
  //   setProducts(products.filter((value) => value.id != idProduct));
  // };

  // const [changeProduct, setChangeProduct] = useState("");
  // const updateProduct = (idProduct: string) => {
  //   setProducts(
  //     products.map((value) =>
  //       idProduct == value.id
  //         ? {
  //             id: value.id,
  //             name: changeProduct,
  //             price: value.price,
  //           }
  //         : value
  //     )
  //   );

  //   setChangeProduct("");
  // };

  return (
    <>
      <h1>List of Product</h1>
      <ul className="list-group">
        {products.map((value) => (
          <li key={value.id} className="list-group-item">
            {value.id} {value.name} {value.email}
            {/* <button
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
            </button> */}
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
      {/* <input
        type="text"
        className="form-control"
        value={changeProduct}
        onChange={(e) => setChangeProduct(e.target.value)}
      /> */}
    </>
  );
}

export default ProductList;
