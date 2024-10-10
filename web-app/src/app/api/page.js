"use client";
// *** use client, so it is not rendered on server. 
import { useState } from 'react';

export default function Page() {
    // button to click, to call API ("🌭 Fetch products")
    // function that calls the API (fetchProducts)
    // somewhere to output the data I get back (ProductOutput function)
    // iterator to work through the data, and format it
    // display an empty and fulfilled state (if statement)
    // create a state to contain my data [products, setProducts]

    const [products, setProducts] = useState(null);
    const API_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    
    async function fetchProducts() {
        const response = await fetch(API_URL);
            // console.log(response);
        const data = await response.json(); // store responses in data variable
            // console.log(data);
        setProducts(data); //using data to set our state
    }


    const ProductOutput = () => {
        if (products) {

            let productsList = [];

            products.forEach((product, index) => {
                productsList.push(
                    <li key={index}>
                        {product.name}
                    </li>
                );
            });

            return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                {/* OUR PRODUCTS WILL BE HERE */}
                <ul>{productsList}</ul>
            </div>
            )
        }

        return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                🌭🌭🌭🌭🌭🌭NO 🌭🌭🌭🌭PRODUCTS🌭🌭🌭🌭YET
            </div>
        )
    }

    return (
        <div className="p-4 bg-yellow-300">
            <header className="p-4 mb-4 border-4 border-black text-center">
                <h1 className="text-4xl mb-4">Welcome to my product page!</h1>
                    <button
                        className="text-yellow-300 bg-black p-4"
                            onClick={fetchProducts}
                    >
                        🌭 Fetch products 
                    </button>
            </header>

            <ProductOutput />
        </div>
    );
}

