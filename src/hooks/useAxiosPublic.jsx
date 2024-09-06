import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://talkroute-server-indol.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
