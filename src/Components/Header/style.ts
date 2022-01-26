import styled from "styled-components";

export const LoadingBar = styled.div<{ isLoading: boolean }>`
  height: 2px;
  background-color: ${(props) =>
    props.isLoading ? props.theme.background.default : "transparent"};
  position: relative;
  &::after {
    content: "";
    width: 20%;
    display: block;

    background-color: ${(props) =>
      props.isLoading ? props.theme.colors.primary : "transparent"};
    height: 100%;
    animation: loader 1s infinite linear;
    position: absolute;
    left: -20%;
  }

  @keyframes loader {
    0% {
      left: -20%;
    }
    100% {
      left: 120%;
    }
  }
`;

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #242424;
  background-color: ${(props) => props.theme.background.header};
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
  padding: 10px 0;

  @media (min-width: 1001px) {
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

  height: 100%;
  width: 152px;

  z-index: 1;

  position: absolute;
  right: 0;
  top: 0;

  /* margin-left: -10px; */
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
