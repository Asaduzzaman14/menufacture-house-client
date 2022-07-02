import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('manageOrder', () => fetch('https://gentle-headland-20307.herokuapp.com/manageOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }

    }).then(res => res.json()));
    console.log(orders);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl text-white bg-red-900">Manage All Orders</h2>

            <div>
                <h2 className="text-2xl">All Orders:{orders?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>no.</th>
                                <th>Name</th>
                                <th>email</th>
                                <th> quantity</th>
                                <th> price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <ManageOrder
                                    key={order._id}
                                    order={order}
                                    index={index}
                                ></ManageOrder>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ManageOrders;