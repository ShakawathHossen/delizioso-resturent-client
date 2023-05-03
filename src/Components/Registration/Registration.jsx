import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                <div className="md:w-1/2 w-full  ">
                    <div className="card flex-shrink-0 w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="text" placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="mt-6 form-control">
                                <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                            </div>
                            <div className='text-center  mt-6'>
                                <p className='text-lg'>Or Connect With</p>
                                <div className='my-4'>
                                    <button className='px-4'>
                                        <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                    </button>
                                    <button className='px-4'>
                                        <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                    </button>
                                </div>
                        <div>
                            <p className='text-sm'>Have an Acconut ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                            </Link></p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-orange-500 font-bold italic'>DELIZIOSO</span></h1>
                    <img src="https://i.ibb.co/j8gSHcV/Forms-amico.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Registration;