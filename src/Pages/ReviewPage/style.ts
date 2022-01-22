import { Link } from "react-router-dom";
import styled from "styled-components";

interface prop {
  opacity?: string;
  width?: string;
  Grid?: string;
  margin?: string;
}
export const Step = styled.span<prop>`
  /*  */
  background-color: #fcdd06;
  color: #000;
  /* #FCDD06; */
  padding: 5px 8px;
  margin: 0px 15px;
  cursor: pointer;
  &:hover {
    background-color: #fcdd06;
  }
  opacity: ${(props) => props.opacity};
`;
export const StepDisable = styled.span`
  background-color: #707070;
  padding: 5px 8px;
  margin: 0px 15px;
  opacity: 0.5;
  color: white;
`;

export const Hr = styled.hr<prop>`
  width: ${(props) => props.width || "65px"};
  height: 2px;
  background: #707070;
  margin: ${(props) => props.margin || null};
  /* margin:0 10px ;  */
`;
export const Stepper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const WrapperFormAndOrder = styled.div<prop>`
  display: grid;
  grid-template-columns: ${(props) => props.Grid || "65% 35%"};

  gap: 10px;
  margin: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;
export const WrapOrder = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background.paper};
    /* #f2f2f2; */
    border-radius: 16px;
    flex-direction: column;
    padding: 2rem 0;
    position: relative;
  }
`;
export const LinkRouter = styled(Link)`
  color: ${(props) => props.theme.textColors.primary};
  /* #707070;  */
  letter-spacing: 0.44px;
  font-size: 16px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1rem;
`;
export const ContentOrderDetails = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
`;

export const ContentPlaceOrder = styled.div`
  background: ${(props) => props.theme.background.paper};
  /* #F2F2F2; */
  border-radius: 16px;
  padding: 2.5rem 4rem;
`;

export const ContentDetailsPlaceOrder = styled.div`
  background: ${(props) => props.theme.background.paper};
  /* #F2F2F2; */
  border-radius: 16px;
  padding: 2.5rem 3rem;
  width: 70%;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerOrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const PositionButton = styled.article`
  width: fit-content;
  align-self: flex-end;
`;
