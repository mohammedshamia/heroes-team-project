import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import Button from "../../Components/Elements/Buttons";
import Modal from "../../Components/Elements/Modal/Dialog/Modal";
import ModalAction from "../../Components/Elements/Modal/Dialog/ModalAction/ModalAction";
import ModalTitle from "../../Components/Elements/Modal/Dialog/ModalTitle/ModalTitle";
import Typography from "../../Components/Typography";
import { useAppDispatch } from "../../Store/configureStore";
import { userSignOut } from "../../Store/Slices/user";
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const Logout = () => {
    dispatch(userSignOut());
    setModalDisplay(false);
    navigate("/");
  };

  const [modalDisplay, setModalDisplay] = useState<boolean>(false);

  useEffect(() => {
    console.log(modalDisplay, "modalDisplay");
  }, [modalDisplay]);
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
        <LeftProfileUserLink as={'p'} onClick={() => setModalDisplay(true)}>
          Logout
        </LeftProfileUserLink>
        {modalDisplay && (
          <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
            <ModalTitle>
              <h4>Are you sure you want to logout?</h4>
            </ModalTitle>
            <ModalAction>
              <Button onClick={Logout} backgroundColor={theme.colors.error}>
                Log out
              </Button>
              <Button
                backgroundColor={theme.colors.primary}
                onClick={() => {
                  console.log("cancel clicked");
                  setModalDisplay(false);
                }}
              >
                Cancel
              </Button>
            </ModalAction>
          </Modal>
        )}
      </LeftProfileUserLinkGroup>
    </LeftProfile>
  );
};

export default LeftSection;
