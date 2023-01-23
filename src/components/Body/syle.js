import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000000;
  height: auto;
`;
const Wrapper = styled.div`
  width: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: space-evenly;
  grid-template-columns: 400px 400px 400px 400px;
  grid-template-rows: auto auto auto auto;
`;
const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding-bottom: 20px;
  margin: 30px 0;
`;
const Price = styled.p`
  font-size: 30px;
  color: gold;
`;
const Description = styled.h2`
  color: white;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;

  margin: auto;
`;
const Input = styled.input`
  width: 500px;
  height: 50px;
`;
export { Input, InputWrapper, Container, Description, Card, Wrapper, Price };
