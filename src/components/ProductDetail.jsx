import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate("/products"); 
  };

  return (
    <div>
      <br />
      <h1>Product Detail</h1>
      <h1>Detail for Product ID : {id}</h1>
      <br />
      <button onClick={handleBackClick} className="text-blue-500 text-lg font-bold">กลับไปหน้าแรก</button> 
    </div>
  ); 
}

export default ProductDetail;
