import { useContext, useEffect } from "react"
import axiosInstance from "../../../config/axios.config"
import AuthContext from "../../../context/auth.context"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import LoginPage from "../login"
// import LandingPage from "../../landing/landing.page"

const Logout = () =>{ 
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    async(data: any) => {
    try{
       await axiosInstance.get("/auth/logout", data)
        auth.loggedInUser = null
        if(auth.loggedInUser){
            localStorage.removeItem("accesstoken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("persist: root")
            toast.success("You are logout successfully")
            navigate("/login")
        }
    }catch(exception){
        console.log(exception)
        toast.error("There is an error to logout.")

    }}
    useEffect(()=>{
        if(auth.loggedInUser){
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("persist:root")
            toast.success("You are logout successfully")
            navigate("/login") 
            
        }
    }, [auth, navigate])

    return(<>
    <LoginPage/>
    </>
)
}
// const Logout = () => {
//     const auth = useContext(AuthContext);
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       const handleLogout = async () => {
//         try {
//           // Make API call to log out
//         const response = await axiosInstance.get("/auth/logout");
//         console.log(response)
//           // Clear access and refresh tokens from localStorage
//           localStorage.removeItem("accessToken");
//           localStorage.removeItem("refreshToken");
  
//           // Clear auth context
//           auth.loggedInUser = null;
  
//           // Display success message and navigate to login page
//           toast.success("You have been logged out successfully!");
//           navigate("/login");
//         } catch (error) {
//           console.log("Logout error: ", error);
//           toast.error("There was an error logging out. Please try again.");
//         }
//       };
  
//       // Only log out if user is currently logged in
//       if (auth.loggedInUser) {
//         handleLogout();
//       }
//     }, [auth, navigate]);
  
//     return <LoginPage />;
//   };
export default Logout