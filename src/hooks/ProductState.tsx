import { useState } from "react";
import type { Product } from "../models/product";
import productJson from "../assets/products.json";

function ProductState() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = () => {
    setProducts(productJson as Product[]);
  };

  return { products, setProducts, fetchData };
}

export default ProductState;
