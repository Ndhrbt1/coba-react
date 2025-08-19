import { useEffect, useState } from "react";
import type { Product } from "../models/product";

const apiUrl = "https://gorest.co.in/public/v2/users";
const bearerToken =
  "Bearer be43c46d7671a02d361a3fb75322aca606d37288dc23be7f102e255ad5aef407";
const header = {
  "Content-Type": "application/json",
  Authorization: bearerToken,
};

export const ProductHooks = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    const data = await fetch(apiUrl, {
      method: "GET",
      headers: header,
    });
    const productJson: Product[] = await data.json();
    setProducts(productJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [newProduct, setNewProduct] = useState("");

  const addProduct = async () => {
    const newObjProduct: Product = {
      name: newProduct,
      email: `${newProduct.toLowerCase()}@example.com`,
      gender: "female",
      status: "active",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: header,
        body: JSON.stringify(newObjProduct),
      });

      if (!response.ok) {
        const errorData = await response.json();
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

  const deleteProduct = async (idProduct: number | undefined) => {
    try {
      await fetch(`${apiUrl}/${idProduct}`, {
        method: "DELETE",
        headers: header,
      });

      setProducts(products.filter((value) => value.id != idProduct));
    } catch (error) {
      console.error(error);
    }
  };

  const [changeProduct, setChangeProduct] = useState("");
  const updateProduct = async (idProduct: number | undefined) => {
    const changeObjProduct = {
      name: changeProduct,
    };

    try {
      const response = await fetch(`${apiUrl}/${idProduct}`, {
        method: "PATCH",
        headers: header,
        body: JSON.stringify(changeObjProduct),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        return;
      }

      const data = await response.json();
      console.log(`ini data ${data["name"]}`);

      setProducts(
        products.map((value) => (idProduct === value.id ? data : value))
      );

      setChangeProduct("");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    products,
    setProducts,
    fetchData,
    newProduct,
    setNewProduct,
    addProduct,
    deleteProduct,
    updateProduct,
    changeProduct,
    setChangeProduct,
  };
};
