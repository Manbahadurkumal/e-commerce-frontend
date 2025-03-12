import { useContext } from "react"
import axiosInstance from "../../../config/axios.config"
import AuthContext from "../../../context/auth.context"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import LoginPage from "../login";
const ActivatePage = () =>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    async (data: any) =>{
    try{
        const response: any = await axiosInstance.get('/auth/activate/:token', data)
        auth.loggedInUser = response.result.activationToken;
        console.log(response)       
        toast.success(response.message || "Activated Successfully")
        navigate("/login" )
    }catch(exception){
        console.log(exception)
    }}
    return (<LoginPage/>)
}
export default ActivatePage

