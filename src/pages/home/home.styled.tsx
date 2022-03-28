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

        @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
            width: 500px;
        }
    }
`

export const StyledSelectbox = styled.div`
    width: 50%;
    font-size: 12px;
    padding: 15px;
    position: relative;
    cursor: pointer;
    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        width: 200px;
        margin-top: 30px;
    }

    img{
        position: absolute;
        right: 10px;
        bottom: 15px;
    }
`

export const CountryCard = styled.div`
    background-color: white;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    height: auto;
    margin-bottom: 50px;
    margin-top: 50px;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
       width: 300px;
    }

    img{
        min-width: 100%;
        height: 200px;
        object-fit: cover;
    }

    p{
        margin-bottom: 10px;
        font-weight: 600;

        span{
            font-weight: normal;
        }
    }

`

export const CountryInfo = styled.div`
    padding: 20px;
    padding-bottom: 50px;
`

export const CountryName = styled.p`
    font-weight: 800;
    margin-bottom: 30px;
    font-size: 24px;

`

export const RegionOptions = styled.div`
    width: 165px;
    margin-top: 5px;
    padding: 10px;
    position: absolute;
    z-index: 10;
    background-color: white;

    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        width: 200px;
     }
    ul{
        list-style: none;
        cursor: pointer;
        li{
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

`

