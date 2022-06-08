import React, { useEffect, useReducer, useTransition } from "react"
import axios from "axios"
import Form from "./Form"
import { Main, H1, H2 } from "./styles/Home/Home"
import Card from "./Card"

const initialState = {
  isLoading: true,
  hasError: false,
  errorMessage: "",
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
    case "FETCH_SUCCESS":
      return {
        ...state,
        countryList: action.data,
        isLoading: false,
        hasError: false,
      }
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        startTransition(() => {
          dispatch({ type: "FETCH_SUCCESS", data: response.data })
        })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message })
      })
  }, [])

  return (
    <React.Fragment>
      <Main>
        <Form state={state} dispatch={dispatch} />
        {state.isLoading && <H1>Connecting to server</H1>}
        {isPending ? (
          <H2>Fetching data...</H2>
        ) : state.hasError ? (
          <H1>Error occured while fetching data. {state.errorMessage}</H1>
        ) : (
          <Card state={state} dispatch={dispatch} />
        )}
      </Main>
    </React.Fragment>
  )
}

export default React.memo(Home)
