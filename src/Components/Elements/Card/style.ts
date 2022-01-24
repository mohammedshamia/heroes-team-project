import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const CardSection = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.background.paper};
  border-radius: ${(props) => props.borderRadius || "10px"};
  overflow: hidden;
  position: relative;
`;

export const Img = styled.div<IProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-bottom: 10px;
  height: 300px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
`;

export const ContainerShopping = styled.div`
  background-color: ${(props) => props.theme.background.paper};
  display: flex;
  border-radius: 16px;
  position: relative;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 4px 8px #00000017;
  }
`;
export const ContainerClose = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;
export const ContainerContentCard = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ItemImg = styled.div<IProps>`
  width: 20%;
  height: 100%;
  overflow: hidden;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 35%;
  }
`;

export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  align-self: center;
  padding: 10px;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
    & > div {
      margin-bottom: 15px;
      width: 100%;
      padding-right: 15px;
    }
  }
`;

export const ItemTypo = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
`;
export const ItemCounter = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;
export const Itemprice = styled.div`
  width: 15%;
  text-align: end;
  align-self: center;
  & div {
    white-space: nowrap;
  }
`;
export const DisvountDiv = styled.div`
  position: absolute;
  width: 87px;
  height: 87px;
  background-color: ${(props) => props.theme.colors.error};
  top: 20px;
  right: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
