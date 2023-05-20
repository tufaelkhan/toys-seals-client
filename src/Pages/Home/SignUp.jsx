import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password, photo);
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.log(error))
    }
    return (
        <div className="hero bg-base-200">
            <div className="card-body w-1/3">
                <h2 className="text-3xl text-center font-bold">Please SignUp!</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
                    </div>
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="signup" />
                    </div>
                </form>
                <p>Already Have an Account <Link to='/login' className="text-red-600 font-bold">Login?</Link></p>
            </div>
        </div>
    );
};

export default SignUp;