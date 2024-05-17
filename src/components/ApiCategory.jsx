import React, { useEffect, useState } from 'react'
import ApiCategoryCard from './ApiCategoryCard';

const ApiCategory = () => {

    const category = localStorage.getItem("category")
    // console.log("Category " + category);

        const [photos, setPhotos] = useState([]);
        const [loading, setLoading] = useState(false);

    {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
    const pexelApiCall = async () => {
        setLoading(true);
        const response = await fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=80`, {
            method: "GET",
            headers: {
                "Authorization":"HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw"
            },
        });
        const json = await response.json();
        // console.log(json)
        setPhotos(json.photos);
        setLoading(false);
    };

    useEffect(()=>{
        pexelApiCall();
    } ,[]);


  return (
    <>
    <h1 className='container text-center mt-2'>Showing Results for {category}</h1>
    <div className='d-flex justify-content-center flex-wrap mt-4 pb-5'>
        {loading && (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )}
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
