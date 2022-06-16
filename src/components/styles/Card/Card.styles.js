import styled from "styled-components"

export const Div = styled.div`
  display: grid;
  gap: 5rem;
  max-width: 80rem;
  margin-inline: auto;
  margin-bottom: 8rem;

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 71.88em) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4.63rem;
    margin-bottom: 2.75rem;
    padding-inline: 0;
  }
`

export const Section = styled.section`
  overflow: hidden;
  border-radius: 0.63rem;
  background-color: var(--theme-element);
  cursor: pointer;
  transform: scale(none);
  transition: transform 200ms ease-in-out;
  box-shadow: 0.06rem 0.06rem 0.5rem hsla(0, 0%, 20%, 0.2);

  &:hover {
    transform: scale(1.03);
  }
`

export const Div1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 20.06rem;

  @media (min-width: 71.88em) {
    height: 10.13rem;
  }
`

export const Image = styled.img`
  width: auto;
  height: 100%;

  @media (min-width: 71.88em) {
    width: 100%;
    height: 10.13rem;
  }
`

export const Div2 = styled.div`
  padding-block: 3.75rem;
  padding-inline: 3.13rem;

  @media (min-width: 71.88em) {
    padding-block: 1.86rem;
    padding-inline: 1.56rem;
  }
`

export const H2 = styled.h2`
  margin-bottom: 3.13rem;
  font-size: 1.75rem;

  @media (min-width: 71.88em) {
    margin-bottom: 1.63rem;
    font-size: 1rem;
  }
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    margin-bottom: 1.75rem;

    @media (min-width: 71.88em) {
      margin-bottom: 0.88rem;
    }
  }
`

export const Li = styled.li`
  font-size: 1.38rem;

  @media (min-width: 71.88em) {
    font-size: 0.75rem;
  }
`

export const Span = styled.span`
  font-weight: 600;
`
