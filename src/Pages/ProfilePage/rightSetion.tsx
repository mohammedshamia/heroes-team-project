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
import UploadImage from "../../Components/UploadImage";
import {
  RightProfile,
  RightProfileAvaterSection,
  RightProfileSecion,
  RightProfileSecionOne,
  RightProfileuserDate,
  RightProfileuserDateButton,
  RightProfileuserDatem,
  UploaderDiv,
} from "./profile.style";
import Upload from "../../Components/Icons/Upload";
import { useAppDispatch } from "../../Store/configureStore";
import { updateUserProfile } from "../../Store/Slices/user";

interface IProps {
  UserProileData: IUser;
}

const RightSetion = ({ UserProileData }: IProps) => {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState<string>("");
  const [passwordModalDisplay, setPasswordModalDisplay] =
    useState<boolean>(false);
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);
  const theme = useTheme();

  const changePhoto = () => {
    const _UserProileData = { ...UserProileData };
    _UserProileData.profileImage = image;
    dispatch(updateUserProfile(_UserProileData));
    setUploadImagedModalDisplay(false);
  };
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
                <ModalTitle>Upload new photo</ModalTitle>
                <UploaderDiv image={image || UserProileData.profileImage}>
                  {image ? (
                    ""
                  ) : (
                    <UploadImage setImage={setImage}>
                      <Upload color={"#fff"} />
                    </UploadImage>
                  )}
                </UploaderDiv>
                <ModalAction>
                  <Button
                    backgroundColor={theme.colors.primary}
                    style={{ fontWeight: "bold" }}
                    onClick={changePhoto}
                  >
                    Upload
                  </Button>
                  <Button
                    backgroundColor={theme.colors.error}
                    style={{ fontWeight: "bold" }}
                    onClick={() => {
                      setUploadImagedModalDisplay(false);
                      setImage("");
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
