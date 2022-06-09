import React, { useEffect, useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Main, Button, Span } from "./styles/CountryDetails/CountryDetails"
import Details from "./Details"
import Error from "./Error"

const initialState = {
  isLoading: true,
  hasError: false,
  errorMessage: "",
  countryInfo: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: "",
        countryInfo: action.data[0],
      }
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
        countryInfo: {},
      }
    default:
      return state
  }
}

const CountryDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${params.country}`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", data: response.data })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error })
      })
  }, [params])

  return (
    <React.Fragment>
      <Main>
        <Button onClick={() => navigate(-1)}>
          <Span className="fa-solid fa-arrow-left-long"></Span> Back
        </Button>
        {state.isLoading ? (
          <h1>Fetching data...</h1>
        ) : state.hasError ? (
          <Error state={state} />
        ) : (
          <Details state={state} />
        )}
      </Main>
    </React.Fragment>
  )
}

export default CountryDetails
