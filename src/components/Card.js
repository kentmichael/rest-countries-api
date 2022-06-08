import React from "react"
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

const Card = (props) => {
  return (
    <Div>
      {props.state.countryList?.map(
        ({ alpha2Code, name, flag, population, region, capital }) => {
          return (
            <Section key={alpha2Code}>
              <Div1>
                <Image src={flag} alt="Flag" />
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
        }
      )}
    </Div>
  )
}

export default React.memo(Card)
