import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  gap: 4.81rem;
  max-width: 80rem;
  margin-bottom: 3.94rem;
  margin-inline: auto;

  @media (min-width: 71.88em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
`

export const Label = styled.label`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  margin: 0;
  padding-block: 2.38rem;
  padding-left: 4rem;
  padding-right: 2.38rem;
  border: none;
  border-radius: 0.31rem;
  background-color: var(--theme-element);
  font-family: var(--font-primary);
  font-size: 1.19rem;
  font-weight: 600;
  color: var(--theme-text);
  box-shadow: 0.06rem 0.06rem 0.5rem hsla(0, 0%, 20%, 0.2);

  @media (min-width: 40em) {
    padding-left: 9.31rem;
  }

  @media (min-width: 71.88em) {
    width: 30.19rem;
    padding-block: 1.5rem;
    padding-left: 4.63rem;
    padding-right: 1.5rem;
  }
`

export const Span = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;

  @media (min-width: 40em) {
    left: 4.66rem;
  }

  @media (min-width: 71.88em) {
    left: 2.32rem;
  }
`

export const Label2 = styled.label`
  max-width: 25rem;
  position: relative;
`

export const Select = styled.select`
  width: 100%;
  margin: 0;
  padding: 2.38rem;
  border: none;
  border-radius: 0.31rem;
  background-color: var(--theme-element);
  font-family: var(--font-primary);
  font-size: 1.19rem;
  font-weight: 600;
  color: var(--theme-text);
  box-shadow: 0.06rem 0.06rem 0.5rem hsla(0, 0%, 20%, 0.2);
  appearance: none;
  cursor: pointer;

  &::after {
    margin-bottom: 5px;
  }

  @media (min-width: 71.88em) {
    width: 15.63rem;
    padding: 1.5rem;
  }
`

export const Span2 = styled.span`
  position: absolute;
  top: 50%;
  right: 2.38rem;
  transform: translateY(-50%);

  @media (min-width: 71.88em) {
    right: 1.5rem;
  }
`

export const Option = styled.option`
  font-family: var(--font-primary);
  font-size: 1.19rem;
  font-weight: 300;
`

export const OptionGroup = styled.optgroup`
  margin: 0;
  padding-block: 1.25rem;
  padding-inline: 1.56rem;
`
