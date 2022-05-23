import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState([])
    const { name, _id, img, price, desc, minOrderQuantity, availableQuantity } = tool
    const [minQuantity, setMinQuantity] = useState(minOrderQuantity)

    const [inputValue, setInputValue] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [id])

    const handelChange = (e) => {
        e.preventDefault()
        const curentValue = e.target.value
        setInputValue(curentValue)
    }


    return (
        <div className="card d-flex lg:flex-row w-full bg-base-100  p-2 mx-5 border-2 border-red-500 mt-20">
            <figure className="px-10 pt-5">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="card-title">{name}</h3>
                <p><span className='font-bold'>Description:</span> {desc}</p>
                <p>Price: {price}</p>

                <p>Available Quantity: {availableQuantity}</p>
                <p>Min Order Quantity: {minOrderQuantity}</p>
                <form onChange={handelChange}>
                    <label class="input-group input-group-sm ">
                        <button onClick={() => setMinQuantity(minQuantity - 1)} className='btn'>Decrement</button>
                        <input
                            value={minOrderQuantity?.value}
                            type="number" id="quantity"
                            name="quantity"
                            min={minOrderQuantity}
                            max={availableQuantity}
                            step="1"

                        />
                        <button onClick={() => setMinQuantity(minQuantity + 1)} className='btn'>Increment</button>

                    </label>
                </form>

                <div className="card-actions">
                    {<button className="btn btn-secondary">Order</button>}
                </div>
            </div>
        </div>
    );
};

export default Purchase;



