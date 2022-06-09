import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../App"
import {
  Section,
  Div,
  Image,
  Div1,
  H1,
  Ul,
  Ul1,
  Ul2,
  Span1,
  Div2,
  H2,
  Ul3,
  Button,
} from "./styles/Details/Details"

const filterBorderCountry = (countryList, borders) => {
  return countryList.filter((country) => borders.includes(country.alpha3Code))
}

const Details = (props) => {
  const {
    name,
    nativeName,
    flag,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props.state.countryInfo
  const { state } = useContext(AppContext)
  const navigate = useNavigate()

  const viewBorderCountry = (countryName) => {
    navigate(`/country-details/${countryName}`)
  }

  const filteredBorders =
    borders && filterBorderCountry(state.countryList, borders)

  return (
    <Section>
      <Div>
        <Image src={flag} alt={`${name} flag`} />
      </Div>

      <Div1>
        <H1>{name}</H1>
        <Ul>
          <li>
            <Ul1>
              <li>
                <Span1>Native Name:</Span1> {nativeName}
              </li>
              <li>
                <Span1>Population:</Span1> {population}
              </li>
              <li>
                <Span1>Region:</Span1> {region}
              </li>
              <li>
                <Span1>Sub Region:</Span1> {subregion}
              </li>
              <li>
                <Span1>Capital:</Span1> {capital}
              </li>
            </Ul1>
          </li>
          <li>
            <Ul2>
              <li>
                <Span1>Top Level Domain: </Span1>
                {topLevelDomain?.map((domain) => domain)}
              </li>
              <li>
                <Span1>Currencies: </Span1>
                {currencies?.map((currency) => currency.name).join(", ")}
              </li>
              <li>
                <Span1>Languages: </Span1>
                {languages?.map((lang) => lang.name).join(", ")}
              </li>
            </Ul2>
          </li>
        </Ul>
        <Div2>
          <H2>Border Countries: </H2>
          <Ul3>
            {filteredBorders?.map((country, idx) => (
              <li key={idx}>
                <Button onClick={() => viewBorderCountry(country.name)}>
                  {country.name}
                </Button>
              </li>
            ))}
          </Ul3>
        </Div2>
      </Div1>
    </Section>
  )
}

export default Details
