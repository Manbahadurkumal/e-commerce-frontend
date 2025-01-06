import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/landing.page";
import SocketExample from "../pages/landing/socket-eg.page";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import Logout from "../pages/auth/logout";
import ActivatePage from "../pages/auth/activate";
import HomeLayout from "../pages/layouts";
import AdminLayout from "../pages/layouts/admin";
// const AdminLayout = lazy(() => import("../pages/layouts/admin"))
// const AdminDashboard = lazy(() => import("../pages/dashboard/admin-dashboar.page"))

import { ToastContainer } from "react-toastify";


import "react-toastify/ReactToastify.css"
import PermissionConfig from "./permission.config";
import AuthContext from "../context/auth.context";
import axiosInstance from "./axios.config";
import AdminDashboard from "../pages/dashboard/admin-dashboar.page";
import { LoadingComponent } from "../components/common";
import { AdminBanner, AdminBannerCreate, AdminBannerEdit } from "../pages/banner";
const RoutingConfig = () =>{
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState(true);
    
    const getLoggedInUser = async () =>{
        try{
            const token = localStorage.getItem("accessToken") || null
            const response: any = await axiosInstance.get(
                '/auth/me',
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )
            setLoggedInUser(response.result)
            
        }catch(exception) {
            //handle
      
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("accessToken") || null

        if(token) {
            getLoggedInUser()
        }else{
            setLoading(false)
        }
        
    }, [])

    return (
        <>
            
        {
            loading ? <>
            <LoadingComponent />
            </>:<>
            <AuthContext.Provider value={{loggedInUser: loggedInUser}}>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<LandingPage />}></Route>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="socket" element={<SocketExample />}></Route>
                    <Route path="activate/:activationToken" element={<ActivatePage /> }></Route>
                    <Route path="register" element={<RegisterPage />}></Route>
                    <Route path="logout" element={<Logout />}></Route>

                    <Route path="*" element={<>Error Page</>}></Route>
                </Route>
                
                <Route path="/admin" element={<PermissionConfig allowAccess= {"admin"}>
                    <AdminLayout />
                </PermissionConfig>}>
                    <Route index element={<Suspense fallback={<LoadingComponent />}>
                        <AdminDashboard />
                    </Suspense>}></Route>
                    <Route path="banner" element={<Suspense fallback={<LoadingComponent />}>
                        <AdminBanner />
                    </Suspense> }></Route>
                    <Route path="banner/create" element={<Suspense fallback={<LoadingComponent />}>
                        <AdminBannerCreate />
                    </Suspense> }></Route>
                    <Route path="banner/:id" element={<Suspense fallback={<LoadingComponent />}>
                        <AdminBannerEdit />
                    </Suspense> }></Route>
                    <Route path="*" element={<>Error Page</>}></Route>

                </Route>
            </Routes>
        </AuthContext.Provider> </>

        }
        </>
    )
}
export default RoutingConfig;