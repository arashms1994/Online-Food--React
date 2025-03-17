import React from "react";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "../store/cartStore";
import { Product } from "./Products";

const CartSection: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="w-full p-5 mx-auto mb-3 shadow-lg rounded-lg">
        <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
        <p>سبد خرید خالی است</p>
      </div>
    );
  }

  const notifyA = () => {
    toast.warn("محصول با موفقیت از سبد خرید شما حذف شد.", {
      position: "bottom-right",
      containerId: "A",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Flip,
    });
  };

  const notifyB = () => {
    toast.success("محصول با موفقیت به سبد خرید شما اضافه شد.", {
      position: "bottom-left",
      containerId: "B",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Flip,
    });
  };

  const notifyC = () => {
    toast.success(
      "سفارش شما با شماره 12345 ثبت گردید. مدن زمان آماده سازی 30 دقیقه",
      {
        position: "bottom-left",
        containerId: "B",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      }
    );
  };

  const handleIncrease = (product: Product) => {
    addToCart(product);
    notifyB();
  };

  const handleDecrease = (productId: number) => {
    removeFromCart(productId);
    notifyA();
  };

  return (
    <div className="w-full p-5 mx-auto mb-3 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
      <div>
        {cart.map((item) => {
          if (!item || !item.product) {
            console.error("Invalid item in cart", item);
            return null;
          }
          return (
            <div
              key={item.product.id}
              className="flex items-center justify-between mb-4"
            >
              <p className="text-sm">{item.product.name}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleIncrease(item.product)}
                  className="px-2 py-1 bg-orange-500 text-white rounded"
                >
                  +
                </button>
                <span className="text-sm font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleDecrease(item.product.id)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
              </div>
              <p className="text-sm">
                {(item.product.price * item.quantity).toLocaleString()} تومان
              </p>
            </div>
          );
        })}
      </div>
      <div className="border-t pt-4 mt-4">
        <p className="font-bold">جمع کل: {totalPrice.toLocaleString()} تومان</p>
      </div>
      <button
        className="w-full py-2 mt-4 bg-orange-500 text-white rounded"
        onClick={notifyC}
      >
        ثبت سفارش
      </button>
    </div>
  );
};

export default CartSection;
