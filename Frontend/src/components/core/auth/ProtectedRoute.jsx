import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoute = ({children, allowedRoles = []}) => {
    
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    console.log("token protected ::", token);
    console.log("user protected ::", user);

    
    if (!token || !user) { 

        return <Navigate to="/login" replace/>
    }

    if (!allowedRoles.includes(user?.role)) { 

        return <Navigate to="/login" replace/>
    }

    return children;
}

export default ProtectedRoute