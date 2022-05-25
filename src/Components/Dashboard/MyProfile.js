import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyProfileInfo from './MyProfileInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [userinfo, setUserInfo] = useState([])

    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/userdetail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))


    }, [user.email])
    // const { data: userDetail, isLoading, refetch } = useQuery('details', () => fetch(`http://localhost:5000/userdetail?email=${user?.email}`, {
    //     method: 'GET',

    // }).then(res => res.json()));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    console.log('This is is user detail', userinfo);
    return (

        <>
            <div className='mt-5'>
                <h2 className='text-2xl mt-6'>This is my Profile</h2>
                <h3>{user?.email}</h3>
                <h3>{user?.displayName}</h3>
                <label htmlFor="booking-modal" className="btn btn-secondary text-white  modal-button">add information</label>
            </div>


            <MyProfileInfo
                user={user}
            ></MyProfileInfo>
        </>
    );
};

export default MyProfile;