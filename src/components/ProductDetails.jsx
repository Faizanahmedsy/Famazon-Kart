import { useParams } from "react-router-dom";


function ProductDetails({ products }) {
  const { index } = useParams();
  const product = products[index];
  return (
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      <p className="description">
        {" "}
        <span>Description</span>: <br /> {product.description}
      </p>
      <p className="size">
        {" "}
        <span>Size</span>: {product.size}
      </p>
      <p className="color">
        {" "}
        <span>Color</span>: {product.color}
      </p>
    </div>
  );
}
export default ProductDetails;
