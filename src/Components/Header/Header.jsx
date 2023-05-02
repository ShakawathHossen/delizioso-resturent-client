import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            {/* navbar  */}
            <div className=" bg-orange-600">
            <div className='navbar w-10/12 mx-auto'>
            <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden text-white p-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-orange-600 rounded w-40">
                            <li><Link className="normal-case text-xl text-white" to='/'>Home</Link></li>
                            <li> <Link className="normal-case text-xl text-white" to='/blog'>Blog</Link></li>
                            <li><Link className="  normal-case text-xl text-white" to='/login'>Login</Link></li>
                            <li><Link className="  normal-case text-xl text-white" to='/registration'>Registration</Link></li>
                        </ul>
                    </div>
                    <img className='md:w-4/12 w-8/12' src="https://i.ibb.co/2gytMjj/logo.png" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=' className="normal-case text-xl text-white hover:bg-black'><Link to='/'>Home</Link></li>
                        <li>
                        <Link className="normal-case text-xl text-white" to='/blog'>Blog</Link>
                        </li>
                        <li><Link className="  normal-case text-xl text-white" to='/login'>Login</Link></li>
                        <li><Link className="  normal-case text-xl text-white" to='/registration'>Registration</Link></li>
                    </ul>
                </div>
                <div className="navbar-end  rounded-full">
                    <img className='w-12' src="https://i.ibb.co/JzHkmBz/user-image.png" />
                </div>
            </div>
            </div>
            {/* navbar  */}
        </div>
    );
};

export default Header;