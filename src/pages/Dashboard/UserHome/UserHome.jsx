import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-2xl">Hi, Welcome {user? user?.displayName : 'Back'}</h2>
        </div>
    );
};

export default UserHome;