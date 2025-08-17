import { useState } from "react";
import type { Product } from "../models/product";
// import productJson from "../assets/products.json";

function ProductState() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    // setProducts(productJson as Product[]);
    const data = await fetch("/products.json");
    const productJson: Product[] = await data.json();
    setProducts(productJson);
  };

  return { products, setProducts, fetchData };
}

export default ProductState;
