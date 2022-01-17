import React, { FC } from "react";

//Components
import Container from "../Container";
import Logo from "../Elements/Logo/index";
import Search from "../Elements/Search/search";
import Typography from "../Typography";

import SVGICON from "./HeaderIcons/headerIcons";

import Person from "../Icons/PersonIcon";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import SearchIcon from "../Icons/SearchIcon";

//Styles
import {
  Root,
  Content,
  SearchContent,
  SearchButton,
  ICONS,
  ButtonContent,
} from "./style";

interface IHeader {
  isLoggedIn: boolean;
}

const Header: FC<IHeader> = ({ isLoggedIn }) => {
  return (
    <Root>
      <Container>
        <Content>
          <Logo main="Pro" sub="Shop" />

          <SearchContent>
            <Search data={[{ name: "mohammed", code: "123" }]} />
            <SearchButton>
              <ButtonContent>
                <div style={{ width: "18px", height: "18px" }}>
                  <SearchIcon />
                </div>
                <Typography variant="body1"> Search</Typography>
              </ButtonContent>
            </SearchButton>
          </SearchContent>

          <ICONS>
            {isLoggedIn ? (
              <SVGICON description="Login" to="/">
                <Person />
              </SVGICON>
            ) : (
              <SVGICON description="Sign UP" to="/">
                <Person />
              </SVGICON>
            )}
            <SVGICON description="Wishlist" to="/">
              <svg data-testid="BookmarkIcon">
                <path
                  fill="white"
                  d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                ></path>
              </svg>
            </SVGICON>
            <SVGICON description="Cart" to="/cart">
              <ShoppingCartIcon />
            </SVGICON>
          </ICONS>
        </Content>
      </Container>
    </Root>
  );
};

export default Header;
