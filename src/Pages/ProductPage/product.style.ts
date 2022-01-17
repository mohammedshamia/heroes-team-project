import styled from "styled-components";
export const ImageSections = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-right: 1rem;
`;

export const Imagefirst = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    align-items: center;
    align-self: center;
  }
`;

export const ImageSecionSecond = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-bottom: 2rem;

    align-items: center;
    align-self: center;
  }
`;

export const ImageSmall = styled.img`
  border: 1px solid #f2f2f2;
  width: 100px;
  height: 100px;
  margin-right: 1rem;
`;
export const FirstSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;
export const Padding = styled.div`
  padding-bottom: 2rem;
`;
export const Featured = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 20px;
`;
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: auto;
    padding: 1rem;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

export const Color = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;
export const ColorButton = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
`;
export const ColorText = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SizeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (width: 1024px) {
    flex-direction: column;
  }
`;
export const BookMark = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.8rem;
`;
export const Margin = styled.div`
  padding-right: 2rem;
`;

export const Technical = styled.div`
  border: 1px solid #bcbcbc;
  padding: 2rem;
  margin-bottom: 5rem;
`;
export const Thead = styled.thead`
  background: #f2f2f2;
  border-radius: 2rem;
`;

export const Tbody = styled.tbody`
  background: #fff;
  border-radius: 10px;
`;

export const TechnicalDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledTable = styled.div`
  width: 100%;
  & table {
    width: 90%;
    & th,
    td {
      text-align: start;
      padding: 1rem 2rem;
      color: #242424;
      font-size: 12px;
      font-weight: 500;
    }

    & tbody {
      transition: all 0.1s;
      &:nth-child(odd) {
      }
      &:nth-child(even) {
        background-color: #f2f2f2;
        border-radius: 1rem;
      }
    }
  }
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Pragraph = styled.div`
  background: #f2f2f2;
  padding: 1rem;
`;

export const Pragraphdate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const CardsSection = styled.div`
  background: #f7f8fc;
  width: 100%;
  padding: 0 0 180px;
`;
