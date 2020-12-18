import React from "react";

function Product(props) {
  return(
    <div className="product">
      <p>{props.data.name}</p>
      <p>{props.data.price}</p>
      <p>{props.data.category}</p>
    </div>
  )
}

export default Product;