import React from "react";
import styled from "styled-components";
import dummyImage from "../../assets/henry.jpg";
import { useCartStore } from "../../store/useCartStore";

const CartItem = ({ data }) => {
  const { id, title, description, price } = data;
  const removeItem = useCartStore((state) => state.removeItem);
  //스토어 액션 불러오기

  const removeFromCart = () => {
    return removeItem(id); //삭제 함수 구현
  };

  return (
    <Wrapper>
      <div>
        <ImageWrapper src={dummyImage} alt={title}></ImageWrapper>
        <ColumnWrapper>
          <Title>{title}</Title>
          <span>{description}</span>
        </ColumnWrapper>
      </div>
      <RightWrapper>
        <Title>{`${price.toLocaleString()}원`}</Title>
        <Button onClick={removeFromCart}>삭제</Button>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageWrapper = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  margin-right: 16px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;
const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;
export default CartItem;
