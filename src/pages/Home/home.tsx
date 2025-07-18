import Header from "../../Components/Header/Header.tsx";
import ProductBox from "../../Components/ProductBox/productBox.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.ts";
import { getProducts } from "../../services/productApi.ts";
import { axiosErrorHandler } from "../../utils/axiosErrorHandler.ts";
// import type { AxiosError } from "axios";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data.slice(0, 8));
      } catch (err: any) {
        console.log(err);
        const msg = axiosErrorHandler(err);
        console.log(msg);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      <main className="container w-screen mt-20 mb-12 px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 last:mb-4 ">
        {products.map((product: Product) => (
          <ProductBox
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </main>

      <Footer />
    </>
  );
};

export default Home;
