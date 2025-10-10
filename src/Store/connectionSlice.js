import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
  name: "connection",
  initialState: [],

  reducers: {

    setConnection: (state, action) => {
      state.push(action.payload)
    },
    addConnection: (state, action) => {
      return action.payload
    },

    removeConnection: () => null

  }
})

export const { setConnection, addConnection, removeConnection } = connectionSlice.actions
export default connectionSlice.reducer