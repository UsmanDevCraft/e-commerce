import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const SearchApi = (props) => {

  // const {imageUrl, price, searchValue} = props;


  const [dataImg, setDataImg] = useState(null);
    

    useEffect(() => {
      // Check if the image URL is already saved in localStorage
      const existingUrl = localStorage.getItem("dataImg");
      if (existingUrl) {
        // If it's saved, update the state with the saved URL
        setDataImg(existingUrl);
      }
    }, []); // Empty dependency array to run only once on component mount


    const onClick = (e) => {
      e.preventDefault();

      // Retrieve the existing array of image URLs from localStorage
      const existingUrls = JSON.parse(localStorage.getItem("dataImgs")) || [];

       // Check if the URL is already in the array
      if ((!existingUrls.includes(imageUrl)) && imageUrl && imageUrl.length > 0) {
        // If it's not in the array, add it
        const updatedUrls = [...existingUrls, imageUrl];
        localStorage.setItem("dataImgs", JSON.stringify(updatedUrls));
        console.log(imageUrl);
        alert("Cart Saved Successfully, Visit Carts to see");
      }
    };




    const [searchValue, setSearchValue] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSearchValue(e.target.value);
        // console.log(searchValue)
    };


    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
    const pexelApiCall = async () => {
      setLoading(true);
        const response = await fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=80`, {
            method: "GET",
            headers: {
                "Authorization":"HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw"
            },
        });
        const json = await response.json();
        // console.log(json);
        setPhotos(json.photos);
      setLoading(false);
    };


    const onSubmit = (e) => {
        e.preventDefault();
        pexelApiCall();
    };




  return (

<>

<div className="container d-flex justify-content-center mt-5">
<form className="d-flex flex-wrap" role="search" onSubmit={onSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search Your Product Here" aria-label="Search" onChange={onChange}/>
        <button className="btn btn-outline-success mt-2" type="submit">Search</button>
</form>
</div>


<div className='d-flex justify-content-center flex-wrap mt-4 pb-5'>

    {loading && (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )}

    {photos && photos.map((element)=>{
        const imageUrl = element.src.original;
        const price = element.id;
      return (
        <div>
          <div className='container mt-3 text-center'>
          <div className="card cardHover cardBg text-white" style={{width: "18rem"}}>
            <img style={{height:"15rem"}} src={imageUrl} className="card-img-top" alt="No Image" />
            <div className="card-body">
              <h5 className="card-title">{searchValue}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className='fw-medium text-start'>Rs. {price/200}</p>
              <div className='d-flex gap-3'>
                  <p className='text-decoration-line-through'>Rs. {price/100}</p>
                  <p>50% off</p>
              </div>
              <div className='d-flex justify-content-center gap-3' style={{cursor: "pointer"}} onClick={onClick}>
              <FaShoppingCart className='mt-1' />
              <p>Add to Cart</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      )
    })}
</div>
</>
  )
}

export default SearchApi
