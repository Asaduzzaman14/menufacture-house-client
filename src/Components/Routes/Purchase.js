import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()


    // const { name, _id, img, price, desc, quantity } = tool?.tool

    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <h2>/SLjfoai{id}</h2>
            {/* <figure class="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h3 class="card-title">{name}</h3>
                <p><span className='font-bold'>Description:</span> {desc}</p>
                <p>Price: {id}</p>

                <p>Quantity:{quantity}</p>
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`} class="btn btn-primary">Order</Link>
                </div>
            </div> */}
        </div>
    );
};

export default Purchase;



