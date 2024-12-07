import React from "react";
import ProductCard from "./ProductCard";
import Products, { Product } from "./Products";

const ProductDiv: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-5">
      {Products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductDiv