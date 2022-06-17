import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isLoading: false,
  countryList: [],
  errorMessage: "",
}

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  () => {
    return axios
      .get("https://restcountries.com/v2/all")
      .then((response) => response.data)
  }
)

const countrySlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false
      state.countryList = action.payload
      state.errorMessage = ""
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false
      state.countryList = []
      state.errorMessage = action.error.message
    })
  },
})

export default countrySlice.reducer
