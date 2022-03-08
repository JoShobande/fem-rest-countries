import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: ${({theme})=> theme?.lightMode?.headerBackgroundColor};
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    height: 80px;
  
    h1{
        height: 100%;
        padding-top: 25px;
        padding-left: 20px;

        @media(min-width: ${({ theme }) => theme?.mobile}){
            padding-top: 20px;
            padding-left: 60px;
        }
       
    }
    
`