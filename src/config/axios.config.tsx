import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out",
    headers: {
        "Content-Type": "application/json"
    } 
    // baseURL: process.env.REACT_APP_API_URL
})
// axios gives interceptors -->catching request and response
axiosInstance.interceptors.response.use((response) => {
    return response.data //taking only data from response for success
}, (exception) =>{
    if(exception.code === 'ERR_BAD_REQUEST'){ // bad request come in exception and handling that error
        throw exception.response.data
    }else{
        console.log("ResponseInterCep:", exception) // for error request
        throw exception
    }   

})

export default axiosInstance