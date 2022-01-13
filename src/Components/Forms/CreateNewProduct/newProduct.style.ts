import styled from "styled-components";

export const FormProduct = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 16px;
  padding: 0.2rem 1rem;
  margin: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProductImageUpload = styled.div`
  border: 1px dashed #707070;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 378px;
  margin-bottom: 1rem;
  height: 346px;
`;
export const ProductImageUploadGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const ProductImageUploadGroupButton = styled.div`
  border: 1px dashed #707070;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 93px;
  margin-right: 1rem;
  height: 102px;
`;

export const ProductDetails = styled.div`
  width: 70%;
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
  padding: 0.2rem 0rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexButon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem 1rem;
  margin: 0rem 3rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
