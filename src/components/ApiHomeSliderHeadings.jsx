import React, { useEffect, useState } from 'react'
import ApiCategoryCard from './ApiCategoryCard';
import ApiHomeCard from './ApiHomeCard';

const ApiHomeSliderHeadings = (props) => {

  const { showAlert } = props;
  const [loading, setLoading] = useState(false);
  
  const categoryHeading = localStorage.getItem("categoryHeading")
  // console.log("Category " + category);

      const [photos, setPhotos] = useState([]);

  {/* --------------------------- Pexels Api Call Functionality -------------------------- */}
  const pexelApiCall = async () => {
    setLoading(true);
      const response = await fetch(`https://api.pexels.com/v1/search?query=${categoryHeading}&per_page=80`, {
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
    <h1 className='container text-center mt-2'>Showing Results for {categoryHeading}</h1>
      <div className="d-flex justify-content-center flex-wrap mt-4 pb-5">
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {photos && photos.map((element) => {
            const imgSrc = element.src.original;
            const price = element.id;
            // console.log("img url for " + imgUrl);
            return (
              <div>
                <ApiHomeCard imgSrc={imgSrc} price={price} showAlert={showAlert}/>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ApiHomeSliderHeadings
