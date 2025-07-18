// type Props = {};

import Header from "../../Components/Header/Header.tsx";
import ProductBox from "../../Components/ProductBox/productBox.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

const Home = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-6 py-8 flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductBox
          id="1"
          title="product 1"
          description="desc..."
          image="https://picsum.photos/300/200/?random=1"
          price={200_000}
        />
        <ProductBox
          id="2"
          title="product 2"
          description="desc..."
          image="http://picsum.photos/300/200/?random=2"
          price={430_000}
        />
      </main>

      <Footer />
    </>
  );
};

export default Home;
