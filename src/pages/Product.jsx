import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcreums/Breadcrum';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import Relatedproducts from '../components/Relatedproducts/Relatedproducts';

const Product = () => {
    const {all_product} = useContext(Shopcontext);
     const {productId} = useParams();
     const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product= {product}/>
        <Descriptionbox/>
        <Relatedproducts/>
    </div>
  )
}

export default Product
