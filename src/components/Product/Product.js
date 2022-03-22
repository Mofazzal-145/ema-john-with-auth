import React from 'react';
import './Product.css'

const Product = (props) => {
     const {name, img, ratings, price, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt='' ></img>
            <h6 className='product-name'>{name}</h6>

        </div>
    );
};

export default Product;