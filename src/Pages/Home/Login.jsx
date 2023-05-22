import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./Home/Shared/SocialLogin";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [Error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        if(/^[A-Za-z]$/.test(password)){
            setError('please add at last one uppercase')
            return ;
        }else if(password.length < 8){
          setError('password must be 8 chracter')
          return ;
        }
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero bg-base-200">
            <div className="card-body w-1/3">
                <h2 className="text-3xl text-center font-bold">Please Login!</h2>
            <SocialLogin></SocialLogin>
                <form onSubmit={handleLogin}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                        <h2 className="text-red-500">{Error}</h2>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                    <div>
                    </div>
                </form>
                <p>New to toys education <Link to='/signup' className="text-red-600 font-bold">Sign Up?</Link></p>
            </div>
          
        </div>
    );
};

export default Login;