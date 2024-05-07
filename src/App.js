import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shopping from './Components/Shopping/Shopping';
import Confusion from './Components/Confusion/Confusion';
import CartDetails from './Components/CartDetails/CartDetails';

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
          </Routes>
        </div>
       </Router>
       {/* <CartDetails/> */}
      </>
    );
}

export default App;
