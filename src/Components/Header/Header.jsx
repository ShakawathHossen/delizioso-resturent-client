import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <div>
            {/* navbar  */}
            <div className="bg-orange-600 ">
                <div className="navbar w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="lg:hidden text-white p-12"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 shadow bg-orange-600 rounded w-40"
                            >
                                <li>
                                    <NavLink
                                        exactto="/" className="normal-case text-xl text-white" activeClassName="active">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className="normal-case text-xl text-white"
                                        activeClassName="active"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link className="md:w-3/12 w-8/12" to="https://delizioso-resturent.web.app/"><img src="https://i.ibb.co/2gytMjj/logo.png" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <>
                                <NavLink
                                    exact
                                    to="/"
                                    className="normal-case text-xl  px-6 py-1 text-white"
                                    activeClassName="active"
                                >
                                    Home
                                </NavLink>
                            </>
                            <>
                                <NavLink
                                    to="/blog"
                                    className="normal-case text-xl  px-6 py-1 text-white"
                                    activeClassName="active"
                                >
                                    Blog
                                </NavLink>
                            </>

                        </ul>
                    </div>
                    <div className="navbar-end rounded-full">
                        {user && 
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                
                                <img className='rounded-full w-8' src={user.photoURL} />
                            
                            </div>
                            
                        }
                        <>
                            {user ? <button onClick={handleLogOut} className="normal-case text-xl px-6 py-1 text-white"
                                activeClassName="active">Logout</button> :
                                <Link to='/login'>
                                    <button className="normal-case text-xl px-6 py-1 text-white"
                                        activeClassName="active">Login</button>
                                </Link>
                            }

                        </>
                    </div>
                </div>
            </div>
            {/* navbar  */}
        </div>
    );
};

export default Header;