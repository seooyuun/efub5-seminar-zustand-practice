import React from "react";
import styled from "styled-components";
import dummyImage from "../../assets/henry.jpg";
import { useCartStore } from "../../store/useCartStore";

const ProductCard = ({ data }) => {
  // 구조분해할당을 통해 data.id, data.title 대신 간단하게 사용
  const { id, title, description, price } = data;

  // 스토어 상태/액션 불러오기
  const cart = useCartStore((state) => state.cart);
  const addItem = useCartStore((state) => state.addItem);

  // 이미 장바구니에 들어있는지 확인
  const isAlreadyInCart = cart.filter((e) => e.id === id).length;

  //장바구니에 있는지 확인후, 없을때만 장바구니에 추가
  const AddToCart = () => {
    if (!isAlreadyInCart) {
      addItem(data);
    }
  };

  return (
    <Wrapper>
      <img
        width={276}
        height={276}
        src={dummyImage}
        alt={`${id}의 더미이미지`}
      />
      <Price>{price.toLocaleString()}원</Price>
      <Haeding>{title}</Haeding>
      <MaxLine1>{description}</MaxLine1>
      <Button onClick={AddToCart} disabled={isAlreadyInCart}>
        {isAlreadyInCart ? `장바구니에 추가됐습니다` : "장바구니에 추가"}
      </Button>
    </Wrapper>
  );
};

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
`;
const Wrapper = styled.div`
  padding: 16px;
  width: 310px;
  height: 100%;
  border: 1px solid var(--line-gray);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const MaxLine1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Button = styled.button`
  padding: 8px;
  color: #fff;
  background-color: var(--main);
  &:disabled {
    background-color: var(--line-gray);
    color: var(--font-gray);
  }
`;
export const Haeding = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
`;

export default ProductCard;
