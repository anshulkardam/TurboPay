import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../shared-store'

// Define a type for the slice state
export interface mulstate {
  value: number
}

// Define the initial state using that type
const initialState: mulstate = {
  value: 5,
}

export const mulslice = createSlice({
  name: 'mul',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    mul: (state) => {
      state.value *= 2
    },
  },
})

export const { mul } = mulslice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default mulslice.reducer