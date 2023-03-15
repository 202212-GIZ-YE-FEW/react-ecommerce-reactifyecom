import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const GetAllProducts = () => {
    const [product, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            });

    }, [])

    if (!product) return <p>still Loading...</p>;

    return (

        <>
            {
                product.map((item) => {
                    return (
                       
                        <section key={item.id}>

                            <ProductCard
                                name={item.title}
                                image={item.image}
                                price={`$${item.price}`}
                            />
                        </section>
                    )
                })
            }

        </>
    );


};

export default GetAllProducts;
