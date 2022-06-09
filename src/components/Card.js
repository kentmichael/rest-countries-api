import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../App"
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
  const { state } = useContext(AppContext)
  const { countryList, filterResult, queryResult } = state
  const navigate = useNavigate()

  const list = queryResult
    ? queryResult
    : filterResult
    ? filterResult
    : countryList

  return (
    <Div>
      {list.map(({ alpha2Code, name, flag, population, region, capital }) => {
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
      })}
      {state.queryString ? (
        list.length ? null : (
          <h2>No Results Found.</h2>
        )
      ) : null}
    </Div>
  )
}

export default React.memo(Card)
