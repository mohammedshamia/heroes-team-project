import React, { FC, useEffect } from "react";

//Components
import Container from "../Container";
import Logo from "../Elements/Logo/index";
import Search from "../Elements/Search/search";

import SVGICON from "./HeaderIcons/headerIcons";

import Person from "../Icons/PersonIcon";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";

//Styles
import {
  Root,
  Content,
  SearchContent,
  ICONS,
  MobileSearchContent,
  LoadingBar,
} from "./style";
import { useTheme } from "styled-components";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../Store/Slices/user";
import Avater from "../../Pages/ProfilePage/avater";
import { Link } from "react-router-dom";

interface IHeader {
  ToggelTheme: Function;
}

const Header: FC<IHeader> = ({ ToggelTheme }) => {
  const dispatch = useAppDispatch();
  const { data, loading: userLoading } = useSelector(
    (state: RootState) => state.entities.user
  );
  const { loading: productLoading } = useSelector(
    (state: RootState) => state.entities.products
  );
  const { loading: ordersLoading } = useSelector(
    (state: RootState) => state.entities.order
  );

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  const theme = useTheme();
  return (
    <React.Fragment>
      <Root>
        <LoadingBar
          isLoading={userLoading || productLoading || ordersLoading}
        />
        <Container>
          <Content>
            <Logo main="Hero" sub="Shop" />

            <SearchContent>
              <Search />
            </SearchContent>

            <ICONS>
              <SVGICON
                description={theme.type !== "light" ? "Light" : "Dark"}
                onClick={ToggelTheme}
              >
                <svg width={"25px"} fill="#fff">
                  {theme.type === "light" ? (
                    <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
                  ) : (
                    <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"></path>
                  )}
                </svg>
              </SVGICON>
              <SVGICON
                notification={data?.cart && data?.cart?.items.length}
                description="Cart"
                to="/cart"
              >
                <ShoppingCartIcon />
              </SVGICON>

              {data ? (
                <Link to="/profile">
                  {data.profileImage ? (
                    <Avater
                      src={data.profileImage}
                      width="4.6rem"
                      height="4.6rem"
                    />
                  ) : (
                    <SVGICON description={data.firstName} to="/profile">
                      <Person />
                    </SVGICON>
                  )}
                </Link>
              ) : (
                <SVGICON description="Login / SignUp" to="/login">
                  <Person />
                </SVGICON>
              )}
            </ICONS>
          </Content>
        </Container>
      </Root>
      <Container>
        <MobileSearchContent>
          <Search />
        </MobileSearchContent>
      </Container>
    </React.Fragment>
  );
};

export default Header;
