import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterOption: "all",
  filterResult: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      state.filterOption = action.payload
    },
    setFilterResult: (state, action) => {
      state.filterResult = action.payload
    },
  },
})

export default filterSlice.reducer
export const { selectFilter, setFilterResult } = filterSlice.actions
