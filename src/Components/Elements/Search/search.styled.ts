import styled, { css } from "styled-components";

//Root Component
export const Root = styled.form`
  position: relative;
  width: 100%;
  padding: 0 2px;
`;

//Input Component
export const ValueWrapper = styled.input`
  width: 100%;

  border-radius: 6px;
  border: 1px solid #b6c1ce;
  height: 40px;
`;

export const Input = styled(ValueWrapper)`
  transition: border-color 150ms linear;
  padding: 0 1rem;
  width: 100%;
  border: none;
`;

export const AutoCompleteContainer = styled.ul`
  background: #fff;

  padding: 8px 0;
  margin: 0;

  list-style-type: none;

  min-width: 580px;

  position: absolute;
  top: 100%;
  left: 0;

  border: 1px solid #b6c1ce;
  border-radius: 2px;

  max-height: 280px;

  overflow-y: auto;

  z-index: 1;
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;

  &:hover {
    background-color: #ebf4ff;
  }
`;

export const baseButtonMixin = css`
  background: none;
  border: none;
  padding: 0;
`;

export const AutoCompleteItemButton = styled.button`
  ${baseButtonMixin}
  width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
