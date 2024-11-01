import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); 

  return (
    <div>
        <br />
    <h1>Product Detail</h1>
    <h1>Detail for Product ID : {id}</h1>
    </div>
); 
}

export default ProductDetail;
