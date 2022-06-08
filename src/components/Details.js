import React from "react"
import {
  Section,
  Image,
  Div,
  H1,
  Ul,
  Ul1,
  Ul2,
  Span1,
  Div1,
  H2,
  Ul3,
} from "./styles/Details/Details"

const Details = (props) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props.state.countryInfo

  return (
    <Section>
      <pre>{JSON.stringify(props.state.countryInfo, null, 2)}</pre>
      <Image src="" alt="" />
      <Div>
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
      </Div>
      <Div1>
        <H2>Border Countries: </H2>
        <Ul3>
          {borders?.map((borderCountry, idx) => (
            <li key={idx}>
              <button>{borderCountry}</button>
            </li>
          ))}
        </Ul3>
      </Div1>
    </Section>
  )
}

export default Details
