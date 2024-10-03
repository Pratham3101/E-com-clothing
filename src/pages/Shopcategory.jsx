import React, { useContext } from 'react'
import './CSS/Shopcategory.css';
import { Shopcontext } from '../context/Shopcontext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Items/Item.jsx';

const Shopcategory = (props) => {
    const {all_product} = useContext(Shopcontext);
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner}/>
        <div className='shopcategory-indexsort'>
            <p> <span>Showing 1-12</span> Out of 36 products</p>

            <div className="shopcategory-sort">
                Sort by<img src={dropdown_icon}/>
            </div>
        </div>

          <div className='shopcategory-products'>
             {all_product.map((item, i)=>{
               
               if (props.category ===item.category) { 
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />  
               }
               else {
                return null;
               }

             })}
         </div> 
           <div className='shopcategory-load'>
            Explore More
           </div>
    </div>
  )
}

export default Shopcategory
