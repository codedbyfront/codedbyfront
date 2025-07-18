import axiosPublic from "./axiosPublic.ts";

const getProducts = () => {
  return axiosPublic.get("/products");
};

const getProduct = (id: string) => {
  return axiosPublic.get(`/products/${id}`);
};

export { getProducts, getProduct };
