import styled from "styled-components"
import { Link } from "react-router-dom"

export const PageHeader = styled.header`
  padding-block: 4.06rem;
  padding-inline: 2rem;
  background-color: var(--theme-bg);

  @media (min-width: 87.5em) {
    padding-block: 1.88rem;
    padding-inline: 0;
  }
`

export const Div = styled.div`
  max-width: 80rem;
  margin-inline: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(Link)`
  color: var(--theme-text);
  font-size: 1.38rem;
  font-weight: 800;

  @media (min-width: 87.5em) {
    font-size: 1.13rem;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 1.19rem;
  font-weight: 300;
  color: var(--theme-text);
  cursor: pointer;

  @media (min-width: 87.5em) {
    font-size: 0.81rem;
  }
`

export const Span = styled.span`
  font-size: 1.81rem;

  @media (min-width: 87.5em) {
    font-size: 1.06rem;
  }
`
