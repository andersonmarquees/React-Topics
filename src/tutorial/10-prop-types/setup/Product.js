import React from "react";
import ProtoTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ name, price, image }) => {
  // if image its not there, image.url don't is check, then no error
  // const url = image && image.url;
  return (
    <article className="product">
      <img src={image.url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};
Product.protoTypes = {
  image: ProtoTypes.object.isRequired,
  name: ProtoTypes.string.isRequired,
  price: ProtoTypes.number.isRequired,
};
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
};
export default Product;
