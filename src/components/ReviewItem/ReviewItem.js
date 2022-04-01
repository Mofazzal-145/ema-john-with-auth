import React from 'react';

const ReviewItem = (props) => {
    const {name, price, shipping, quantity} = props.product;
    return (
        <div>
            <h4>This is a ReviewItem:{name}</h4>
        </div>
    );
};

export default ReviewItem;