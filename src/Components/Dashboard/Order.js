import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteOrderModal from './DeleteOrderModal';

const Order = ({ order, index, setOrderDeleteId, refetch }) => {





    const { name, _id, email, quantity, price } = order
    return (

        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{quantity}</td>
                <td>{price}</td>

                <td>
                    {<Link to={`payment/${_id}`} className="btn btn-xs text-white bg-success">pay</Link>}

                    <label onClick={() => setOrderDeleteId(order)} for="my-modal-6" class="btn modal-button btn-xs text-error modal-button">Remove</label>

                </td>
            </tr>





        </>
    );
};

export default Order;