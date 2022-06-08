import React, { useEffect, useReducer } from "react"
import axios from "axios"
import Form from "./Form"
import { Main } from "./styles/Home/Home"
import Card from "./Card"

const initialState = {
  query: "",
  filter: "all",
  countryList: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "queryString":
      return {
        ...state,
        query: action.payload,
      }
    case "filterString":
      return {
        ...state,
        filter: action.payload,
      }
    case "countryData":
      return {
        ...state,
        countryList: action.payload,
      }
    default:
      return state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        dispatch({ type: "countryData", payload: response.data })
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

export default Home
