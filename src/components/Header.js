import React from "react"
import { PageHeader, Div, LogoLink, Button, Span } from "./styles/Header/Header"

const Header = (props) => {
  const { darkMode, toggleMode } = props.mode

  return (
    <PageHeader>
      <Div>
        <LogoLink to="rest-countries-api/">Where in the world?</LogoLink>
        <Button onClick={toggleMode}>
          <Span
            className={`fa-${darkMode ? "regular" : "solid"} fa-moon`}
          ></Span>
          {darkMode ? "Light" : "Dark"} Mode
        </Button>
      </Div>
    </PageHeader>
  )
}

export default Header
