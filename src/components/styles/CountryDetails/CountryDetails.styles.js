import styled from "styled-components"

export const Main = styled.main`
  max-width: 80rem;
  margin-bottom: 7.69rem;
  margin-inline: 3.44rem;
  padding-top: 2rem;

  @media (min-width: 87.5em) {
    margin-inline: auto;
  }
`

export const Button = styled.button`
  margin-bottom: 7.88rem;
  padding-block: 1rem;
  padding-inline: 3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: var(--theme-element);
  font-family: var(--font-primary);
  font-size: 1.5rem;
  color: var(--theme-text);
  cursor: pointer;
  box-shadow: 0.06rem 0.06rem 0.5rem hsla(0, 0%, 20%, 0.2);

  @media (min-width: 71.88em) {
    margin-bottom: 4.86rem;
    padding-block: 0.63rem;
    padding-inline: 2rem;
    font-size: 1rem;
  }
`

export const Span = styled.span`
  margin-right: 1rem;
`
