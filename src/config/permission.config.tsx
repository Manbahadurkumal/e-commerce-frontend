import { toast } from "react-toastify";
import AuthContext from "../context/auth.context"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
// to access layout according to the  role
const PermissionConfig = ({children, allowAccess}: any) =>{ // props
    const auth = useContext(AuthContext)
    // console.log("auth", auth)
   if(auth.loggedInUser && auth.loggedInUser.role === allowAccess){
    return children;

   }else if(auth.loggedInUser && auth.loggedInUser.role !== allowAccess){
    toast.error("You do not have permisssion to access this module")
    // 403
    return  <Navigate to = {'/' + auth.loggedInUser.role} />
   }else {
    //401
    toast.error("Please login first")
    return <Navigate to ="/login" />
   }

}

//

export default PermissionConfig