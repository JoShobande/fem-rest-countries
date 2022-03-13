import styled from "styled-components";


export const Container = styled.div`
    padding-left: 30px;
    padding-right: 30px;
`

export const Flex = styled.div`
    
    

    @media(min-width: ${({ theme }) => theme?.mobile}){
        display: flex;
        justify-content: space-between;
    }
`