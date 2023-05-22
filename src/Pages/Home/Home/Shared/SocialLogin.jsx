import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary font-3xl">SignIn With Google</button>
        </div>
    );
};

export default SocialLogin;