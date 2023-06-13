import { useState } from "react";
import ProductForm from "./ProductForm";

const ProductItem = () => {
  const [products, setProducts] = useState([]);


  const addProductHandler = (newProduct) => {
    setProducts([...products, newProduct]);
  };
 
  return (
    <>
      <ProductForm onAddProduct={addProductHandler} />
    </>
  );
};
export default ProductItem;
