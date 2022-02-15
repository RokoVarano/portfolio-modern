
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UIState {
  menu: boolean,
}

// Define the initial state using that type
const initialState: UIState = {
  menu: false,
}

export default createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMenu: (state) => { 
        state.menu = !state.menu 
        return state
    },
  },
})

//TODO: ver tutorial de como usar redux thunk en con toolkit
