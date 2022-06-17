import { createSlice } from "@reduxjs/toolkit"

const darkMode = JSON.parse(localStorage.getItem("RC_API_Theme")) ?? true

const initialState = {
  darkMode,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export default themeSlice.reducer
export const { toggleMode } = themeSlice.actions
