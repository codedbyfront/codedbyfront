import { useState } from "react";
import type { newProduct } from "../../../types/newProduct.ts";

const AddProduct = () => {
  const [formData, setFormData] = useState<newProduct>({
    title: "",
    description: "",
    price: 0,
    cover: null,
  });

  const [fileName, setFileName] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section className="mb-8 bg-gray-800 rounded-lg p-6 shadow-md max-w-xl">
        <h2 className="text-2xl font-semibold mb-6">افزودن محصول جدید</h2>
        <form className="space-y-5" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="عنوان محصول"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="توضیحات محصول"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
          />
          <input
            type="number"
            placeholder="قیمت (تومان)"
            onChange={(e) =>
              setFormData({ ...formData, price: +e.target.value })
            }
            className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
          />
          <label
            htmlFor="cover"
            className="w-full flex flex-col items-center justify-center gap-4 p-3 bg-gray-700 border border-dashed border-gray-500 rounded-md cursor-pointer hover:bg-gray-600 transition"
          >
            {fileName ? (
              <span className="text-green-400 font-medium">
                ✅ {fileName} (برای تغییر کلیک کنید)
              </span>
            ) : (
              <span className="text-gray-300">عکس را آپلود کنید</span>
            )}
            <input
              id="cover"
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFileName(file.name);
                  setFormData({ ...formData, cover: file });
                }
              }}
              className="hidden"
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white cursor-pointer font-bold py-3 rounded-md w-full transition-colors"
          >
            افزودن محصول
          </button>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
