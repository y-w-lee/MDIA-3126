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

    const [media, setMedia] = useState(null);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=2";
    
    async function fetchMedia() {
        const response = await fetch(API_URL);
            // console.log(response);
        const data = await response.json(); // store responses in data variable
            // console.log(data);
        setMedia(data); //using data to set our state
    }


    const MediaOutput = () => {
        if (media) {

            let mediaList = [];

            media.forEach((mediaItem, index) => {
                mediaList.push(
                    <li className="mb-2 text-center" key={index}>
                        <h2>{mediaItem.title}</h2>
                        <img src={mediaItem.url} alt={mediaItem.explanation}/>
                        <p>{mediaItem.explanation}</p>
                    </li>
                );
            });

            return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                {/* OUR MEDIA WILL BE HERE */}
                <ul>{mediaList}</ul>
            </div>
            )
        }

        return (
            <div className="p-4 mb-4 border-4 border-black text-center">
                🌭🌭🌭🌭🌭🌭NO 🌭🌭🌭🌭MEDIA🌭🌭🌭🌭YET
            </div>
        )
    }

    return (
        <div className="p-4 bg-yellow-300">
            <header className="p-4 mb-4 border-4 border-black text-center">
                <h1 className="text-4xl mb-4">Welcome to my product page!</h1>
                    <button
                        className="text-yellow-300 bg-black p-4"
                            onClick={fetchMedia}
                    >
                        🌭 Fetch Media 
                    </button>
            </header>

            <MediaOutput />
        </div>
    );
}

