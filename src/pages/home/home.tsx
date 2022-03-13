import { Container, Flex } from "../generalStyles/container.styled"
import { StyledActions, StyledSelectbox } from "./home.styled";

const Home = () => {
    return(
       <Container>
           <Flex>
               <StyledActions>
                    <input placeholder='Search for a country...'/>
               </StyledActions>
               <StyledActions>
                   <StyledSelectbox data-testid="region-select">
                        <p>Filter By Region</p>
                   </StyledSelectbox>
               </StyledActions>
           
           </Flex>
           
       </Container>
    )
}

export default Home;