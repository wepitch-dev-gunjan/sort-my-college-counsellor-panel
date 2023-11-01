import * as React from "react";
// import * as ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Session from "./pages/session/Session";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";



function App() {
  return (
    <div className="App">
          
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Home />}  />
              <Route path="/header" element={<Header/>} />
              <Route path="/test" element={<Sidebar/>} />
              <Route path="/session" element={<Session/> } />
              <Route path="/payment" element={<Payment/> } />
              <Route path="/profile" element={<Profile/> } />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
