import React from "react";

function Product(props) {
  return(
    <div className="product">
      <div className="image"><img src={props.data.image} alt={props.data.name} /></div>
      <p>{props.data.name}</p>
      <p>{props.data.price}</p>
      <p>{props.data.category}</p>
    </div>
  )
}

export default Product;