import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const nevigate= useNavigate();
    const location = useLocation()
    const from=location.state?.from.pathname || '/'
    const Auth=getAuth(app);
    const googleProvider= new GoogleAuthProvider();
    const githubprovider= new GithubAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(Auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.data;
            nevigate(from,{replace:true})
            toast.success('Successfully logged in');

        })
        .catch(err=>{console.log(err);});
    }

    const handleGithubSignIn=()=>{
        signInWithPopup(Auth,githubprovider)
        .then(result=>{
            const user=result.data;
            nevigate(from,{replace:true})

        })
        .catch(err=>{console.log(err);});
    }

    const handleLogin =event => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        if(password.length<6){
            toast.error('Password should be minimum 6 characters');
            return;
        }


        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            nevigate(from,{replace:true})
            toast.success('Successfully logged in');
        })
        .catch(err=>{
            toast.error('User and password not matched');
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
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-start text-center'>Welcome to <span className='text-orange-500 font-bold italic'>DELIZIOSO</span></h1>
                        <img src="https://i.ibb.co/02cv3zG/My-password-bro.png" alt="About Us Image" className="md:w-10/12 object-cover" />
                    </div>
                    <div className="md:w-1/2 w-full ">
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-orange-500 border-none">Required</span>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-orange-500 border-none">Required</span>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    </div>
                                    
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-lg link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mt-6 form-control">
                                    <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Login</button>
                                </div>
                                <div className='text-center  mt-6'>
                                    <p className='text-lg  divider '>Or Connect With</p>
                                    <div className='my-4'>
                                        <button onClick={handleGoogleSignIn} className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/ftwyb00/Google-G-Logo-svg.png" alt="" />
                                        </button>
                                        <button onClick={handleGithubSignIn} className='px-4'>
                                            <img className='w-10' src="https://i.ibb.co/VxKN3Mg/github.png" alt="" />

                                        </button>
                                    </div>
                            <div>
                                <p className='text-sm'>New to <span className='font-semibold text-orange-500'>DELIZIOSO</span> ?<Link to="/registration"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Registration Here</button>
                                </Link></p>
                            </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;