import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const ApiImages = (props) => {

  const {imgUrl} = props;

  return (
    <div className='container mt-2'>
      <div className="card cardHover cardBg text-white" style={{width: "18rem"}}>
        <img style={{height:"10rem"}} src={imgUrl} className="card-img-top" alt="No Image" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='d-flex justify-content-center gap-3'>
          <FaShoppingCart />
          <p>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiImages
