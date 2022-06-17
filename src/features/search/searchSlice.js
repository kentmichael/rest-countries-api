import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchString: "",
  searchResult: [],
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase("filter/selectFilter", (state) => {
      state.searchResult = []
    })
  },
})

export default searchSlice.reducer
export const { setSearchString, setSearchResult } = searchSlice.actions
