import styled from '@emotion/styled'
import {
  greyColor,
  greyColorOpacity,
  primaryColor
} from './Styled'
export const MarkDown = styled.div `
   @media (min-width: 960px) {padding:1rem; }
  img {
    width: 140px;
    float: right;
  }
  table {
    width: 100%;
  }
  ul {
    list-style-type: none;
    margin:0;
    padding:0;

    @media (min-width: 960px) { 
      
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    border: 1px solid ${greyColorOpacity};
    box-shadow: 10px 5px 5px ${greyColorOpacity};  }
 
  }

  em {
    padding-left: 2rem;
    display: inline-block;
  }
  li {
    padding: 0.3rem;
    background-color: #e3dedb33;
  }
  ul li:nth-child(even){
     filter: brightness(85%);
  }
  ul li::first-child{
    border-radius: 0.5rem;
    background-color:red;
}
ul li::last-child {
  border-radius: 0.5rem;
}  code {
    background-color: ${greyColor};
    color: white;
    padding: 0.5rem;
    display: inline-block;
    display: inline-block;
    user-select: text;
  }
  em {
    font-size: 1.15em;
    word-wrap: break-word ;
     
  }
  h3,
  h4 {
     margin:1rem 0.5rem 0 0;
     text-align:right;
     color:${greyColor};
  }
`