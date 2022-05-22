import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()

    const [parts, setParts] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/parts`
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    const myPart = parts.find(part => part._id === id)
    console.log('this is your product', myPart?._id);
    const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } = myPart

    return (
        <div class="card d-flex lg:flex-row w-full bg-base-100  p-2 mx-5 border-2 border-red-500 mt-20">
            <figure class="px-10 pt-5">
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

export default Purchase;



