import { Container, Flex } from "../generalStyles/container.styled"
import { StyledActions, StyledSelectbox} from "./home.styled";
import downArrow from '../../assets/down-arrow.png'

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
                        <img src={downArrow} alt='select'/>     
                   </StyledSelectbox>
               </StyledActions>
           
           </Flex>
           
       </Container>
    )
}

export default Home;