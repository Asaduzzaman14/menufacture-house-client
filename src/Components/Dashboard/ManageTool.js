import React from 'react';

const ManageTool = ({ tool, index }) => {
    console.log(tool);
    const { name, _id, img, price, desc, email, minOrderQuantity, availableQuantity } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>

            <td>{minOrderQuantity}</td>
            <td>{availableQuantity}</td>

            <td><button className="btn btn-xs">Remove</button></td>
        </tr>

    );
};

export default ManageTool;