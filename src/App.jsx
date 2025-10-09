import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Feed from "./Components/Feed"
import Login from "./Components/Login"
import { Provider } from "react-redux"
import appStore from "./Store/appStore"
import Profile from "./Components/Profile"
import Request from "./Components/Request"
import Connection from "./Components/Connection"



function App() {


  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/request" element={<Request/>}/>
          <Route path="/connection" element={<Connection/>}/>

          </Route>
        </Routes>
      
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
