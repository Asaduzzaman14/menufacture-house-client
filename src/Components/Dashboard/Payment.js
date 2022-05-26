import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';




const stripePromise = loadStripe('pk_test_51L0jtEEVAsh12VIULuhaZmUr4zuWO9XxEwEALUdN8roMVqN8bXzYcs5A6boD0huwce6HA7Kbwf1ncnYOVQVLlpXe00rDxE5Bhf');




const Payment = () => {
    const { id } = useParams()



    const { data: order, isLoading, refetch } = useQuery('ordersPay', () => fetch(`http://localhost:5000/payorder/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    console.log(order);

    return (
        <div className='flex gap-5 m-8 mt-10'>


            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 gap-7">
                <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 class="card-title">{order.name}</h2>
                        <p>Price: ${order.quantity}</p>
                        <p>quantity: {order.price}</p>
                        <p>total: ${order.quantity * order.price}</p>

                    </div>
                </div>


                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;