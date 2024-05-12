import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartSaved = (props) => {
  // Retrieve the array of image URLs from localStorage
  const dataImgUrls = JSON.parse(localStorage.getItem("dataImgs")) || [];
  
  return (
    <div className='container mt-3 text-center d-flex justify-content-center flex-wrap gap-3'>
      {dataImgUrls.map((dataImgUrl, index) => (
        <div key={index} className="card cardHover cardBg text-white" style={{width: "18rem"}}>
          <img style={{height:"15rem"}} src={dataImgUrl} className="card-img-top" alt="No Image" />
          <div className="card-body">
            <h5 className="card-title">Cart</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className='fw-medium text-start'>Rs. 1234</p>
            <div className='d-flex gap-3'>
              <p className='text-decoration-line-through'>Rs. 1234</p>
              <p>50% off</p>
            </div>
            <div className='d-flex justify-content-center gap-3' style={{cursor: "pointer"}}>
              <FaShoppingCart className='mt-1' />
              <p>Remove From Cart</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartSaved;
