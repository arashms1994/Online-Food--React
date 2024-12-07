import React, { useState } from "react";
import { Product } from "./Products";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleIncrease = () => {
    if (selectedAmount < product.amount) {
      setSelectedAmount(selectedAmount + 1);
    }
  };
  const handleDecrease = () => {
    if (selectedAmount > 0) {
      setSelectedAmount(selectedAmount - 1);
    }
  };

  return (
    <>
      <div className="w-72 h-72 rounded-lg shadow-2xl p-3">
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="object-cover rounded-t-lg"
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
              className="w-6 h-6 bg-gray-500 p-3 text-black"
              onClick={handleDecrease}
              disabled={selectedAmount === 0}
            >
              -
            </button>
            <span className="text-lg font-semibold">{selectedAmount}</span>
            <button
              className="w-6 h-6 bg-orange-500 text-white p-3"
              onClick={handleIncrease}
              disabled={selectedAmount === product.amount}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

//       {/* دکمه‌های افزایش و کاهش تعداد */}
//       <div className="flex items-center justify-center gap-4 mt-3">
//         <button
//           onClick={handleDecrease}
//           disabled={selectedAmount === 0}
//           className={`px-4 py-2 bg-red-500 text-white rounded-lg ${
//             selectedAmount === 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           -
//         </button>
//         <span className="text-lg font-bold">{selectedAmount}</span>
//         <button
//           onClick={handleIncrease}
//           disabled={selectedAmount === product.amount}
//           className={`px-4 py-2 bg-green-500 text-white rounded-lg ${
//             selectedAmount === product.amount ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };
