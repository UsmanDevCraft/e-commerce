import React, { useContext } from 'react'
import '../components_css/homeslider.css'
import { AiOutlineSafety } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosPricetags } from "react-icons/io";
import { GiStamper } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { GiShirt } from "react-icons/gi";
import { PiRabbitFill } from "react-icons/pi";
import { GiSofa } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { TbFridge } from "react-icons/tb";
import { FaFootball } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdOutlineBikeScooter } from "react-icons/md";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Homeslider = (props) => {

    const history = useHistory();

    const handleClick = (categoryHeading, e) => {
        e.preventDefault();
        localStorage.setItem("categoryHeading" , categoryHeading);
        history.push('/ApiHomeSliderHeadings')
    };


  return (
    <>
    {/* ----------------------- div for the slider and items list ----------------------- */}
    <div className='home container d-flex justify-content-center align-items-center gap-2 mt-3'>
      
        {/* ----------------------- The Card headings part ----------------------- */}
            <div className="cardDiv card cardBg rounded-3">
            <div className="card-body line-height fw-lighter">
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Groceries&Pets" , e)}}><p className="card-text listStripLine"><MdLocalGroceryStore className='me-3'/>Groceries & Pets</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Health&Beauty" , e)}}><p className="card-text listStripLine"><GiHealthCapsule className='me-3'/>Health & Beauty</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Men's Fashion" , e)}}><p className="card-text listStripLine"><IoShirt className='me-3'/>Men's Fashion</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Women's Fashion" , e)}}><p className="card-text listStripLine"><GiShirt className='me-3'/>Women's Fashion</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Mother & Baby" , e)}}><p className="card-text listStripLine"><PiRabbitFill className='me-3'/>Mother & Baby</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Home & Lifestyle" , e)}}><p className="card-text listStripLine"><GiSofa className='me-3'/>Home & Lifestyle</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Electronic Devices" , e)}}><p className="card-text listStripLine"><GiLaptop className='me-3'/>Electronic Devices</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Electronic Accessories" , e)}}><p className="card-text listStripLine"><FaMobileScreenButton className='me-3'/>Electronic Accessories</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("TV & Home Appliances" , e)}}><p className="card-text listStripLine"><TbFridge className='me-3'/>TV & Home Appliances</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Sports & Outdoor" , e)}}><p className="card-text listStripLine"><FaFootball className='me-3'/>Sports & Outdoor</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Watches, Bags & Jewellery" , e)}}><p className="card-text listStripLine"><FaClock className='me-3'/>Watches, Bags & Jewellery</p></a>
                <a href="" className='homeATag lh-lg' onClick={(e)=>{handleClick("Automotive & Motorbike" , e)}}><p className="card-text listStripLine"><MdOutlineBikeScooter className='me-3'/>Automotive & Motorbike</p></a>
            </div>
        </div>




        {/* ----------------------- The Carousel slider part ----------------------- */}
        <div id="carouselExampleIndicators" className="carouselSlider carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/carousel_poster_02.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/carousel_poster_01.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/carousel_poster_04.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/carousel_poster_05.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/carousel_poster_06.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="/carousel_poster_07.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    </div>


    {/* ----------------------- div for the strip line content ----------------------- */}
    <Link to="/listStripLine" className='aTagStyle'>
    <div className="listStripLine container d-flex justify-content-center align-items-center gap-4 mt-5 flex-wrap text-white cardBg pt-3 rounded-4">
        <p className='d-flex justify-content-center align-items-center gap-1'><AiOutlineSafety />Safe Payments</p>
        <p className='d-flex justify-content-center align-items-center gap-1'><TbTruckDelivery />Nationwide Delivery</p>
        <p className='d-flex justify-content-center align-items-center gap-1'><GiReturnArrow />Free & Easy Returns</p>
        <p className='d-flex justify-content-center align-items-center gap-1'><IoIosPricetags />Best Price Guaranteed</p>
        <p className='d-flex justify-content-center align-items-center gap-1'><GiStamper />100% Authentic Products</p>
        <p className='d-flex justify-content-center align-items-center gap-1'><FaShoppingCart />Daraz Verified</p>
    </div>
    </Link>
    </>
  )
}

export default Homeslider
