"use client";
// // To-Do List
// // - Button that fetches
// // X Button container
// // - Container for display (empty loading/ fulfilled states)
// // - fetch content to display (handle and format)
// // - store my content somewhere, in your state!
// // - function to clear data
// // - loading state
// // - error handling
// // - styling
// // - breakpoints (mobile-first)

import { useState } from "react";

export default function Home() {
  // const [state, setState] = useState(); -- this is the default format

  const [loading, setLoading] = useState(false);     // setting a loading state
  const [imageData, setImageData] = useState(null);   // setting image data state

 async function fetchImages() {    // async function bc we are talking to a server
   const API_URL="https://picsum.photos/v2/list?limit=5"
   setLoading(true);
  const response = await fetch(API_URL);
  const data = await response.json();
                             // why .json? it gets jsonified...
               // const debuggerVar = "test var";
               // const moreDebuggerVar = "another test var"
              // debugger;

  //  console.log("button clicked");
  //  alert("button clicked");

   setImageData(data);
   setLoading(false);

 }

 const Header = () => {   
  return (     
 <section>       
    <h1>Midterm App</h1>        
      <button className='border-2 border-black p-2'         
      onClick={fetchImages}>
        Fetch Image       
      </button>     
  </section>   
  ); 
};

 // describe the container and what it holds properly
 const ImageListContainer = () => {
   if (loading) {
     return (
     <section>Loading...</section>
     )
   };

   if (imageData) {
    const imageListItems = [];

     imageData.forEach((image)=> {

     imageListItems.push(
      <article key={image.id} className="mb-2">
        <img src={image.download_url} />
        <p> Author: {image.author}</p>
        <a href={image.download_url}>Download this image!</a>
        <hr />
      </article>
    )
  });

    return (
      <section>
        {imageListItems}
       </section>
    )
   }
   
   <section>
     No images fetched...
   </section>
 }

   return (
     <div className='m-2'>
      <Header />
      <ImageListContainer />
    </div>
   );
 }


