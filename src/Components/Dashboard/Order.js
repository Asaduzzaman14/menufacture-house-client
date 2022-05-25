import React from 'react';

const Order = ({ order, index }) => {
    const { name, email, quantity, price } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{price}</td>

            <td>
                <button className="btn btn-xs">pay</button>
                <button className="m-3 btn btn-xs">Remove</button>
            </td>
        </tr>
    );
};

export default Order;