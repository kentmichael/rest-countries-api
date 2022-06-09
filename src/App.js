import React, { useState, useEffect, useReducer } from "react"
import { ThemeProvider } from "styled-components"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import GlobalStyle from "./components/styles/Global/Global"
import Header from "./components/Header"
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails"
import NoMatch from "./components/NoMatch"

export const AppContext = React.createContext()

const theme = {
  dark: {
    element: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 100%)",
  },
  light: {
    element: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    input: "hsl(0, 0%, 52%)",
  },
}

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
        isLoading: action.pending,
        loadingMessage: action.pendingMsg,
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

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", data: response.data })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error })
      })
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkmode={darkMode} />
        <Header mode={{ darkMode, toggleMode }} />
        <AppContext.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path="rest-countries-api/" element={<Home />} />
            <Route
              path="rest-countries-api/country-details/:country"
              element={<CountryDetails />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AppContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
