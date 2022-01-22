import { Link } from "react-router-dom";
import styled from "styled-components";
import { IpropsAvater } from "./interface";

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-self: center;
    padding-top: 1rem;
  }
`;

export const LeftProfile = styled.div`
  background-color: ${(props) => props.theme.background.paper};
  border-radius: 12px;
  flex-direction: column;
  margin-right: 1rem;
  width: 30%;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0rem;
    width: 100%;
    padding: 1rem 2rem;
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
  color: ${(props) => props.theme.textColors.primary};
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
  background-color: ${(props) => props.theme.background.paper};
  border-radius: 12px;
  padding: 1rem 3rem;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;

export const RightProfileSecion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
    align-self: center;
  }
`;
export const RightProfileAvaterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightProfileSecionOne = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
  @media (width: 1024px) {
    width: 70%;
  }
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
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
    align-self: center;
  }
`;
