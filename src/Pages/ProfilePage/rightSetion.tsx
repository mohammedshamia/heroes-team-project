import React from "react";
import Button from "../../Components/Elements/Buttons";
import Typography from "../../Components/Typography";
import { IUser } from "../../Store/Types";
import Avater from "./avater";
import { UserData } from "./interface";
import {
  RightProfile,
  RightProfileAvaterSection,
  RightProfileSecion,
  RightProfileSecionOne,
  RightProfileuserDate,
  RightProfileuserDateButton,
  RightProfileuserDatem,
} from "./profile.style";

interface IProps {
  UserProileData: IUser;
}

const RightSetion = ({ UserProileData }: IProps) => {
  return (
    <RightProfile>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        My Profile
      </Typography>
      <RightProfileSecion>
        <RightProfileSecionOne>
          <RightProfileuserDate>
            <RightProfileuserDatem>
              <Typography
                children={"First Name"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Last Name"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Email"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                }}
              />
              <Typography
                children={"Birthday"}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                  
                }}
              />
            </RightProfileuserDatem>
            <RightProfileuserDatem>
              <Typography
                children={UserProileData.firstName}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold"
                }}
              />

              <Typography
                children={UserProileData.lastName}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold"
                }}
              />

              <Typography
                children={UserProileData.email}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold"
                }}
              />
              <Typography
                children={UserProileData.dateOfBirth.split('T')[0]}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold"
                }}
              />
            </RightProfileuserDatem>
          </RightProfileuserDate>{" "}
          <RightProfileuserDateButton>
            <Button
              backgroundColor={"#FCDD06"}
              padding={"1rem 1.5rem"}
              fontSize={"12px"}
              backgroundColorHover={"#ffc107"}
            >
              Change Password
            </Button>
          </RightProfileuserDateButton>
        </RightProfileSecionOne>

        <RightProfileAvaterSection>
          <Avater
            width={"150px"}
            height={"150px"}
            src={UserProileData.profileImage.length?UserProileData.profileImage:'Assets/profile.png'}
          />
          <RightProfileuserDateButton>
            <Button
              backgroundColor={"#FCDD06"}
              padding={"1rem 1.5rem"}
              fontSize={"12px"}
              backgroundColorHover={"#ffc107"}
            >
              Upload new photo
            </Button>
          </RightProfileuserDateButton>
        </RightProfileAvaterSection>
      </RightProfileSecion>
    </RightProfile>
  );
};

export default RightSetion;
