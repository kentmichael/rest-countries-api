import React from "react"
import { useSelector } from "react-redux"
import Form from "./Form"
import { Main } from "./styles/Home/Home"
import Card from "./Card"
import Error from "./Error"

const Home = () => {
  const { isLoading, errorMessage } = useSelector((state) => state.countries)

  return (
    <React.Fragment>
      <Main>
        <Form />
        {isLoading && <h1>Fetching data...</h1>}
        {errorMessage ? <Error error={errorMessage} /> : <Card />}
      </Main>
    </React.Fragment>
  )
}

export default React.memo(Home)
