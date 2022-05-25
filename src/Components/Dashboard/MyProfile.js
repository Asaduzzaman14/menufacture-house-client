import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)


    return (
        <div>
            <h2 className='text-2xl text-white bg-red-900'>This is my Prifile</h2>

            <h3>{user?.email}</h3>
            <h3>{user?.displayName}</h3>
        </div>
    );
};

export default MyProfile;