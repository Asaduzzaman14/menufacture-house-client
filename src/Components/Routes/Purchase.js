import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)

    const [tool, setTool] = useState([])

    const { name, img, price, desc, minOrderQuantity, availableQuantity } = tool
    console.log('ttttttttt', minOrderQuantity);

    const [minQuantity, setMinQuantity] = useState(minOrderQuantity)
    const [maxQuantity, maxMinQuantity] = useState(availableQuantity)
    console.log('hello', minQuantity);

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [id])


    const HandelSubmit = (event) => {
        event.preventDefault()
        const orderQuantity = event.target.quantity.value;
        // console.log('oreder', orderQuantity)
        ;
        // if (orderQuantity < minOrderQuantity) {
        //     return toast('you cant not order this quantity')
        // }

        const orderdetail = {
            toolsname: name,
            email: user?.email,
            name: user?.displayName,
            img,
            price,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }

        console.log('This is your order', orderdetail);

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
                <form onSubmit={HandelSubmit} >
                    <input type="email" name='email' value={user?.email} className="input input-bordered input-md w-full max-w-sm mb-4" />
                    <input type="number" name='phone' className="input input-bordered input-md w-full max-w-sm mb-4" required placeholder='Your Phone' />
                    <br />

                    <label class="input-group input-group-sm ">


                        <button onClick={() => setMinQuantity(parseInt(minQuantity) - 1)} className='btn text-4xl '>-</button>

                        <input
                            className=' border-2'
                            value={parseInt(minQuantity)}
                            type="number" id="quantity"
                            name="quantity"
                            min={minOrderQuantity}
                            max={availableQuantity}
                            step="1"

                        />
                        <button onClick={() => setMinQuantity(minQuantity + 1)} className='btn text-4xl'>+</button>

                    </label>

                    <div className="card-actions text-center mx-auto mt-3">
                        <imput type="submit" className="btn btn-secondary ">Order</imput>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Purchase;



