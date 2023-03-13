import React from "react";
import ProductCard from "../components/ProductCard";


function ProductList() {
  return (
    <div>
      <h1 className="Popular">View More <i  class='fas'>&#xf061;</i></h1>
      <section className="list">

        <div className="card-cover">

          <div className="details-cover">
            <h4 className="title">Popular Category</h4>
            <p><a href="#">Mobile</a></p>
            <p><a href="#">Electronics</a></p>
            <p><a href="#">Game</a></p>
          </div>
        </div>


        <ProductCard
          name="JBL Clip 4 Orange Portable Speaker"
          image="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75"
          price="$133.00"
        />
        <ProductCard
          name="Samsung Galaxy A52 (8/128 GB)"
          image="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsamsung-galaxy-a52-8128-gb-2022-09-26-12-12-12-9319.png&w=1920&q=75"
          price="$9.99"
        />

        <ProductCard
          name="Xbox Wireless Game Controller"
          image="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fxbox-wireless-game-controller-2022-09-26-12-20-19-1096.png&w=1920&q=75"
          price="$89.99"
        />
      </section>
    </div>
  );
}

export default ProductList;
