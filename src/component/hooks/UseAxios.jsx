import axios from "axios";

const axiosurl=axios.create({
  baseURL:"https://event-managment-theta.vercel.app",
})



const UseAxios = () => {
return axiosurl;

}

export default UseAxios;