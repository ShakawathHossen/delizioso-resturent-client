import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';

const Registration = () => {
    const {createUser}=useContext(AuthContext);

    const handleRegistration =event => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        if(password.length<6){
            toast.error('Password should be minimum 6 characters');
            return;
        }


        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result=>{
            const createdUser=result.user;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                <div className="md:w-1/2 w-full  ">
                    <div className="card flex-shrink-0 w-full">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">phot Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="mt-6 form-control">
                                <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                            </div>
                            <div className='text-center  mt-6'>
                              
                        <div>
                            <p className='text-sm'>Have an Acconut ?<Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                            </Link></p>
                        </div>
                            </div>
                        </form>
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