import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)



    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }


    const menuItem = <>
        <li><Link className='rounded-lg' to='/home'>Home</Link></li>
        <li><Link className='rounded-lg' to='/about'>About</Link></li>
        <li><Link className='rounded-lg' to='/blogs'>Blogs</Link></li>


        {user && <li><Link className='rounded-lg' to='/profile'>Profile</Link></li>}

        <li>{user ? <>
            <Link to='/dashborad' className='btn btn-ghost'>Dashborad</Link>
            <button onClick={logout} className='btn btn-ghost' >Sign out</button>
        </>
            : <Link to='login'>Login</Link>}</li>


    </>


    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl">MenuFacturer</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}
        </div>
    );
};

export default Navbar;