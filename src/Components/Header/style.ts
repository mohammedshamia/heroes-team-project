import styled from "styled-components";

export const LoadingBar = styled.div<{ loading?: boolean }>`
  height: 2px;
  background-color: ${(props) =>
    props.loading ? props.theme.background.default : "transparent"};
  position: relative;
  &::after {
    content: "";
    width: 20%;
    display: block;

    background-color: ${(props) =>
      props.loading ? props.theme.colors.primary : "transparent"};
    height: 100%;
    animation: isLoading 1s infinite linear;
    position: absolute;
    left: -20%;
  }

  @keyframes isLoading {
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
