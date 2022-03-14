import styled from "styled-components";

export const StyledActions = styled.div`

    input, div{
        border: 1px solid white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
        border-radius: 6px;
    }

    input{
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 30px;
        padding: 10px;
        ::placeholder{
            color: #bab7b7;
        }

        @media(min-width: ${({ theme }) => theme?.mobile}){
            width: 500px;
        }
    }
`

export const StyledSelectbox = styled.div`
    width: 50%;
    font-size: 12px;
    padding: 15px;
    position: relative;

    @media(min-width: ${({ theme }) => theme?.mobile}){
        width: 200px;
        margin-top: 30px;
    }

    img{
        position: absolute;
        right: 10px;
        bottom: 15px;
    }
`

