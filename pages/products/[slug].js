import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

/* 
  Sample data from https://fakestoreapi.com/products/1
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
}
*/

export default function ProductLayout() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);
  const { slug } = query;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="section flex items-center justify-center">
        <div className="max-w-screen-lg w-full x-4 flex flex-col items-center justify-center">
          <Product product={product || {}} />
        </div>
      </div>
    </>
  );
}

// new layout for product item page, it calls the url above and then list item details

const Product = ({ product }) => {
  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="md:flex rounded-lg p-6 bg-white shadow-md">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-lg"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
          <div className="text-gray-600 mt-2">{product.category}</div>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <div className="flex items-center mt-4">
            <div className="text-gray-900 font-bold text-xl">
              ${product.price}
            </div>
            <div className="ml-4 text-sm text-gray-600">
              <span className="text-yellow-500">{product.rating.rate}</span>
              <span className="mx-1">|</span>
              <span className="text-gray-700">
                {product.rating.count} reviews
              </span>
            </div>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
