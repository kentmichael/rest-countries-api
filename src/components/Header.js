import React from "react"
import { PageHeader, Div, LogoLink, Button, Span } from "./styles/Header/Header"
import { useSelector, useDispatch } from "react-redux"
import { toggleMode } from "../features/theme/themeSlice"

const Header = () => {
  const darkMode = useSelector((state) => state.theme.darkMode)
  const dispatch = useDispatch()

  return (
    <PageHeader>
      <Div>
        <LogoLink to="rest-countries-api/">Where in the world?</LogoLink>
        <Button onClick={() => dispatch(toggleMode())}>
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
