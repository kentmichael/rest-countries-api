import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  Div,
  Section,
  Div1,
  Image,
  Div2,
  H2,
  Ul,
  Li,
  Span,
} from "./styles/Card/Card"

const Card = () => {
  const navigate = useNavigate()
  const countryList = useSelector((state) => state.countries.countryList)
  const filterResult = useSelector((state) => state.filter.filterResult)
  const { searchString, searchResult } = useSelector((state) => state.search)

  const list = searchResult.length
    ? searchResult
    : filterResult.length
    ? filterResult
    : countryList

  return (
    <Div>
      {searchString && !searchResult.length ? (
        <h1>No Results Found.</h1>
      ) : (
        list.map(({ alpha2Code, name, flag, population, region, capital }) => {
          return (
            <Section
              key={alpha2Code}
              onClick={() =>
                navigate(`/rest-countries-api/country-details/${name}`)
              }
            >
              <Div1>
                <Image src={flag} alt={`${name} flag`} />
              </Div1>

              <Div2>
                <H2>{name}</H2>
                <Ul>
                  <Li>
                    <Span>Population:</Span> {population}
                  </Li>
                  <Li>
                    <Span>Region:</Span> {region}
                  </Li>
                  <Li>
                    <Span>Capital:</Span> {capital}
                  </Li>
                </Ul>
              </Div2>
            </Section>
          )
        })
      )}
    </Div>
  )
}

export default React.memo(Card)
