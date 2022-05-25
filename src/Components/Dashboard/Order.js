import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ order, index, setDeleteOrder, refetch }) => {
    const { name, _id, email, quantity, price } = order

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    toast('success')
                    refetch()
                }
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{price}</td>

            <td>
                {<Link to={`payment/${_id}`} className="btn btn-xs text-white bg-success">pay</Link>}


                <button onClick={() => handelDelete(_id)} htmlFor="delete-confirm-modal" className="m-3 btn btn-xs text-error">Remove</button>
            </td>
        </tr>
    );
};

export default Order;