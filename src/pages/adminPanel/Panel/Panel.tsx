import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productApi.ts";
import type { Product } from "../../../types/Product.ts";

const Panel = () => {
  const [courses, setCourses] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setCourses(res.data.slice(0, 10));
      console.log(res.data);
    };
    fetchData();
  }, []);

  const editHandler = () => {};

  const deleteProduct = (id: string) => {
    console.log(id);
  };

  return (
    <>
      <section className="bg-gray-800 rounded-lg shadow-md p-6 overflow-x-auto">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-6">لیست محصولات</h2>
          <Link
            to="add-product"
            className="size-8 rounded-lg bg-green-500 hover:bg-green-700 transition"
          >
            <span className="font-bold text-3xl flex justify-center leading-6">
              +
            </span>
          </Link>
        </div>
        <table className="min-w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-3 px-6 text-sm font-medium text-gray-300 uppercase tracking-wider">
                تصویر
              </th>
              <th className="py-3 px-6 text-sm font-medium text-gray-300 uppercase tracking-wider">
                عنوان
              </th>
              <th className="py-3 px-6 text-sm font-medium text-gray-300 uppercase tracking-wider">
                قیمت
              </th>
              <th className="py-3 px-6 text-sm font-medium text-gray-300 uppercase tracking-wider">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {courses.map((course) => (
              <tr className="hover:bg-gray-700" key={course.id}>
                <td className="p-2">
                  <img src={course.image} className="rounded size-32" />
                </td>
                <td className="py-4 px-6 text-gray-200">
                  {course.title.slice(0, 10)}
                </td>
                <td className="py-4 px-6 text-green-400 font-semibold">
                  {course.price.toLocaleString()} تومان
                </td>
                <td className="py-4 px-6 space-x-3 whitespace-nowrap">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    onClick={() => editHandler()}
                  >
                    ویرایش
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => deleteProduct(course.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Panel;
