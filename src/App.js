import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shopping from './Components/Shopping/Shopping';
import SignUpPage from './Components/SignUp/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import AddToCart from './Components/AddToCart/AddToCart';


function App(){
    return (
      <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/Shopping"
              element={<Shopping />}
            ></Route>
            <Route
              path="/signup"
              element={<SignUpPage />}
            ></Route>
            <Route
              path="/login"
              element={<LoginPage />}
            ></Route>
            <Route
              path="/addtocart"
              element={<AddToCart />}
            ></Route>
          </Routes>
        </div>
       </Router>
      </>
    );
}

export default App;


