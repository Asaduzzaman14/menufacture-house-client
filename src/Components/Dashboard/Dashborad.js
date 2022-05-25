import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashborad = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    {/* <!-- Page content here --> */}
                    <h2 className='text-4xl text-cyan-600'>Welcome to Your  Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="bg-secondary text-white  font-semibold menu p-4 overflow-y-auto w-48  font-serif ">

                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>Protfolio</Link></li>
                        {/* {admin ? '' : <li><Link to='dashborad/addreview'>Add Review</Link></li>} */}
                        <li><Link to='dashborad/addreview'>Add Review</Link></li>

                        <li><Link to='dashborad/orders'>My Orders</Link></li>
                        <li><Link to='dashborad/myprofile'>My Profile</Link></li>

                        <li><Link to='dashborad/addproducts'>Add Products</Link></li>


                        {admin &&
                            <>
                                <li><Link to='dashborad/users'>ALL USERS</Link></li>
                                <li><Link to='dashborad/allorders'>Manage Orders</Link></li>
                                <li><Link to='dashborad/manageTools'>Manage Tools</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashborad;