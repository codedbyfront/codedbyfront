import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "https://fakestoreapi.com",
  withCredentials: true,
});

export default axiosPrivate;
