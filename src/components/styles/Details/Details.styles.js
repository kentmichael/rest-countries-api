import styled from "styled-components"

export const Section = styled.section`
  display: grid;
  gap: 5.81rem;
  align-items: center;

  @media (min-width: 71.88em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8.75rem;
  }
`

export const Div = styled.div`
  @media (min-width: 71.88em) {
    height: 25rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 71.88em) {
    height: 100%;
  }
`

export const Div1 = styled.div``

export const H1 = styled.h1`
  margin-bottom: 4.25rem;
  font-size: 2.13rem;

  @media (min-width: 71.88em) {
    margin-bottom: 2.38rem;
    font-size: 1.63rem;
  }
`

export const Ul = styled.ul`
  display: grid;
  gap: 3.63rem;
  list-style-type: none;
  margin-top: 0;
  margin-bottom: 3rem;
  margin-inline: 0;
  padding: 0;
  font-size: 1.5rem;

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4.69rem;
  }

  @media (min-width: 71.88em) {
    font-size: 1rem;
  }
`

export const Ul1 = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Ul2 = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

export const Span1 = styled.span`
  font-weight: 600;
`

export const Div2 = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: 71.88em) {
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`

export const H2 = styled.h2`
  font-size: 1.63rem;

  @media (min-width: 71.88em) {
    font-size: 0.88rem;
  }
`

export const Ul3 = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * {
    flex: 1 1 auto;
  }
`

export const Button = styled.button`
  width: 100%;
  margin: 0;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: none;
  border-radius: 0.13rem;
  background-color: var(--theme-element);
  font-family: var(--font-primary);
  font-size: 1.25rem;
  color: var(--theme-text);
  box-shadow: 0.06rem 0.06rem 0.5rem hsla(0, 0%, 20%, 0.2);
  cursor: pointer;

  @media (min-width: 71.88em) {
    font-size: 0.88rem;
  }
`
