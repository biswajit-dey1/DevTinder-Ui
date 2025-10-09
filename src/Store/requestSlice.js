import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name: "request",
    initialState: null,

    reducers: {

        addRequest: (state, action) => {
            return action.payload
        },

        removeRequest: (state, action) => {
            return null
        },

        removeUserFromRuquest: (state, action) => {
            const remainRequest = state.filter((user) => user._id !== action.payload)
            return remainRequest
        }
    }
})

export const { addRequest, removeRequest, removeUserFromRuquest } = requestSlice.actions

export default requestSlice.reducer