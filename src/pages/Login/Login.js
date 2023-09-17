import React, { useContext } from 'react';
import glogo from "../../assets/Google_logo/Google_Logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';

const Login = () => {
    const { loginWithGoogle, userLoginEmailAndPassword } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathName || "/"

    const handelLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        userLoginEmailAndPassword(email, password)

        navigate(from, { replace: true })

        event.target.reset()

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-2/3 mx-auto">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center mt-8 px-5">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <form onSubmit={handelLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-teal-500 text-white hover:bg-teal-600">Login</button>
                        </div>
                    </form>

                    <div className='mx-8 mb-8'>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button onClick={loginWithGoogle} className="btn bg-teal-500 text-white hover:bg-teal-600">Continue With Google
                                <img src={glogo} className='border-2 bg-white rounded-full' alt=''></img>
                            </button>
                        </div>
                        <small>Not A member? <Link to="/signup" className='text-teal-600'>SignUp Now</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;