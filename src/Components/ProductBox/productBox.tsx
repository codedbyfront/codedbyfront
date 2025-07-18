type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

const ProductBox = (props: Props) => {
  return (
    <>
      <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col text-right">
        <img src={props.image} alt="" className="w-full h-52 object-cover" />
        <div className="p-5 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
          <p className="text-green-400 font-bold text-lg mb-4" dir="rtl">
            {props.price.toLocaleString()} تومان
          </p>
          <button className="mt-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors cursor-pointer">
            افزودن به سبد خرید
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductBox;
