import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const Private = ({children}) => {
    const { user} = useContext(AuthContext);
    const location=useLocation();
    const{loading}=useContext(AuthContext)

 if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
 }
    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};
Private.propTypes={
    children:PropTypes.node
}
export default Private;