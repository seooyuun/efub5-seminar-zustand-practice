import styled from 'styled-components';
import CartItem from './../component/CartItem/CartItem';


function Cart() {

  //스토어 상태/액션 불러오기
  const cart = 
  const clearCart = 
  const Quantity = 
  const TotalPrice = 

  const clearAllItem = () => {
    //장바구니 초기화 함수
  };

  return (
    <>
      <Header>
        <Heading>장바구니</Heading>
        <Button onClick={clearAllItem}>초기화</Button>
      </Header>

      <ItemWrapper>
        {cart.length ? (
          cart.map((e) => <CartItem data={e} key={e.id} />)
        ) : (
          <NoItems>상품이 없습니다</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>총 갯수</span>
          <Heading>{`${Quantity()}개`}</Heading>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>총 가격</span>
          <Heading>{`${TotalPrice()}원`}</Heading>
        </ColumnWrapper>
      </TotalPriceWrapper>
    </>
  );
}

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Heading = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;
const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
`;
const TotalPriceWrapper = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--line-gray);
  & span {
    text-align: right;
  }
`;
const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
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
export default Cart;
