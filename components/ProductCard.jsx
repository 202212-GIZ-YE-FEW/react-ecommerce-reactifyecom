import React from "react";

function ProductCard({ name, image, price }) {
  return (
    <>

      <div className="card">

        <div className="image">
          <img src={image} alt={name} />

        </div>
        <div className="starts"><span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star unchecked"></span>
          <span class="fa fa-star unchecked"></span></div>
        <div className="details">
          <h4 className="title">{name}</h4>
          <p id='price'><b>{price}</b></p>
        </div>
        <button type="button" class="btncart">Add to cart</button>
      </div>
    </>
  );
}

export default ProductCard;