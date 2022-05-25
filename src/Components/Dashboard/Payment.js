import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()



    const { data: order, isLoading, refetch } = useQuery('ordersPay', () => fetch(`http://localhost:5000/payOrder/${id}`, {
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
        <div>
            <h2 className="text-2xl text-slate-600 mt-8">{id}</h2>

        </div>
    );
};

export default Payment;