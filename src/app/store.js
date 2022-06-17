import { configureStore } from "@reduxjs/toolkit"
import countriesReducer from "../features/countries/countrySlice"
import themeReducer from "../features/theme/themeSlice"
import filterReducer from "../features/filter/filterSlice"
import searchReducer from "../features/search/searchSlice"
import countryDetailReducer from "../features/countryDetails/countryDetailsSlice"

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeReducer,
    filter: filterReducer,
    search: searchReducer,
    countryDetails: countryDetailReducer,
  },
})

// store.subscribe(() => console.log(store.getState()))

export default store
