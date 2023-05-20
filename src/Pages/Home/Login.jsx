import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero bg-base-200">
            <div className="card-body w-1/3">
                <h2 className="text-3xl text-center font-bold">Please Login!</h2>
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
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                    <div>
                        {/* <button className="btn btn-outline btn-primary text-3xl mt-3">SignIn With Google</button> */}
                    </div>
                </form>
                <p>New to toys education <Link to='/signup' className="text-red-600 font-bold">Sign Up?</Link></p>
            </div>
        </div>
    );
};

export default Login;