import React from 'react';

const User = ({ user, index }) => {
    console.log(user);
    const { email, displayName, role } = user;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default User;