import { Form } from "formik";
import styled from "styled-components";

export const FormProduct = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 16px;
  margin: 3rem;
  padding: 4rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ProductImage = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right:1rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (width: 1024px) {
    width: 41%;
  }
`;
export const ProductImageUpload = styled.div`
  border: 1px dashed #707070;
  display: flex;
  justify-content: center;
  width: 230px;
  margin-bottom: 1rem;
  height: 200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProductImageUploadGroup = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

export const ProductImageUploadGroupButton = styled.div`
  border: 1px dashed #707070;
  display: flex;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-right: 1rem;
`;

export const ProductDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormProductInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexButon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Continer = styled(Form)`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (width: 1024px) {
    width: 100%;
  }
`;
