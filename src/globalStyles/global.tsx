import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Open+Sans&display=swap'); 
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

