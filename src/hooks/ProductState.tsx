import { useState } from "react";
import type { Product } from "../models/product";
// import productJson from "../assets/products.json";

function ProductState() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    // setProducts(productJson as Product[]);
    const data = await fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer be43c46d7671a02d361a3fb75322aca606d37288dc23be7f102e255ad5aef407",
      },
    });
    const productJson: Product[] = await data.json();
    setProducts(productJson);
  };

  return { products, setProducts, fetchData };
}

export default ProductState;
