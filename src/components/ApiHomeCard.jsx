import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const ApiHomeCard = (props) => {

    const {imgSrc, price, showAlert} = props;
    const categoryHeading = localStorage.getItem("categoryHeading");

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
      if ((!existingUrls.includes(imgSrc)) && imgSrc && imgSrc.length > 0) {
        // If it's not in the array, add it
        const updatedUrls = [...existingUrls, imgSrc];
        localStorage.setItem("dataImgs", JSON.stringify(updatedUrls));
        console.log(imgSrc);
        alert("Cart Saved Successfully, Visit Carts to see");
      }
    };


  return (
    <div className='container mt-3 text-center'>
      <div className="card cardHover cardBg text-white" style={{width: "18rem"}}>
        <img style={{height:"15rem"}} src={imgSrc} className="card-img-top" alt="No Image" />
        <div className="card-body">
          <h5 className="card-title">{categoryHeading}</h5>
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
  )
}

export default ApiHomeCard
