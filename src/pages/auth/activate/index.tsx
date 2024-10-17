import { useContext } from "react"
import axiosInstance from "../../../config/axios.config"
import AuthContext from "../../../context/auth.context"
const activate = async(data: any) =>{
    const auth = useContext(AuthContext)

    try{
        const response: any = await axiosInstance.get('/auth/activate/:token', data)
        auth.loggedInUser = response.result.details;
        
        
    }catch(exception){
        console.log(exception)
    }
}
export default activate