import { create } from 'zustand';


export const useCartStore = create((set, get) => ({
  cart: [], //장바구니 상태

  addItem: //장바구니에 아이템 추가
  
  removeItem: //장바구니에서 아이템 삭제(id 이용)
  
  clearCart: //장바구니에 있는 모든 아이템 삭제
  
  getQuantity: //장바구니에 있는 아이템 개수 리턴(get 함수 사용),

  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((acc, cur) => acc + cur.price, 0).toLocaleString();
  }, //장바구니 아이템 가격 총합
}));


