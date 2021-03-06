import styled from "styled-components";


export const BackButton = styled.button`
    margin-top: 30px;
    width: 130px;
    height: 40px;
    background: white;
    border: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
    position: relative;
    font-size: 16px;
    cursor: pointer;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        margin-top: 70px;
    }
    
    img{
        position: absolute;
        left: 10px;
        top: 8px;
    }
`

export const CountryDetails = styled.div`
    margin-top: 40px;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        display: flex;
    }

    img{
        @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
            width: 500px;
            // height:
        }
    }

    p{
        font-weight: 600;
        margin-bottom: 20px;
        span{
            font-weight: normal;
        }
    }  
`

export const CountryDetailsText = styled.div`
    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        margin-left: 100px;
        width: 40%;
    }
    @media(max-width: ${({ theme }) => theme?.mobile?.ipad}){
        // margin-left: 40px;
    }
    
`

export const CountryName = styled.p`
    font-weight: 800;
    margin-bottom: 30px;
    font-size: 24px;
    margin-top: 40px;
`

export const InfoContainer = styled.div`
    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        display: flex;
        justify-content: space-between;
    }

`

export const OtherInfo = styled.div`
    margin-top: 40px;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        margin-top: 0;
    }

`

export const BorderCountries = styled.div`
    margin-top: 40px;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        display: flex;
        p{
            margin-right: 20px;
        }
    }

    button{
        width: 100px;
        height: 30px;
        background: white;
        border: white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
        margin-bottom: 20px;
        margin-right: 10px;
        cursor: pointer;
            
    }
`

