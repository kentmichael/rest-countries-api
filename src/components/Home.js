import React, { useContext } from "react"
import Form from "./Form"
import { Main } from "./styles/Home/Home"
import Card from "./Card"
import { AppContext } from "../App"
import Error from "./Error"

const Home = () => {
  const { state } = useContext(AppContext)

  return (
    <React.Fragment>
      <Main>
        <Form />
        {state.isLoading && <h1>Fetching data...</h1>}
        {state.hasError ? <Error state={state} /> : <Card />}
      </Main>
    </React.Fragment>
  )
}

export default React.memo(Home)
