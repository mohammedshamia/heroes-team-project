import React from "react";
import Typography from "../../Components/Typography";
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
  UserProileData: UserData[];
}
const LeftSection = ({ UserProileData }: IProps) => {
  return (
    <LeftProfile>
      <LeftProfileUser>
        <Avater border={"2px solid #fcdd06"} src={UserProileData[0].image} marginRight={'1rem'}/>
        <LeftProfileUserName>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {UserProileData[0].firstName} {UserProileData[0].lastName}
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
