import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full"><FaGoogle className="mr-2"></FaGoogle>Continue with Google</button>
        </div>
    );
};

export default SocialLogin;