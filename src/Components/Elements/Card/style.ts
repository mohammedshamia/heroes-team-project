import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const CardSection = styled.div<IProps>`
  padding-bottom: 60px;
  & > div {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: pink;
    /* height: ${(props) => props.height || "400px"}; */
    background-color: #fff;
    border-radius: ${(props) => props.borderRadius || "10px"};
    overflow: hidden;
    padding: 35px 4px 40px;
    /* width: ${(props) => props.width}; */
    /* @media (max-width: 768px) {
    width: 100%;
  } */
  }
`;

export const Img = styled.img<IProps>`
  /* width: ${(props) => (props.width ? props.width : "300px")}; */
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  object-fit: cover;
  position: relative;
  top: 0;
  margin-bottom: 10px;
`;
export const ContainerButton = styled.div`
  display: flex;
  /* align-items:center;
justify-content:center;  */
  /* gap:10px;  */
`;

export const ContainerShopping = styled.div`
  background-color: #f2f2f2;
  display: flex;
  /* padding: 15px 30px;  */
  margin: 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 16px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  &:hover {
    box-shadow: 0px 4px 8px #00000017;
  }
`;
export const ContainerClose = styled.div`
  position: absolute;
  /* left:0; 
top:10%; */
  right: 20px;
  top: 10px;
`;
