import React, { useState } from "react";
import { Product } from "./Products";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const notifyA = () => {
    toast.warn("محصول با موفقیت از سبد خرید شما حذف شد. ", {
      position: "bottom-right",
      containerId: "A",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  };

  const notifyB = () => {
    toast.success("محصول با موفقیت به سبد خرید شما اضافه شد. ", {
      position: "bottom-left",
      containerId: "B",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  };

  const handleIncrease = () => {
    if (selectedAmount < product.amount) {
      setSelectedAmount(selectedAmount + 1);
      notifyB();
    }
  };
  const handleDecrease = () => {
    if (selectedAmount > 0) {
      setSelectedAmount(selectedAmount - 1);
      notifyA();
    }
  };

  return (
    <>
      <div className="w-72 h-72 rounded-lg shadow-2xl p-3">
        <div className="w-full h-1/2">
          <img
            src={product.img}
            alt={product.name}
            className="object-cover rounded-t-lg w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between py-3">
          <h1 className="text-xl font-semibold">{product.name}</h1>
          <p className="text-base font-medium">موجودی: {product.amount}</p>
        </div>
        <p className="text-base font-normal text-gray-400">
          {product.description}
        </p>
        <div className="flex items-center justify-between py-3">
          <p className="text-lg text-orange-600 font-semibold">
            تومان:{product.price}
          </p>
          <div className="flex justify-center items-center gap-2">
            <button
              className="w-6 h-6 bg-gray-300 pb-1 text-black"
              onClick={handleDecrease}
              disabled={selectedAmount === 0}
            >
              -
            </button>
            <span className="text-lg font-semibold">{selectedAmount}</span>
            <button
              className="w-6 h-6 bg-orange-500 pb-1 text-white text-center"
              onClick={handleIncrease}
              disabled={selectedAmount === product.amount}
            >
              +
            </button>
            <ToastContainer containerId="A" position="bottom-left" />
            <ToastContainer containerId="B" position="bottom-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
