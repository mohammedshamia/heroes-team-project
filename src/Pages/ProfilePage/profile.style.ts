import { Link } from "react-router-dom";
import styled from "styled-components";
import { IpropsAvater } from "./interface";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0rem;
    align-items: center;
    align-self: center;
  }
`;

export const LeftProfile = styled.div`
  background-color: #f2f2f2;
  border-radius: 12px;
  flex-direction: column;
  margin-right: 1rem;
  width: 300px;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0rem;
    width: 350px;
  }
  @media (width: 1024px) {
    width: 350px;
  }
`;
export const LeftProfileUser = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;

export const ProfileUserImage = styled.img<IpropsAvater>`
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  border-radius: 50%;
  margin-right: ${(props) => props.marginRight || 0};
`;

export const LeftProfileUserName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-self: center;
`;

export const LeftProfileUserLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const LeftProfileUserLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  padding: 1rem;
  color: #242424;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const Divider = styled.hr`
  border: 1px solid #707070;
  opacity: 0.3;
`;
export const RightProfile = styled.div`
  background-color: #f2f2f2;
  border-radius: 12px;
  padding: 3rem;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0rem;
    width: 350px;
  }
`;

export const RightProfileAvaterSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    align-self: center;
    display: flex;
  }
`;

export const RightProfileSecionOne = styled.div`
  flex-direction: column;
  display: flex;
  width: 320px;
  padding: 1rem;
`;

export const RightProfileuserDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const RightProfileuserDatem = styled.div`
  flex-direction: column;
  display: flex;
`;

export const RightProfileuserDateButton = styled.div`
  width: 200px;
  @media (max-width: 768px) {
    align-items: center;
    align-self: center;
    display: flex;
  }
`;
