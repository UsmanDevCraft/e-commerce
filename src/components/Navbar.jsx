import React, { useCallback, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SearchApi from '../components/SearchApi'

const Navbar = () => {

    const history = useHistory();

    const [searchValue, setSearchValue] = useState("");

    const onClick =  useCallback(()=>{
        window.location.reload();
        }, []);

    const onChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        setSearchValue(e.target.value);
        // console.log(searchValue)
    };


    const [photos, setPhotos] = useState([]);

    {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
    const pexelApiCall = async () => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=80`, {
            method: "GET",
            headers: {
                "Authorization":"HhgfTUnKAAI7KRMwsRkzsLVL7Qi9MgWgOoZt6RzPl1ZKFfdPvn05nLvw"
            },
        });
        const json = await response.json();
        // console.log(json);
        setPhotos(json.photos);
    };

    // useEffect(()=>{
    //     pexelApiCall();
    // } ,[]);


    const onSubmit = (e) => {
        e.preventDefault();
        pexelApiCall();
    };
    

  return (
    <>

    <div>
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand text-white d-flex gap-2 me-5" to="/"><img src='/ecommerce_logo.jpg' className='rounded-2 navImg' />E-Commerce WebApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" onClick={onClick}>
                    <Link className="nav-link active text-white fw-medium" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                <form className="d-flex me-3" role="search" onSubmit={onSubmit}>
                    <Link className="nav-link me-2" aria-current="page" to="/SearchApi"><input className="form-control me-2" type="search" placeholder="Search Your Product Here" id='search' name='search' aria-label="Search" onChange={onChange}/></Link>
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" onClick={onClick}>   
                    <Link className="nav-link active text-white fw-medium" aria-current="page" to="/login">Login</Link>
                    </li>
                    <li className="nav-item" onClick={onClick}>
                    <Link className="nav-link active text-white fw-medium me-3" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item" onClick={onClick}>
                    <Link className="nav-link active text-white d-flex gap-2" aria-current="page" to="/addtocart"><FaShoppingCart className='fs-4' />Cart</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>


    <div className='d-flex justify-content-center flex-wrap mt-4 pb-5'>
    {photos && photos.map((element)=>{
        const imageUrl = element.src.original;
        const price = element.id;
        return (
            <div>
                <SearchApi imageUrl={imageUrl} price={price} searchValue={searchValue} />
            </div>
        )
    })}
    </div>

    </>
  )
}

export default Navbar
