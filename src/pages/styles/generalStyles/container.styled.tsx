import styled from "styled-components";


export const Container = styled.div`
    padding-left: 30px;
    padding-right: 30px;

    @media(min-width: ${({ theme }) => theme?.mobile}){
        padding-left: 60px;
        padding-right: 60px;
    }
`

export const Flex = styled.div`
    
    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        display: flex;
        justify-content: space-between;
    }
`


export const Grid = styled.div`
    
    @media(min-width: ${({ theme }) => theme?.mobile?.ipad}){
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-content: center;
        grid-gap: 50px;
        
    }
`
