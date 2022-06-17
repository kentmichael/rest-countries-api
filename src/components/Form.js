import React, { useState, useRef, useEffect, useTransition } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setSearchString,
  setSearchResult,
} from "../features/search/searchSlice"
import { selectFilter, setFilterResult } from "../features/filter/filterSlice"
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
  const [isPending, startTransition] = useTransition()
  const inputRef = useRef()
  const countryList = useSelector((state) => state.countries.countryList)
  const { searchString, searchResult } = useSelector((state) => state.search)
  const { filterOption, filterResult } = useSelector((state) => state.filter)
  const [input, setInput] = useState(searchString)

  const dispatch = useDispatch()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    dispatch(setSearchResult(searchList(searchString)))
  }, [searchString])

  useEffect(() => {
    dispatch(setFilterResult(filterList(filterOption)))
  }, [filterOption])

  const handleOnChange = (event) => {
    if (event.target.name === "searchString") {
      setInput(event.target.value)
      startTransition(() => {
        dispatch(setSearchString(event.target.value))
      })
    } else {
      dispatch(selectFilter(event.target.value))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const searchList = (keyword) => {
    if (!keyword) return []
    const list = filterResult.length ? filterResult : countryList

    return list.filter((country) =>
      country.name.toUpperCase().includes(keyword.toUpperCase())
    )
  }

  const filterList = (option) => {
    const list = searchResult.length ? searchResult : countryList

    const filteredList = list.filter(
      (country) => country.region.toUpperCase() === option.toUpperCase()
    )

    const edgeCaseList = list.length
      ? filteredList.length
        ? filteredList
        : countryList
      : countryList

    if (searchString.length)
      dispatch(setSearchResult(searchFilterList(searchString, edgeCaseList)))

    return filteredList
  }

  const searchFilterList = (keyword, list) => {
    return list.filter((country) =>
      country.name.toUpperCase().includes(keyword.toUpperCase())
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        <Span className="fa-solid fa-magnifying-glass"></Span>
        <Input
          type="search"
          ref={inputRef}
          name="searchString"
          value={input}
          onChange={handleOnChange}
          placeholder="Search for a country..."
        />
      </Label>
      <Label2>
        <Select
          value={filterOption}
          name="filterOption"
          onChange={handleOnChange}
        >
          <Option value="all" hidden={filterOption === "all" ? true : false}>
            Filter by Region
          </Option>
          <Option
            value="africa"
            hidden={filterOption === "africa" ? true : false}
          >
            Africa
          </Option>
          <Option
            value="americas"
            hidden={filterOption === "americas" ? true : false}
          >
            America
          </Option>
          <Option value="asia" hidden={filterOption === "asia" ? true : false}>
            Asia
          </Option>
          <Option
            value="europe"
            hidden={filterOption === "europe" ? true : false}
          >
            Europe
          </Option>
          <Option
            value="oceania"
            hidden={filterOption === "oceania" ? true : false}
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
