import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ tool }) => {
    const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } = tool

    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h3 class="card-title">{name}</h3>
                <p><span className='font-bold'>Description:</span> {desc}</p>
                <p>Price: {price}</p>

                <p>Available Quantity: {availableQuantity}</p>
                <p>Min Order Quantity: {minOrderQuantity}</p>
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`} class="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;