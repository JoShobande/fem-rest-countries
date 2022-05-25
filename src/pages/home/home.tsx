import { Container, Flex, Grid } from "../styles/generalStyles/container.styled"
import { CountryCard, CountryInfo, CountryName, RegionOptions, StyledActions, StyledSelectbox} from "./home.styled";
import downArrow from '../../assets/down-arrow.png'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createMemoryHistory } from "history";

const Home = () => {

    let navigate = useNavigate()

    let location = useLocation()

    console.log(location)

    const [post, setPost] = useState<any>()
    const [option, setOption] = useState('all')
    const [countryName, setCountryName] = useState('')
    const [showRegions, setShowRegions] = useState(false)
    const [currentRegion, setCurrentRegion] = useState('')

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const handleSearch = (e:any) => {
        setCountryName(e.target.value)
        setOption('name')
    }


    const handleShowRegions = () => {
        setShowRegions(!showRegions)
    }

    const handleSetCurrentRegion = (region: string) => {
        setCurrentRegion(region)
    }

    const fetchCountries = async () => {
        const response = await fetch(`https://restcountries.com/v2/${option}${countryName &&`/${countryName}`}`)
        if(!response.ok){
            throw Error('error')
        }
        return response.json()
    }

    const fetchRegions = async () => {
        const response = await fetch(`https://restcountries.com/v2/region/${currentRegion}`)
        if(!response.ok){
            throw Error('error')
        }
        return response.json()
    }

    const history = createMemoryHistory()
    console.log(history.location)

    useEffect(()=>{
        if(countryName){
            setOption('name')
        }else if(countryName === ''){
            setOption('')
        }
    },[countryName])

    useEffect(()=>{
        if(currentRegion){
            fetchRegions()
            .then((region)=>{
                setPost(region)
            })
        }else{
            fetchCountries()
            .then((country)=>{
                setPost(country)
            })
        }
        
    },[countryName, currentRegion])

    useEffect(()=>{
        console.log(post)
    },[post])

    return(
       <Container>
           <Flex>
               <StyledActions>
                    <input 
                        placeholder='Search for a country...'
                        onChange={handleSearch}
                    />
               </StyledActions>
               <StyledActions>
                   <StyledSelectbox data-testid="region-select" onClick={handleShowRegions}>
                        <p>{currentRegion ? currentRegion : 'Filter by Region'}</p>
                        <img src={downArrow} alt='select'/>     
                   </StyledSelectbox>
                    {
                        showRegions 
                        &&
                        <RegionOptions data-testid='options'>
                            <ul>
                               {
                                   regions.map((region, index)=>{
                                       return(
                                           <li 
                                            key={region}
                                            onClick={()=>{handleSetCurrentRegion(region)}}
                                            data-testid={`region-list-${index}`}
                                           >
                                               {region}
                                           </li>
                                       )
                                   })
                               }
                               
                            </ul>
                        </RegionOptions>
                    }
               </StyledActions> 
           </Flex>

           <Grid>
            {
                
                post && post.map((item:any, index:any)=>{
                    return(  
                    <CountryCard  key={index} onClick={()=>navigate(`/${item.name}`)}>
                        <img src={item.flag}   alt='alt'/>
                        <CountryInfo>
                            <CountryName data-testid={`country-item-${index}`}>{item.name}</CountryName>
                            <p>Popluation: <span>{item.population}</span></p>
                            <p >Region: <span data-testid={`region-item-${index}`}>{item.region}</span></p>
                            <p>Capital: <span>{item.capital}</span></p>
                        </CountryInfo>
                        
                    </CountryCard>
                    
                    )
                })
            }
           </Grid>

           
       </Container>
    )
}

export default Home;