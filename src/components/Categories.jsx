import React, { useEffect, useState } from 'react'
import '../components_css/Categories.css'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FaShoppingCart } from 'react-icons/fa';

const Categories = () => {

    const history = useHistory();

    const handleClick = (category, e) => {
        e.preventDefault();
        localStorage.setItem("category" ,category);
        history.push('/ApiCategory')
    };

    
        const [hr, setHr] = useState(23);
        const [min, setMin] = useState(59);
        const [sec, setSec] = useState(60);

        useEffect(() => {
            const timerIdHr = setInterval(() => {
                setHr(prevHr => (prevHr <= 0 ? 23 : prevHr - 1));
            }, 3600000);
    
            const timerIdMin = setInterval(() => {
                setMin(prevMin => (prevMin <= 0 ? 59 : prevMin - 1));
            }, 60000);
    
            const timerIdSec = setInterval(() => {
                setSec(prevSec => {
                    if (prevSec <= 0) {
                        setSec(60);
                        if (min > 0) {
                            setMin(prevMin => prevMin - 1);
                        } else {
                            setMin(59);
                            if (hr > 0) {
                                setHr(prevHr => prevHr - 1);
                            } else {
                                setHr(23);
                            }
                        }
                    } else {
                        return prevSec - 1;
                    }
                });
            }, 1000);

            return () => {
                clearInterval(timerIdHr);
                clearInterval(timerIdMin);
                clearInterval(timerIdSec);
            }
        },[]);



        
        {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
        const [photos, setPhotos] = useState([]);
        const onClick = async () => {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${"sales products"}&per_page=80`, {
                method: "GET",
                headers: {
                    "Authorization":"HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw"
                },
            });
            const json = await response.json();
            // console.log(json)
            setPhotos(json.photos);
        };




        {/* --------------------------- Saving Cart in Local storage Functionality -------------------------- */}
        const [dataImg, setDataImg] = useState(null);
    

    useEffect(() => {
      // Check if the image URL is already saved in localStorage
      const existingUrl = localStorage.getItem("dataImg");
      if (existingUrl) {
        // If it's saved, update the state with the saved URL
        setDataImg(existingUrl);
      }
    }, []); // Empty dependency array to run only once on component mount


    const saveCartClick = (imageUrl, e) => {
      e.preventDefault();

      // Retrieve the existing array of image URLs from localStorage
      const existingUrls = JSON.parse(localStorage.getItem("dataImgs")) || [];

       // Check if the URL is already in the array
      if ((!existingUrls.includes(imageUrl)) && imageUrl && imageUrl.length > 0) {
        // If it's not in the array, add it
        const updatedUrls = [...existingUrls, imageUrl];
        localStorage.setItem("dataImgs", JSON.stringify(updatedUrls));
        // console.log(imageUrl);
        alert("Cart Saved Successfully, Visit Carts to see");
      }
    };



  return (
    <>

    {/* ------------------------------ DIV FOR CATEGORY PART ------------------------------ */}
    <div className="container mt-5">
        <h1>Categories</h1>
    </div>
    <div className='categoryCont container d-flex justify-content-center flex-wrap mt-3'>
      
        <a href='' onClick={(e) => handleClick("Wardrobe", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
            <img style={{height:"7rem"}} src="https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg" />
            <div className="card-body lh-1">
                <p className="card-text">Wardrobe</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Moisturizers", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/14535056/pexels-photo-14535056.jpeg" />
            <div className="card-body lh-1">
                <p className="card-text">Moisturizers</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Headphones", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Headphones</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Wall Decor", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Wall Decor</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Shampoo", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Shampoo</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Clips and Pins", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/750914/pexels-photo-750914.jpeg" />           
        <div className="card-body lh-1">
                <p className="card-text">Clips and Pins</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Kitchen Tools", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/350417/pexels-photo-350417.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Kitchen Tools</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Business", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Business</p>
            </div>
        </div>
        </a>

       <a href="" onClick={(e) => handleClick("Art Easels", e)} className='categoryATags'>
       <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
       <img style={{height:"7rem"}} src="https://images.pexels.com/photos/18562096/pexels-photo-18562096.jpeg" />            
       <div className="card-body lh-1">
                <p className="card-text">Art Easels</p>
            </div>
        </div>
       </a>

        <a href="" onClick={(e) => handleClick("Door Locks", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/18041737/pexels-photo-18041737.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Door Locks</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Suits", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Suits</p>
            </div>
        </div>
        </a>
        
        <a href="" onClick={(e) => handleClick("In-Ear earphones", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/5200829/pexels-photo-5200829.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">In-Ear</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Fashion", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Fashion</p>
            </div>
        </div>
        </a>
        <a href="" onClick={(e) => handleClick("T-Shirts", e)} className='categoryATags'>
            
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">T-Shirts</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Wallpaper", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Wallpaper</p>
            </div>
        </div>
        </a>

        <a href="" onClick={(e) => handleClick("Insecticide", e)} className='categoryATags'>
        <div className="card cardStyle cardBg text-white cardHover"  style={{width: "10vw"}}>
        <img style={{height:"7rem"}} src="https://images.pexels.com/photos/18051954/pexels-photo-18051954.jpeg" />            
        <div className="card-body lh-1">
                <p className="card-text">Insecticide</p>
            </div>
        </div>
        </a>

    </div>




    {/* ------------------------------ DIV FOR FLASH SALE PART ------------------------------ */}
    <div className="container mt-5">
        <h1>Flash Sale</h1>
    </div>


    <div className="container d-flex justify-content-between align-items-center my-2">
        <div className='d-flex justify-content-center align-items-center gap-5'>
            <p>On Sale Now</p>
            <div className='d-flex justify-content-center gap-3'>
                <p>Ending in</p>
                <span className='timeBg d-flex justify-content-center'>{hr}</span>:
                <span className='timeBg d-flex justify-content-center'>{min}</span>:
                <span className='timeBg d-flex justify-content-center'>{sec}</span>
            </div>
        </div>
        <button className="btn btn-outline-warning" onClick={onClick}>SHOP MORE</button>
    </div>


    <div className="container d-flex justify-content-center flex-wrap mt-2 gap-2 pb-4">
        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/13795451/pexels-photo-13795451.jpeg" />
                <div className="card-body lh-1">
                <p className="card-text">Pack 2 Large Storage Bags, Storage Bag Clothes...</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>

        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/5717640/pexels-photo-5717640.jpeg" />            
                <div className="card-body lh-1">
                <p className="card-text">Muntazir 5 in 1 Seamless Heavy Duty Strong Sticky...</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>

        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/3944105/pexels-photo-3944105.jpeg" />
                <div className="card-body lh-1">
                <p className="card-text">Mishneeka Portable Storage Bags Organizer</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>

        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg" />
                <div className="card-body lh-1">
                <p className="card-text">i9s tws and i7s single wireless bluetooth...</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>

        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/20020575/pexels-photo-20020575.jpeg" /> 
                <div className="card-body lh-1">
                <p className="card-text">kickza handbags for girls crossbody & shoulder bag...</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>

        <a href="" className='categoryATags'>
        <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
        <img style={{height:"10rem"}} src="https://images.pexels.com/photos/3687956/pexels-photo-3687956.jpeg" />
                <div className="card-body lh-1">
                <p className="card-text">FEIDIAO Shaving Machine 3 in 1 portable...</p>
                <p className='fw-medium'>Rs. 1500</p>
                <div className='d-flex gap-3'>
                    <p className='text-decoration-line-through'>Rs. 3000</p>
                    <p>-50%</p>
                </div>
            </div>
        </div>
        </a>
    </div>



    {/* ------------ Div for showing the api images in a card using map() ------------ */}
    <div className="container d-flex justify-content-center flex-wrap gap-2">
    {photos && photos.map((element)=>{
        const imageUrl = element.src.original;
        const price = element.id;
        return(
            
            <a href="" className='categoryATags'>
                <div className="card cardBg text-white cardHover" style={{width: "20rem"}}>
                <img style={{height:"10rem"}} src={imageUrl} />
                        <div className="card-body lh-1">
                        <p className="card-text">Sale Products</p>
                        <p className='fw-medium'>Rs. {price/2000}</p>
                        <div className='d-flex gap-3'>
                            <p className='text-decoration-line-through'>Rs. {price/1000}</p>
                            <p>50% off</p>
                        </div>
                        <div className='d-flex justify-content-center gap-3' style={{cursor: "pointer"}} onClick={(e)=>{saveCartClick(imageUrl, e)}}>
                        <FaShoppingCart className='mt-1' />
                        <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </a>

        );
    })}
    </div>

    </>
  )
}

export default Categories
