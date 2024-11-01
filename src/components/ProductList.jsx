import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

function ProductList() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate("/"); 
  };

  return (
    <div>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleBackClick} className="text-blue-500 text-lg font-bold">Back</button> 
    </div>
  );
}

export default ProductList;
