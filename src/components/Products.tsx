import { useEffect } from "react";
import ProductState from "../hooks/ProductState";

function Products() {
  const { products, fetchData } = ProductState();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>List of Product</h1>
      <ul className="list-group">
        {products.map((value) => (
          <li key={value.id} className="list-group-item">
            {value.id} {value.name} {value.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
