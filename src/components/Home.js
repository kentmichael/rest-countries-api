import React, { useEffect, useReducer, useState } from "react"
import axios from "axios"
import Form from "./Form"
import { Main } from "./styles/Home/Home"
import Card from "./Card"

const initialState = {
  queryString: "",
  queryResult: "",
  filterOption: "all",
  filterResult: "",
  countryList: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "queryString":
      return {
        ...state,
        queryString: action.payload,
        queryResult: action.data,
      }
    case "filterOption":
      return {
        ...state,
        filterOption: action.payload,
        filterResult: action.data,
        queryResult: "",
      }
    case "countryData":
      return {
        ...state,
        countryList: action.data,
      }
    default:
      return state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        dispatch({ type: "countryData", data: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <React.Fragment>
      <Main>
        <Form state={state} dispatch={dispatch} />
        <Card state={state} dispatch={dispatch} />
      </Main>
    </React.Fragment>
  )
}

export default React.memo(Home)
