import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        window.alert("please Login to visit this page")
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;