import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])



    if (!users) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users:{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>no.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                            ></User>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Users;