import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCartStore = create(
  persist(
    devtools(
      immer((set, get) => ({
        cart: [], //장바구니 상태

        addItem: (data) => set((state) => ({ cart: [...state.cart, data] })), //장바구니에 아이템 추가

        removeItem: (id) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          })), //장바구니에서 아이템 삭제(id 이용)

        clearCart: () => set((state) => (state.cart = [])), //장바구니에 있는 모든 아이템 삭제

        getQuantity: () => {
          const { cart } = get();
          return cart.toLocaleString();
        }, //장바구니에 있는 아이템 개수 리턴(get 함수 사용),

        getTotalPrice: () => {
          const { cart } = get();
          return cart.reduce((acc, cur) => acc + cur.price, 0).toLocaleString();
        }, //장바구니 아이템 가격 총합
      }))
    ),
    { name: "CartStore" }
  )
);
