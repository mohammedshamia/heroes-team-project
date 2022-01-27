import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`

.css-1s2u09g-control{
  background-color: ${(props) => props.theme.background.paper} !important;
}

.css-1pahdxg-control{
  background-color: ${(props) => props.theme.background.paper} !important;
  border-color:  none !important;
}



@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Mulish", sans-serif;
transition: color 0.5s,background-color 0.5s;
}

html {
font-size: 62.5%;
overflow-x: hidden;
}

body {
  padding-top: 58px;
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.textColors.primary};
  scroll-behavior: smooth;
}

input {
  background-color: ${(props) => props.theme.background.paper}!important;
  color: ${(props) => props.theme.textColors.primary}!important;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary}!important;
    border-color: transparent;
  }
}

.swiper{
  padding-bottom: 40px!important;
}

.swiper-pagination-bullet {
height: 14px!important;
width: 14px!important;
opacity: 1;
background: rgba(0, 0, 0, 0.2);
background: ${(props) => props.theme.textColors.secondary}!important;
@media screen and (max-width: 500px) {
  height: 8px!important;
  width: 8px!important;
  margin: 0 1px!important;
}
}

.swiper-pagination-bullet-active {
background: ${(props) => props.theme.colors.primary}!important;
}

.swiper-button-next,.swiper-button-prev {
bottom:-2px !important;
top:auto !important;
transform: scale(0.45,0.35);
color:${(props) => props.theme.textColors.primary}!important; 
font-weight:1000;
z-index:99999!important;

} 

.swiper-button-next,.swiper-button-prev {
right: calc(50% - 60px)!important;
@media screen and (max-width: 500px) {
  right: calc(50% - 40px)!important;
}
} 

.swiper-button-prev{
  left: calc(50% - 60px)!important;
  @media screen and (max-width: 500px) {
    left: calc(50% - 40px)!important;
  }
} 

.category > div > div {
  margin-top: -35px;
  padding-bottom: 0!important;
}

.category > div > div > div.swiper-wrapper {
  padding-top: 30px;
}

.category > div > div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
        top: 0;
    bottom: auto!important;
    text-align: end;
}


body::-webkit-scrollbar,
div::-webkit-scrollbar {
  width: 0.8em;
}

body::-webkit-scrollbar-track,
div::-webkit-scrollbar-track {
  background-color: #333;
  width: 1em;
  padding: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb,
div::-webkit-scrollbar-thumb {
  background-color: #999;
  opacity: 0.3;
  border: 2px solid #333;
  border-radius: 5px;
}

body::-webkit-scrollbar-thumb:hover,
div::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
  transform: scaleX(1.45);
}


#react-select-5-placeholder ,#react-select-3-placeholder {
  padding: 0 5px;
}
#react-select-5-listbox ,#react-select-3-listbox {
  background-color: ${(props) => props.background.paper};

  color: ${(props) => props.textColors.primary}; 
  & > div > div {
    background-color: ${(props) => props.background.paper}; 
    &:hover {
    background-color: ${(props) => props.background.default}; 
  }
  }
}
.css-1rhbuit-multiValue {
  background-color: ${(props) => props.background.secondary}!important; 
  & div {
    color: ${(props) => props.textColors.primary}!important; 
  }
}

`;
