import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #262626;
  border-bottom: 1px solid yellow;
  margin-bottom: 10px;
`;
Container.drawerimg = styled.img`
  width: 100px;
  height: 100px;
`;
Container.basket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin: 10px 0;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #ecc78b;
  &:hover {
    border-bottom: 10px solid blue;
    transform: scale(1.1);
    transition: all 1s;
    cursor: pointer;
  }
`;
const Kart = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #ecc78b;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    transition: all 1s;
    cursor: pointer;
  }
`;
Kart.title = styled.p`
  font-size: 20px;
  color: gold;
`;
export { Container, Wrapper, Logo, Kart };
