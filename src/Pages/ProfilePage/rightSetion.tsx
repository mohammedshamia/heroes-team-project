import { useState } from "react";
import { useTheme } from "styled-components";
import ChangePassword from "../../Components/ChangePassword";
import Button from "../../Components/Elements/Buttons";
import Modal from "../../Components/Elements/Modal/Dialog/Modal";
import ModalAction from "../../Components/Elements/Modal/Dialog/ModalAction/ModalAction";
import ModalTitle from "../../Components/Elements/Modal/Dialog/ModalTitle/ModalTitle";
import Typography from "../../Components/Typography";
import { IUser } from "../../Store/Types";
import Avater from "./avater";
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
  const [passwordModalDisplay, setPasswordModalDisplay] =
    useState<boolean>(false);
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);
  const theme = useTheme();

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
                  fontWeight: "bold",
                }}
              />

              <Typography
                children={UserProileData.lastName}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold",
                }}
              />

              <Typography
                children={UserProileData.email}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold",
                }}
              />
              <Typography
                children={UserProileData.dateOfBirth.split("T")[0]}
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.96px",
                  marginTop: "3rem",
                  fontWeight: "bold",
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
              onClick={() => setPasswordModalDisplay(true)}
            >
              Change Password
            </Button>
            {passwordModalDisplay && (
              <ChangePassword
                modalDisplay={passwordModalDisplay}
                setModalDisplay={setPasswordModalDisplay}
              />
            )}
          </RightProfileuserDateButton>
        </RightProfileSecionOne>

        <RightProfileAvaterSection>
          <Avater
            width={"150px"}
            height={"150px"}
            src={
              UserProileData.profileImage.length
                ? UserProileData.profileImage
                : "Assets/profile.png"
            }
          />
          <RightProfileuserDateButton>
            <Button
              backgroundColor={"#FCDD06"}
              padding={"1rem 1.5rem"}
              fontSize={"12px"}
              backgroundColorHover={"#ffc107"}
              onClick={() => setUploadImagedModalDisplay(true)}
            >
              Upload new photo
            </Button>
            {uploadImagedModalDisplay && (
              <Modal
                isOpen={uploadImagedModalDisplay}
                onClose={() => setUploadImagedModalDisplay(false)}
              >
                <ModalTitle>
                  <h4>Upload new photo</h4>
                </ModalTitle>
                <ModalAction>
                  <Button
                    backgroundColor={theme.colors.primary}
                    style={{ fontWeight: "bold" }}
                    onClick={() => console.log("uploaded")}
                  >
                    Upload
                  </Button>
                  <Button
                    backgroundColor={theme.colors.error}
                    style={{ fontWeight: "bold" }}
                    onClick={() => {
                      setUploadImagedModalDisplay(false);
                    }}
                  >
                    Cancel
                  </Button>
                </ModalAction>
              </Modal>
            )}
          </RightProfileuserDateButton>
        </RightProfileAvaterSection>
      </RightProfileSecion>
    </RightProfile>
  );
};

export default RightSetion;
