import React, { useEffect, useState } from 'react'
import ApiCategoryCard from './ApiCategoryCard';

const ApiCategory = () => {

    const category = localStorage.getItem("category")
    // console.log("Category " + category);

        const [photos, setPhotos] = useState([]);

    {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
    const pexelApiCall = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=80`, {
            method: "GET",
            headers: {
                "Authorization":"HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw"
            },
        });
        const json = await response.json();
        // console.log(json)
        setPhotos(json.photos);
    };

    useEffect(()=>{
        pexelApiCall();
    } ,[]);


  return (
    <>
    <h1 className='container text-center mt-2'>Showing Results for {category}</h1>
    <div className='d-flex justify-content-center flex-wrap mt-4 pb-5'>
    {    photos && photos.map((element)=>{
        const imgSrc = element.src.original;
        const price = element.id;
        // console.log("img url for " + imgUrl);
        return <div>
            <ApiCategoryCard imgSrc={imgSrc} price={price} />
        </div>
    })}
    </div>
    </>
  )
}

export default ApiCategory
