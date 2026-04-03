import UseAuth from "../Hooks/UseAuth";
import UseUserRole from "../Hooks/UseUserRole";


const RiderRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const { role, roleLoading } = UseUserRole();

    if (loading || roleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!user || role !== 'rider') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }``

    return children;
};

export default RiderRoute;