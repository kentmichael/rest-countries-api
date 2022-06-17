import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: false,
  countryData: {},
  errorMessage: "",
}

export const fetchCountryDetails = createAsyncThunk(
  "countryDetails/fetchCountryDetails",
  (country) => {
    return axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.data)
  }
)

const countryDetailsSlice = createSlice({
  name: "countryDetails",
  initialState,
  reducers: {
    setCountryData: (state, action) => {
      state.countryData = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountryDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => {
      state.isLoading = false
      state.countryData = action.payload[0]
      state.errorMessage = ""
    })
    builder.addCase(fetchCountryDetails.rejected, (state, action) => {
      state.isLoading = false
      state.countryData = {}
      state.errorMessage = action.error.message
    })
  },
})

export default countryDetailsSlice.reducer
export const { setCountryData } = countryDetailsSlice.actions
