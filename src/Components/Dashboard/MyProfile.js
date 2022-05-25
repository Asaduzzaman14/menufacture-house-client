import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)


    return (
        <div>
            <h2 className='text-2xl text-white bg-red-900'>This is my Prifile</h2>

            <h3>{user?.email}</h3>
            <h3>{user?.displayName}</h3>
            <label htmlFor="booking-modal" className="btn btn-secondary text-white  modal-button">Book Appointment</label>

            <button onClick={'/myProfileInfo'}>Add information</button>
        </div>
    );
};

export default MyProfile;