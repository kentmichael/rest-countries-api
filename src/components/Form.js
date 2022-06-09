import React, { useRef, useEffect, useContext } from "react"
import { AppContext } from "../App"
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

const Form = () => {
  const { state, dispatch } = useContext(AppContext)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleOnChange = (event) => {
    dispatch({
      type: event.target.name,
      payload: event.target.value,
      data:
        event.target.name === "filterOption"
          ? filterList(event.target.value)
          : searchList(event.target.value),
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const filterList = (keyword) => {
    if (keyword === "all") return ""

    return state.countryList.filter(
      (countryObj) => countryObj.region.toUpperCase() === keyword.toUpperCase()
    )
  }

  const searchList = (query) => {
    if (!query) return ""
    const list = state.filterResult ? state.filterResult : state.countryList

    return list.filter((countryObj) =>
      countryObj.name.toUpperCase().includes(query.toUpperCase())
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        <Span className="fa-solid fa-magnifying-glass"></Span>
        <Input
          type="search"
          ref={inputRef}
          name="queryString"
          value={state.queryString}
          onChange={handleOnChange}
          placeholder="Search for a country..."
        />
      </Label>
      <Label2>
        <Select
          value={state.filterOption}
          name="filterOption"
          onChange={handleOnChange}
        >
          <Option
            value="all"
            hidden={state.filterOption === "all" ? true : false}
          >
            Filter by Region
          </Option>
          <Option
            value="africa"
            hidden={state.filterOption === "africa" ? true : false}
          >
            Africa
          </Option>
          <Option
            value="americas"
            hidden={state.filterOption === "americas" ? true : false}
          >
            America
          </Option>
          <Option
            value="asia"
            hidden={state.filterOption === "asia" ? true : false}
          >
            Asia
          </Option>
          <Option
            value="europe"
            hidden={state.filterOption === "europe" ? true : false}
          >
            Europe
          </Option>
          <Option
            value="oceania"
            hidden={state.filterOption === "oceania" ? true : false}
          >
            Oceania
          </Option>
        </Select>
        <Span2 className="fa-solid fa-chevron-down"></Span2>
      </Label2>
    </StyledForm>
  )
}

export default Form
