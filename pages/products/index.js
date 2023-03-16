import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <ProducttsList products={products} />
    </div>
  );
};

const ProducttsList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProducttCard key={product.id} product={product} />
      ))}
      {products?.length === 0 && (
        <div className="text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

const ProducttCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 block">
        <img
          className="h-64 w-full object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <div className="text-gray-700 mb-4">${product.price}</div>
          <div className="flex items-center">
            <div className="text-yellow-500">
              {Array.from(
                { length: Math.floor(product.rating.rate) },
                (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                )
              )}
            </div>
            <div className="text-gray-500 ml-2">
              {product.rating.count} reviews
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
