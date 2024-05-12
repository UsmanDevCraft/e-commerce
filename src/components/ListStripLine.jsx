import React from 'react'
import '../components_css/ListStripLine.css'
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiKeyReturnFill } from "react-icons/pi";



const ListStripLine = () => {
  return (
    <>
    <div className='listLineImgDiv'>
      <img className='listLineImg' src="/carousel_poster_02.png" alt="/carousel_poster_01.png" />
    </div>
    <div className="container d-flex justify-content-center align-items-center gap-5 flex-wrap mt-4 pb-3">
        
        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><TbTruckDelivery /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">Nationwide Delivery</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><IoIosPricetags /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">Best Price Guaranteed</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><MdOutlineSecurity /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">Company Verified</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><MdOutlineSystemSecurityUpdateGood /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">100% Authentic</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><RiSecurePaymentFill /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">Safe Payments</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

        <div className="card rounded-3 cardBg text-white" style={{width: "18rem" }}>
            <div className="card-body">
                <div className="d-flex justify-content-center align-items-center fs-1"><PiKeyReturnFill /></div>
                <h5 className="card-title d-flex justify-content-center align-items-center">Free and Easy Returns</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga, a perspiciatis saepe magnam, impedit vero ea maiores et, autem error consequatur quod inventore.</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default ListStripLine
