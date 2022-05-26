import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import EditProfile from './EditProfile';
import MyProfileInfo from './MyProfileInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [userinfo, setUserInfo] = useState([])

    console.log(user.email);
    const [editPrifile, setEditPrifile] = useState()


    const { data: userDetail, isLoading, refetch } = useQuery('details', () => fetch(`https://gentle-headland-20307.herokuapp.com/profilrdetail/${user?.email}`, {
        method: 'GET',

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div className=''>
            <h2 className='text-2xl my-6'>This is my Profile</h2>
            <label htmlFor="add-info-modal" className="btn btn-secondary text-white  modal-button">add information</label>
            <br />

            {
                userDetail.map(detail => {
                    return <div className='mt-5 lg:max-w-50'>

                        <h3>{detail?.email}</h3>

                        <h3>{detail?.displayName}</h3>

                        <div className="card text-justify w-100 bg-base-100 shadow-xl mx-auto  my-2">
                            <div className="card-body">
                                <h2 className="card-title">Email: <span className='text-purple-500'>{detail.email}</span></h2>
                                <h2>Name: <spna className='text-purple-500'>{detail.name}</spna></h2>
                                <p>City: {detail.city}</p>
                                <h3>Educational Background:
                                    <span className='text-orange-600'>{detail.education} </span></h3>

                                <p>Phone: {detail.phone}</p>
                                <p>Linkdin Prifile: {detail.linkdin}</p>
                            </div>
                            <div className='mx-auto'>
                                <label onClick={() => setEditPrifile(detail)} for="my-modal-6" class="btn btn-secondary modal-button modal-button">Edit Information</label>
                            </div>
                        </div>

                    </div>

                })
            }



            <MyProfileInfo
                user={user}
            ></MyProfileInfo>
            <EditProfile

            >
            </EditProfile>
        </div >
    );
};

export default MyProfile;