import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  setCountryData,
  fetchCountryDetails,
} from "../features/countryDetails/countryDetailsSlice"
import { Main, Button, Span } from "./styles/CountryDetails/CountryDetails"
import Details from "./Details"
import Error from "./Error"

const CountryDetails = () => {
  const countryList = useSelector((state) => state.countries.countryList)
  const { isLoading, errorMessage } = useSelector(
    (state) => state.countryDetails
  )
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)

    if (countryList.length) {
      const country = countryList.find(
        (country) => country.name.toUpperCase() === params.country.toUpperCase()
      )
      dispatch(setCountryData(country))
    } else {
      dispatch(fetchCountryDetails(params.country))
    }
  }, [params.country])

  return (
    <React.Fragment>
      <Main>
        <Button onClick={() => navigate(-1)}>
          <Span className="fa-solid fa-arrow-left-long"></Span> Back
        </Button>
        {isLoading ? (
          <h1>Fetching data...</h1>
        ) : errorMessage ? (
          <Error error={errorMessage} />
        ) : (
          <Details />
        )}
      </Main>
    </React.Fragment>
  )
}

export default CountryDetails
