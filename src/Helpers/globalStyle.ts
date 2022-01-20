import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`

@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Mulish", sans-serif;
transition: all 0.5s;
}

html {
font-size: 62.5%;
overflow-x: hidden;
}

body {
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.textColors.primary};
}

.swiper{
  padding-bottom: 40px!important;
}
.swiper-pagination-bullet {
height: 14px;
width: 14px;
opacity: 1;
background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
color: #fff;
background: ${(props) => props.theme.colors.primary} !important;
}
.swiper-button-next {
bottom:-5px !important;
top:auto !important;
transform: scale(0.45,0.35);
color:${(props) => props.theme.textColors.primary} !important; 
font-weight:1000;
right: calc(50% - 50px)!important;
z-index:99999!important;
} 
.swiper-button-prev{
bottom:-5px !important;
top:auto !important;
transform: scale(0.45,0.35);
color:${(props) => props.theme.textColors.primary} !important; 
font-weight:1000;
left: calc(50% - 50px)!important;
z-index:99999!important;

} 


`;
