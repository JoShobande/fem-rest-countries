import { Container } from "../styles/generalStyles/container.styled"
import { BackButton, CountryDetails, OtherInfo } from "./details.styled"
import back from '../../assets/left-arrow.png'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CountryName } from './details.styled'


const Details = () => {
    let navigate = useNavigate()
    let {name} = useParams<{name: string}>()

    const [countryDetails, setCountryDetails] = useState('')

    const fetchCountry = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`)
        if(!response.ok){
            throw Error('error')
        }
        return response.json()
    }

    useEffect(()=>{
        fetchCountry()
        .then((response)=>{
            setCountryDetails(response[0])
        })
    },[])

    console.log(countryDetails)

    return(
        <Container>
            <BackButton onClick={()=>navigate('/')}>
                <img src={back} alt='back-arrow'/>
                Back
            </BackButton>
            <CountryDetails>
                
                <div>
                    {/* @ts-ignore */}
                    <img src={countryDetails.flag} alt='flag'/>
                </div>
                <div>
                    <CountryName>
                        {/* @ts-ignore */}
                        {countryDetails.name}
                    </CountryName>
                    {/* @ts-ignore */}
                    <p>Native Name: <span>{countryDetails.nativeName}</span>{}</p>
                    {/* @ts-ignore */}
                    <p>Population: <span>{countryDetails.population}</span>{}</p>
                    {/* @ts-ignore */}
                    <p>Region: <span>{}</span>{countryDetails.region}</p>
                    {/* @ts-ignore */}
                    <p>Sub Region: <span>{countryDetails.subregion}</span>{}</p>
                    {/* @ts-ignore */}
                    <p>Capital: <span>{}</span>{countryDetails.capital}</p>
                    

                    <OtherInfo>
                        {/* @ts-ignore */}
                        <p>Top Level Domain: <span>{countryDetails.topLevelDomain}</span></p>
                        {/* @ts-ignore */}
                        {/* <p>Currencies: <span>{countryDetails.currencies[0].code}</span></p> */}
                        {/* @ts-ignore */}
                        {/* <p>Languages: <span>{countryDetails.languages[0]}</span></p> */}
                    </OtherInfo>
                    
                </div>
                
            </CountryDetails>
        </Container>
    )
}


export default Details;