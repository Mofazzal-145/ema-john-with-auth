import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
     const {name, img, ratings, price, seller} = props.product;
     console.log(props)
    return (
        <div className='product'>
            <img src={img} alt='' ></img>
             <div className='product-info'>
               <p className='product-name'>{name}</p>
               <p>Price:${price}</p>
               <p><small>Seller:{seller}</small></p>
               <p><small>Rating:{ratings} stars</small></p>
             </div>
             <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                 <p>Add To Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>
        </div>
    );
};

export default Product;