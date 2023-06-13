import { useState } from "react";
import { Link } from "react-router-dom";
import MyDropzone from "./MyDropzone";

const ProductForm = ({ addProduct }) => {

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);


  const [description, setDescription] = useState("");

  const [size, setSize] = useState("");
  const [sizeIsValid, setSizeIsValid] = useState(false);
  const [sizeTouched, setSizeTouched] = useState(false);


  const [color, setColor] = useState("");
  const [colorIsValid, setColorIsValid] = useState(false);
  const [colorTouched, setColorTouched] = useState(false);


  const [image, setImage] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);



  // -------------------------------Form submittion handler 


  const nameIsInvalid = nameTouched && !nameIsValid;

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setColorTouched(true);
    setSizeTouched(true);
    
        if(name.trim() == ''){
          setNameIsValid(false);
          return; 
        }
        setNameIsValid(true);

    const newProduct = {
      name: name,
      description: description,
      size: size,
      color: color,
      image: image,
    };
    setProducts([...products, newProduct]);
    setName("");
    setDescription("");
    setSize("");
    setColor("");
    setImage(null);





    
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleAddProductClick = () => {
    setShowForm(true);
  };



  return (
    <div>
      <div className="head-section">
        <h2>Famazon</h2>
        {!showForm && (
          <button
            onClick={handleAddProductClick}
            className="btn btn-primary new-products-button"
          >
            Add Products
          </button>
        )}
      </div>

      {/* ----------------------------Add Products Buttom  */}

      {/* ----------------------------Add Products Form  */}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:*</label>
          <div className="container d-flex justify-content-center">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          {nameIsInvalid && (
            <p className="error-text">Name must not be empty</p>
          )}

          <label htmlFor="description">Description:</label>
          <div className="container d-flex justify-content-center">
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></input>
          </div>
          <div className="container size-color-selecter">
            <label htmlFor="size" className="size-color-label">
              Size:
            </label>
            <div className="container d-flex justify-content-center">
              <select
                name="size"
                id="size"
                value={size}
                onChange={(event) => setSize(event.target.value)}
              >
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <label htmlFor="color" className="size-color-label">
              Color:
            </label>
            <div className="container d-flex justify-content-center">
              <select
                name="color"
                id="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
              </select>
            </div>
          </div>
          <div className="addimage container d-flex justify-content-center">
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={handleImageChange}
            ></input>
          </div>

          <MyDropzone setImage={setImage} />

          <button type="submit" className="btn btn-dark">
            Add Product
          </button>
        </form>
      )}

      {/* ---------------------------List of Products  */}
      <h2 className="title">Your Products:</h2>
      <div className="ProductList">
        {products.length === 0 ? (
          <p className="subtitle">No products added yet ☹️</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-card">
              {product.image && <img src={product.image} alt="Product" />}

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

                <Link to={`/product/${index}`}>
                  <button>See Details</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ProductForm;
