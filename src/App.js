import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/styles/Global/Global"
import Header from "./components/Header"
import Home from "./components/Home"
import CountryDetails from "./components/CountryDetails"
import NoMatch from "./components/NoMatch"

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

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle darkmode={darkMode} />
        <Header mode={{ darkMode, toggleMode }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country-details/:country" element={<CountryDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
