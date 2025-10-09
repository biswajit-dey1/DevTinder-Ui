import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import feedReducer from "./feedSlice.js"
import requestReducer from "./requestSlice.js"
import connectionReducer from "./connectionSlice.js"

const appStore = configureStore({
    reducer:{
     user:userReducer,
     feed:feedReducer,
     request:requestReducer,
     connection:connectionReducer
     

    }
})

export default appStore