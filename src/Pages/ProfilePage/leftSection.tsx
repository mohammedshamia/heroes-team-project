import React from "react";
import Typography from "../../Components/Typography";
import { IUser } from "../../Store/Types";
import Avater from "./avater";
import { UserData } from "./interface";
import {
  LeftProfile,
  LeftProfileUser,
  LeftProfileUserName,
  LeftProfileUserLinkGroup,
  LeftProfileUserLink,
  Divider,
} from "./profile.style";

interface IProps {
  UserProileData: IUser;
}
const LeftSection = ({ UserProileData }: IProps) => {
  return (
    <LeftProfile>
      <LeftProfileUser>
        <Avater
          border={"2px solid #fcdd06"}
          src={
            UserProileData.profileImage.length
              ? UserProileData.profileImage
              : "Assets/profile.png"
          }
          marginRight={"1rem"}
        />
        <LeftProfileUserName>
          <Typography style={{ fontWeight: "bold" }}>
            {UserProileData.firstName} {UserProileData.lastName}
          </Typography>
        </LeftProfileUserName>
      </LeftProfileUser>
      <LeftProfileUserLinkGroup>
        <LeftProfileUserLink to="/"> My Orders</LeftProfileUserLink>
        <LeftProfileUserLink to="/"> Wishlist</LeftProfileUserLink>
        <LeftProfileUserLink to="/"> Notifcations</LeftProfileUserLink>
        <LeftProfileUserLink to="/"> Settings</LeftProfileUserLink>
        <Divider />
        <LeftProfileUserLink to="/"> Logout</LeftProfileUserLink>
      </LeftProfileUserLinkGroup>
    </LeftProfile>
  );
};

export default LeftSection;
