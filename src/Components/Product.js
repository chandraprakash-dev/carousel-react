import React from "react";

function Product(props) {
  let style;
  if(props.data.id >= props.index && props.data.id <= props.index + 2) {
    style = 'show';
    if(props.data.id === props.index + 1) style += ' big';
  } else {
    style = 'slide';
  }

  return(
    <div className={"product " + style}>
      <img src={props.data.image} alt={props.data.name} />
      <p>{props.data.name}</p>
      <p>{'Rs. ' + props.data.price}</p>
      <p>{props.data.category}</p>
    </div>
  )
}

export default Product;