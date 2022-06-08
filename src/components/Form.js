import React, { useRef, useEffect } from "react"
import {
  StyledForm,
  Label,
  Input,
  Span,
  Label2,
  Select,
  Span2,
  Option,
} from "./styles/Form/Form"

const Form = (props) => {
  const inputRef = useRef()
  const { state, dispatch } = props

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleOnChange = (event) => {
    dispatch({
      type: event.target.name,
      payload: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        <Span className="fa-solid fa-magnifying-glass"></Span>
        <Input
          type="search"
          ref={inputRef}
          name="queryString"
          value={state.query}
          onChange={handleOnChange}
          placeholder="Search for a country..."
        />
      </Label>
      <Label2>
        <Select
          value={state.filter}
          name="filterString"
          onChange={handleOnChange}
        >
          <Option value="all" hidden={state.filter === "all" ? true : false}>
            Filter by Region
          </Option>
          <Option value="africa">Africa</Option>
          <Option value="america">America</Option>
          <Option value="asia">Asia</Option>
          <Option value="europe">Europe</Option>
          <Option value="oceania">Oceania</Option>
        </Select>
        <Span2 className="fa-solid fa-chevron-down"></Span2>
      </Label2>
    </StyledForm>
  )
}

export default Form
