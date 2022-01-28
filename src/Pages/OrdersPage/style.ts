import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background.paper};
  padding: 1rem 2rem;
  border-radius: 10px;
  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0;
    flex-wrap: wrap;
  }
`;
export const OrderDetailsDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-between;
    & * {
      width: 30%;
      margin-bottom: 0.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    & * {
      width: 50%;
    }
  }
`;
export const ProductsDetailsDiv = styled.div`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }
`;
export const ProductDetails = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
export const ProductImage = styled.div`
  width: 30%;
  overflow: hidden;
  height: 100%;
  margin: 0 1rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
export const Hr = styled.hr`
  border: 1px solid ${(props) => props.theme.textColors.disabled};
`;
