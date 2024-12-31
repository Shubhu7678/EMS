import { useSelector } from "react-redux";
const OpenRoute = ({ children }) => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);

    if (token === null && user === null) {

        return children;
    } else { 

        return null;
    }
}

export default OpenRoute