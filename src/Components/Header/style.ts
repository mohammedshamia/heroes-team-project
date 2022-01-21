import styled from "styled-components";

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #242424;
  height: 58px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MobileSearchContent = styled.div`
  display: flex;
  padding: 10px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SearchButton = styled.button`
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #000000;

  height: 40px;
  width: 152px;

  z-index: 1;

  margin-left: -10px;
`;

export const ICONS = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 32px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;
