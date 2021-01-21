import styled from '@emotion/styled'
import React from 'react'
import {
  Global,
  css
} from '@emotion/react'
export const linkColor = "#00aad4ff"
export const greyColor = "#333333"
export const greyColorOpacity = "#33333399"
export const primaryColor = "#008066ff"
const background = "#888";
const textColor = "#373F49";
export const GlobalCSS = () => < Global
styles = {
  css `
@font-face {
  font-family: "Avenir";
  font-weight: 400;
  font-style: normal;
  src: url("/avenir-400.woff2") format("woff2");
  font-display: swap;
}

body {
  font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 1.65;
  color:${textColor};
  background: ${background};
  margin: 0;
  -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

img {
  display: block;
  width: 100%;
}
a{
  text-decoration:none;
  color:${linkColor}
}
.wrapper {  
  width: 100%;
  margin: 0 auto;
  background-color:white;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  height: 100%; 
}

`
}
/>
export const Navigation = styled.nav `
display: flex;
justify-content: center;
list-style: none;
padding: 0;
margin: 0;
height: 20vh;
max-height: 100px;
font-size: 1.25em;
font-weight:bold;
ul {
    display: inline-flex;
    align-items: center;
    margin: 0 1em; 
    
    li{
        display: inline-flex;
        align-items: center;
        margin: 0 1em;
    } 
}
`
export const Title = styled.h1 `
color:#000000a5;
margin: 0 1rem;
font-size: 2.25em;
font-weight:bold;
text-align:left;
padding:0;
@media (min-width: 960px) {padding:0 1rem; }

`
export const ArticleList = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap:0 5vmin;
  padding: 1rem;
  li {margin: 0;
  padding: 0rem;
  list-style: none; 
   a {
   color:${linkColor};
   text-decoration:none;
   }
}
`


export const TagList = styled.ul `
border-top:1px solid currentColor;
border-bottom:1px solid currentColor;
padding:  2rem;
font-size: 1.25em;
display: inline-flex;
li{
  display: inline-flex;
  border:1px solid currentColor;
  padding: 0.5rem;
  margin :0 3rem;
}
}
`