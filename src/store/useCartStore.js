import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useCartStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        cart: [],
        addItem: (item) =>
          set(
            (state) => {
              state.cart.push(item);
            },
            undefined,
            'addItem'
          ),
        removeItem: (id) =>
          set(
            (state) => {
              state.cart = state.cart.filter((item) => item.id !== id);
            },
            undefined,
            'removeItem'
          ),
        clearCart: () =>
          set(
            (state) => {
              state.cart = [];
            },
            undefined,
            'clearCart'
          ),
        getQuantity: () => {
          const { cart } = get();
          return cart.length.toLocaleString();
        },
        getTotalPrice: () => {
          const { cart } = get();
          return cart.reduce((acc, cur) => acc + cur.price, 0).toLocaleString();
        },
      })),
      { name: 'cartStore' }
    ),
    { name: 'cartStore' }
  )
);
