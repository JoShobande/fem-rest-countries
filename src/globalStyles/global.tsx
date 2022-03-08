import { createGlobalStyle } from "styled-components";

interface themeProps{
    mobile: string
}

const GlobalStyles = createGlobalStyle<{theme: themeProps}>`
   *{
       box-sizing: border-box;
       margin: 0;
       padding: 0;
    }
    body{
        font-family: 'Nunito Sans', sans-serif;    
    }
    h1{
        font-size: 20px;
        @media(min-width: ${({ theme }) => theme?.mobile}){
            font-size: 32px;
        }
    }
    h2{
        font-size: 18px
    }
    h3{
        font-size: 16px;
    }
    img{
       max-width: 100%;
    }
`

export default GlobalStyles  

