import { useContext, useEffect } from "react"
import axiosInstance from "../../../config/axios.config"
import AuthContext from "../../../context/auth.context"
import {useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import LandingPage from "../../landing/landing.page"


const Logout = () =>{ 
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    async(data: any) => {
    try{
       await axiosInstance.get("/auth/logout", data)
        if(auth.loggedInUser){
            localStorage.removeItem("accesstoken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("persist: root")
            auth.loggedInUser = null
            toast.success("You are logout successfully")
            navigate('/')
        }
        auth.loggedInUser = null
    }catch(exception){
        console.log(exception)
        toast.error("There is an error to logout.")

    }}
    useEffect(()=>{
        if(auth.loggedInUser){
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("persist:root")
            auth.loggedInUser = null
            toast.success("You are logout successfully")
            navigate('/')
        }
    }, [auth, navigate])
    auth.loggedInUser = null
    return(<>
    <LandingPage/>
    </>
)
}
export default Logout