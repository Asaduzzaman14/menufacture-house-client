import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    console.log(user.email);

    return (
        <div>
            <h2 className='text-2xl text-red-500'>This is MY Profile </h2>
            <h2 className='text-2xl '> Email: {user?.email}</h2>
            <h2 className='text-2xl '> Name: {user?.displayName}</h2>
        </div>
    );
};

export default Profile;