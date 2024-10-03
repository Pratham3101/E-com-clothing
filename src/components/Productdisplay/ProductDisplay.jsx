import React, { useContext } from 'react'
import './Productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { Shopcontext } from '../../context/Shopcontext';


const ProductDisplay = (props) => {
  const {product} = props; 

  const {addToCart}= useContext(Shopcontext);

  return (
    <div className='product-display'>
       <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
          </div>
          <div className="productdisplay-image">
            <img className='productdisplay-main-img' src={product.image}></img>
          </div>
       </div>
       <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
              <img src={star_icon}/>
              <img src={star_icon}/>
              <img src={star_icon}/>
              <img src={star_icon}/>
             <img src={star_dull_icon}/>
             <p>(122)</p>
            </div>
            <div className='productdisplay-right-price'>
              <div className="productdisplay-right-price-old">${product.old_price}</div>
              <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
              A lightweight, usually kinitted, pullover shrit, close-fitting and with a round neckline and short sleves, worn as an undershirt or outer garment.
            </div>
            <div className='productdisplay-right-size'>
              <h1>Select Size</h1>
              <div className='prodcutdisplay-right-size'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
       </div>
    </div>
  )
}

export default ProductDisplay
