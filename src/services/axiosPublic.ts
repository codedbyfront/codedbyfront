import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default axiosPublic;
