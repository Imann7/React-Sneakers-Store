import React from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='main'>

        <div className="banner">
            <div className="banner-text">
            <h1>Take your fashion game to the next level with our premium sneaker collection, where comfort is never sacrificed for style.</h1>
           
            <Link to="/products"> <button className='shop-btn'>SHOP NOW</button></Link>
            </div>
         
        </div>
        <div className="preview">

            <h2 className='txt'>BROWSE  &nbsp; <span> OUR </span>  &nbsp; CATEGORIES</h2>

            <div className="preview-cards">
               
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/shirt.a98f49e8dff9c1fb268a.jpg" alt="" /> <div className="middle"><Link to="/products"><button className='prd-btn'>GO TO PRODUCT</button></Link></div>
                </div>
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/images-2.7c94e50143f6640fa30c.jpg" alt="" /> <div className="middle"><Link to="/products"><button className='prd-btn'>GO TO PRODUCT</button></Link></div></div>
                <div className="sample"><img className='preview-img' src="https://snaxstore.netlify.app/static/media/shoes.eb0a721eb11c5ab7507b.jpg" alt="" />
                
                <div className="middle"><Link to="/products"><button className='prd-btn'>GO TO PRODUCT</button></Link></div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Main