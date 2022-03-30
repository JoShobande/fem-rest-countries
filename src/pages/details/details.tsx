import { Container } from "../styles/generalStyles/container.styled"
import { BackButton, BorderCountries, CountryDetails, CountryDetailsText, InfoContainer, OtherInfo } from "./details.styled"
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
    },[name])

    console.log(countryDetails)

    return(
        <Container>
            <BackButton onClick={() => navigate(-1)}>
                <img src={back} alt='back-arrow'/>
                Back
            </BackButton>
            <CountryDetails>
                
                <div>
                    {/* @ts-ignore */}
                    <img src={countryDetails?.flag} alt='flag'/>
                </div>
                <CountryDetailsText>
                    <CountryName>
                        {/* @ts-ignore */}
                        {countryDetails?.name}
                    </CountryName>

                    <InfoContainer>
                        <div>
                                 {/* @ts-ignore */}
                
                            <p>Native Name: <span>{countryDetails?.nativeName}</span>{}</p>
                            {/* @ts-ignore */}
                            <p>Population: <span>{countryDetails?.population}</span>{}</p>
                            {/* @ts-ignore */}
                            <p>Region: <span>{}</span>{countryDetails?.region}</p>
                            {/* @ts-ignore */}
                            <p>Sub Region: <span>{countryDetails?.subregion}</span>{}</p>
                            {/* @ts-ignore */}
                            <p>Capital: <span>{}</span>{countryDetails?.capital}</p>
                        
                        </div>
                             

                        <OtherInfo>
                            {/* @ts-ignore */}
                            <p>Top Level Domain: <span>{countryDetails.topLevelDomain}</span></p>
                            {/* @ts-ignore */}
                            <p>Currencies: <span>{countryDetails?.currencies?.code}</span></p>
                            {/* @ts-ignore */}
                            <p>Languages: <span>{countryDetails.languages?.name}</span></p>
                        </OtherInfo>


                    </InfoContainer>
              

                    <BorderCountries>
                        <p>Border Countries:</p>
                        <div>
                             
                            {
                                // @ts-ignore
                                countryDetails.borders?.map((border)=>{
                                    return(
                                        <button 
                                            key={border}
                                            onClick={()=>navigate(`/${border}`)}
                                        >
                                            {border}
                                        </button>
                                    )
                                })
                            }
                        </div>
                        
                    </BorderCountries>
                    
                </CountryDetailsText>
                
            </CountryDetails>
        </Container>
    )
}


export default Details;