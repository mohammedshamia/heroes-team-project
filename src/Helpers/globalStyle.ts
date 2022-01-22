import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`

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
}

.swiper-pagination-bullet-active {
background: ${(props) => props.theme.colors.primary} !important;
}
.swiper-button-next,.swiper-button-prev {
bottom:-2px !important;
top:auto !important;
transform: scale(0.45,0.35);
color:${(props) => props.theme.textColors.primary} !important; 
font-weight:1000;
z-index:99999!important;
} 
.swiper-button-next,.swiper-button-prev {
right: calc(50% - 60px)!important;
} 
.swiper-button-prev{
left: calc(50% - 60px)!important;

} 


#root > div > div:nth-child(4) > div.sc-jcFjpl.gxkdyQ > div {
  padding-top: 15px;
}

#root > div > div:nth-child(4) > div.sc-jcFjpl.gxkdyQ > div > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
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


`;
