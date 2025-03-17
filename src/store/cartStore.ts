import { create } from "zustand";
import { Product } from "../components/Products";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const updatedCart = [...state.cart];
          const existingIndex = updatedCart.findIndex(
            (item) => item.product.id === product.id
          );
          if (existingIndex !== -1) {
            updatedCart[existingIndex].quantity += 1;
          } else {
            updatedCart.push({ product, quantity: 1 });
          }
          return { cart: updatedCart };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const updatedCart = [...state.cart];
          const existingIndex = updatedCart.findIndex(
            (item) => item.product.id === productId
          );
          if (existingIndex !== -1) {
            if (updatedCart[existingIndex].quantity > 1) {
              updatedCart[existingIndex].quantity -= 1;
            } else {
              updatedCart.splice(existingIndex, 1);
            }
          }
          return { cart: updatedCart };
        }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
