import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ tool }) => {
    const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } = tool

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="tools" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">{name}</h3>
                <p><span className='font-bold'>Description:</span> {desc}</p>
                <p>Price: {price}</p>

                <p>Available Quantity: {availableQuantity}</p>
                <p>Min Order Quantity: {minOrderQuantity}</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`} className="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;